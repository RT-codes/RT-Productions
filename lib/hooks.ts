import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useSyncExternalStore } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return {
    ref,
  };
}

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");
const getServerTheme = (): Theme => "dark";

// The `dark` class on <html> is the source of truth; the inline script in layout.tsx sets it before first paint.
export function useTheme() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  function setTheme(next: Theme) {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }

  return { theme, setTheme, toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark") };
}
