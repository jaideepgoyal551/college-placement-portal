import { useState, useEffect, useCallback } from "react";

export function useKeyboard(key, cb, deps = []) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === key && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        cb(e);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, cb, ...deps]);
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((p) => !p), []);
  const close = useCallback(() => setOpen(false), []);

  useKeyboard("k", toggle);

  return { open, setOpen, toggle, close };
}

export function useCursorGlow() {
  useEffect(() => {
    const handle = (e) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return progress;
}

export function useIntersection(options = {}) {
  const [ref, setRef] = useState(null);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([e]) => setEntry(e), { threshold: 0.1, ...options });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options.threshold]);

  return [setRef, entry];
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
