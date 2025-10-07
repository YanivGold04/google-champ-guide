import { useState, useEffect, useCallback } from "react";

interface PlatformCompletion {
  [platform: string]: boolean;
}

export const useLabCompletion = (platform: string) => {
  const [completedLabs, setCompletedLabs] = useState<Set<string>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // ✅ Load completion status from sessionStorage (resets on refresh)
    const stored = sessionStorage.getItem(`${platform}-labs-completed`);
    if (stored) {
      setCompletedLabs(new Set(JSON.parse(stored)));
    }
  }, [platform]);

  useEffect(() => {
    // Check if all 3 labs are completed
    setIsComplete(completedLabs.size >= 3);
  }, [completedLabs]);

  const markLabComplete = useCallback(
    (labId: string) => {
      const updated = new Set(completedLabs);
      updated.add(labId);
      setCompletedLabs(updated);

      // ✅ Save to sessionStorage (not localStorage)
      sessionStorage.setItem(
        `${platform}-labs-completed`,
        JSON.stringify([...updated])
      );
    },
    [completedLabs, platform]
  );

  const markPlatformComplete = useCallback(() => {
    const completions: PlatformCompletion = JSON.parse(
      sessionStorage.getItem("platform-completions") || "{}"
    );
    completions[platform] = true;
    sessionStorage.setItem("platform-completions", JSON.stringify(completions));

    // Notify other components
    window.dispatchEvent(
      new CustomEvent("platform-completed", { detail: { platform } })
    );
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
      const stored = sessionStorage.getItem("platform-completions");
      if (stored) {
        setCompletions(JSON.parse(stored));
      }
    };

    // Load initial completions
    loadCompletions();

    // Listen for updates
    const handlePlatformComplete = () => loadCompletions();
    window.addEventListener("platform-completed", handlePlatformComplete);
    window.addEventListener("focus", loadCompletions);

    return () => {
      window.removeEventListener("platform-completed", handlePlatformComplete);
      window.removeEventListener("focus", loadCompletions);
    };
  }, []);

  return completions;
};
