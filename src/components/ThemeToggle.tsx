"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { useThemeMode } from "./ThemeProviderWrapper";

export default function ThemeToggle() {
  const themeMode = useThemeMode();

  if (!themeMode) {
    return null;
  }

  const { mode, toggleMode } = themeMode;
  const isDark = mode === "dark";

  return (
    <IconButton
      onClick={toggleMode}
      color="inherit"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      sx={{ ml: 1 }}
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
