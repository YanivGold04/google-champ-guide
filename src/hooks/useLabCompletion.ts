import { useState, useEffect } from 'react';

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

  const markLabComplete = (labId: string) => {
    const updated = new Set(completedLabs);
    updated.add(labId);
    setCompletedLabs(updated);
    localStorage.setItem(`${platform}-labs-completed`, JSON.stringify([...updated]));
  };

  const markPlatformComplete = () => {
    const completions: PlatformCompletion = JSON.parse(
      localStorage.getItem('platform-completions') || '{}'
    );
    completions[platform] = true;
    localStorage.setItem('platform-completions', JSON.stringify(completions));
  };

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
    const stored = localStorage.getItem('platform-completions');
    if (stored) {
      setCompletions(JSON.parse(stored));
    }
  }, []);

  return completions;
};
