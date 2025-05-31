"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type Theme = 'light' | 'dark' | 'high-contrast';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Evita renderizado inconsistente en SSR
  }

  return (
    <div className="w-full max-w-xs">
          <label className="block mb-2 text-sm font-medium">Tema:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="w-full p-2 border rounded bg-white text-black"
          >
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
            <option value="high-contrast">Alto contraste</option>
          </select>
        </div>
  );
}