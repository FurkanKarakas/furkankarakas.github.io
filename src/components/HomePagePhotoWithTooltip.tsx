"use client";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import profileImage from "../assets/furkan-ericeira.jpg";

export default function HomePagePhotoWithTooltip() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 240 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tooltip
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 0.5 }}>
            <Typography variant="body2">🇵🇹</Typography>
            <Typography variant="body2">
              Ericeira, Portugal, July 2025
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
        <Box
          component="img"
          src={profileImage.src}
          alt="Furkan Karakaş"
          sx={{
            width: { xs: "100%", sm: 220, md: 220 },
            height: { xs: "auto", sm: 220, md: 220 },
            objectFit: "cover",
            borderRadius: 3,
            border: 1,
            borderColor: "divider",
            boxShadow: 2,
          }}
        />
      </Tooltip>
    </Box>
  );
}
