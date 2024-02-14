import { Box, CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";

export default function LoadingFallback() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Loading...</Typography>
      <CircularProgress size={60} />
    </Box>
  );
}
