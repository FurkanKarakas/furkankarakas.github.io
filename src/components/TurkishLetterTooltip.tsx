"use client";

import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

export default function TurkishLetterTooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tooltip
      title={
        <Box sx={{ p: 0.5 }}>
          <Typography variant="body2">Unicode: U+015F</Typography>
          <Typography variant="body2">
            Appears in the Turkish alphabet.
          </Typography>
        </Box>
      }
      arrow
      placement="top"
      disableHoverListener={false}
      disableTouchListener={false}
      enterTouchDelay={0}
      leaveTouchDelay={2500}
    >
      <Box component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
        {children}
      </Box>
    </Tooltip>
  );
}
