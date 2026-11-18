"use client";

import { useMemo, useSyncExternalStore } from "react";

export const SAVED_OPPORTUNITIES_KEY = "ejc-saved-opportunities";
const EVENT = "ejc-saved-change";

function read(key: string): string[] { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; } }

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener(EVENT, callback); window.removeEventListener("storage", callback); };
}

function snapshot(key: string) { try { return localStorage.getItem(key) || "[]"; } catch { return "[]"; } }

/** Saved IDs for a localStorage key, kept in sync across components and tabs. */
export function useSavedIds(key = SAVED_OPPORTUNITIES_KEY) {
  const raw = useSyncExternalStore(subscribe, () => snapshot(key), () => "[]");
  return useMemo(() => { try { return JSON.parse(raw) as string[]; } catch { return []; } }, [raw]);
}

export function toggleSaved(id: string, key = SAVED_OPPORTUNITIES_KEY) {
  const current = read(key);
  const next = current.includes(id) ? current.filter((x) => x !== id) : [id, ...current];
  try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* storage unavailable */ }
  window.dispatchEvent(new Event(EVENT));
}

export function clearSaved(key = SAVED_OPPORTUNITIES_KEY) {
  try { localStorage.removeItem(key); } catch { /* storage unavailable */ }
  window.dispatchEvent(new Event(EVENT));
}
