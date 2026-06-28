"use client";
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: mode === "dark" ? "#ce93d8" : "#9c27b0",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f7f7f7",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#f5f5f5" : "#1f1f1f",
        secondary: mode === "dark" ? "#b0b0b0" : "#5f5f5f",
      },
    },
    typography: {
      fontFamily: "var(--font-roboto)",
    },
  });

export default getTheme("dark");
