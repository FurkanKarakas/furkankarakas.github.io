import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PastEducationSection from "../../components/about/PastEducationSection";
import WorkExperienceSection from "../../components/about/WorkExperienceSection";
import PersonalLifeSection from "../../components/about/PersonalLifeSection";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            About
          </Typography>
          <Typography variant="body1" color="textPrimary">
            It&apos;s great that you&apos;re here to learn more about me! In
            this section, you will find information about my educational
            background, work experience, and personal life. I hope this gives
            you a better understanding of who I am and what I value! 😊
          </Typography>
          <PastEducationSection />
          <WorkExperienceSection />
          <PersonalLifeSection />
        </Box>
      </Paper>
    </Container>
  );
}
