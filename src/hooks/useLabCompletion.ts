import { useState, useEffect, useCallback } from 'react';

interface PlatformCompletion {
  [platform: string]: boolean;
}

export const useLabCompletion = (platform: string) => {
  const [completedLabs, setCompletedLabs] = useState<Set<string>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Load completion status from localStorage
    const stored = localStorage.getItem(`${platform}-labs-completed`);
    if (stored) {
      setCompletedLabs(new Set(JSON.parse(stored)));
    }
  }, [platform]);

  useEffect(() => {
    // Check if all 3 labs are completed
    setIsComplete(completedLabs.size >= 3);
  }, [completedLabs]);

  const markLabComplete = useCallback((labId: string) => {
    const updated = new Set(completedLabs);
    updated.add(labId);
    setCompletedLabs(updated);
    localStorage.setItem(`${platform}-labs-completed`, JSON.stringify([...updated]));
  }, [completedLabs, platform]);

  const markPlatformComplete = useCallback(() => {
    const completions: PlatformCompletion = JSON.parse(
      localStorage.getItem('platform-completions') || '{}'
    );
    completions[platform] = true;
    localStorage.setItem('platform-completions', JSON.stringify(completions));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('platform-completed', { detail: { platform } }));
  }, [platform]);

  return {
    completedLabs,
    isComplete,
    markLabComplete,
    markPlatformComplete,
  };
};

export const usePlatformCompletions = () => {
  const [completions, setCompletions] = useState<PlatformCompletion>({});

  useEffect(() => {
    const loadCompletions = () => {
      const stored = localStorage.getItem('platform-completions');
      if (stored) {
        setCompletions(JSON.parse(stored));
      }
    };

    // Load initial completions
    loadCompletions();

    // Listen for platform completion events
    const handlePlatformComplete = () => loadCompletions();
    window.addEventListener('platform-completed', handlePlatformComplete);
    window.addEventListener('focus', loadCompletions);
    
    return () => {
      window.removeEventListener('platform-completed', handlePlatformComplete);
      window.removeEventListener('focus', loadCompletions);
    };
  }, []);

  return completions;
};
