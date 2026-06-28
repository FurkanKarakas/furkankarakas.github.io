import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          border: 1,
          borderColor: "divider",
          borderRadius: 4,
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            Blog
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This is a placeholder blog page for the site.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
