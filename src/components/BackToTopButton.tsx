"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useEffect, useRef, useState } from "react";

const SHOW_AFTER_SCROLL_Y = 160;
const SCROLL_DURATION_MS = 550;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (window.scrollY <= 0) {
      return;
    }

    const startY = window.scrollY;
    const startTime = performance.now();

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      const nextY = Math.round(startY * (1 - eased));

      window.scrollTo(0, nextY);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="small"
        aria-label="Back to top"
        onClick={scrollToTop}
        sx={{ position: "fixed", right: 20, bottom: 20, zIndex: 1200 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
