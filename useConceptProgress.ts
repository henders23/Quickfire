import { useState, useMemo, useCallback } from "react";
import { allConcepts } from "./grammar-map";

export interface IncorrectQuestion {
  prompt: string;
  options: [string, string];
  correct: 0 | 1;
  explanation: string;
  yourAnswer: number | null;
  conceptId?: string;
}

export interface ConceptProgress {
  attempts: number;
  scoreHistory: number[];
  lastIncorrect: IncorrectQuestion[];
}

export type AllProgress = Record<string, ConceptProgress>;

const STORAGE_KEY = "qf_concept_progress";

function loadProgress(): AllProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AllProgress) : {};
  } catch {
    return {};
  }
}

function saveProgress(data: AllProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // silent degrade (private browsing / storage full)
  }
}

function computeSuggested(progress: AllProgress): string | null {
  let bestId: string | null = null;
  let bestPriority = -1;

  for (const c of allConcepts) {
    const p = progress[c.id];
    let priority: number;
    if (!p || p.attempts === 0) {
      priority = 100;
    } else {
      const avg = p.scoreHistory.reduce((s, v) => s + v, 0) / p.scoreHistory.length;
      const errorRate = p.lastIncorrect.length / 10;
      priority =
        (1 - avg / 100) * 0.55 +
        errorRate * 0.35 +
        Math.max(0, 1 - p.attempts / 5) * 0.10;
    }
    if (priority > bestPriority) {
      bestPriority = priority;
      bestId = c.id;
    }
  }
  return bestId;
}

export function useConceptProgress() {
  const [progress, setProgress] = useState<AllProgress>(loadProgress);

  const saveSessionResult = useCallback(
    (conceptId: string, score: number, incorrectQs: IncorrectQuestion[]) => {
      setProgress(prev => {
        const existing = prev[conceptId] ?? { attempts: 0, scoreHistory: [], lastIncorrect: [] };
        const updated: AllProgress = {
          ...prev,
          [conceptId]: {
            attempts: existing.attempts + 1,
            scoreHistory: [...existing.scoreHistory, score],
            lastIncorrect: incorrectQs,
          },
        };
        saveProgress(updated);
        return updated;
      });
    },
    []
  );

  const clearReviewedQuestions = useCallback((correctlyAnswered: IncorrectQuestion[]) => {
    setProgress(prev => {
      const updated = { ...prev };
      for (const q of correctlyAnswered) {
        if (!q.conceptId) continue;
        const cp = updated[q.conceptId];
        if (!cp) continue;
        updated[q.conceptId] = {
          ...cp,
          lastIncorrect: cp.lastIncorrect.filter(iq => iq.prompt !== q.prompt),
        };
      }
      saveProgress(updated);
      return updated;
    });
  }, []);

  const allIncorrectQuestions = useMemo(
    () => Object.values(progress).flatMap(cp => cp.lastIncorrect).filter(q => q.conceptId),
    [progress]
  );

  const suggestedConceptId = useMemo(() => computeSuggested(progress), [progress]);

  return { progress, saveSessionResult, clearReviewedQuestions, allIncorrectQuestions, suggestedConceptId };
}
