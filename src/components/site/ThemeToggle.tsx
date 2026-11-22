"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icon";

type Theme = "dark" | "light";

/** Sun/moon switch. The inline script in layout.tsx applies the saved theme
 *  before paint; this only flips it and remembers the choice. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const read = () => setTheme((document.documentElement.dataset.theme as Theme) ?? "dark");
    read();
  }, []);

  const next: Theme = theme === "light" ? "dark" : "light";

  const flip = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the switch still works for this visit */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={flip}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
