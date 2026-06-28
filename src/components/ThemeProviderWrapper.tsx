"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import { getTheme } from "../theme";

const ThemeModeContext = createContext<{
  mode: "light" | "dark";
  toggleMode: () => void;
} | null>(null);

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleMode = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  const value = useMemo(() => ({ mode, toggleMode }), [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div data-theme={mode}>{children}</div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
