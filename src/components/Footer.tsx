import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: 3,
        mt: 4,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CopyrightIcon fontSize="small" sx={{ color: "text.primary" }} />
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {year} Furkan Karakaş
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href="mailto:fkarakasster@gmail.com"
            color="inherit"
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.primary",
            }}
          >
            <EmailIcon fontSize="small" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/furkan-karakas"
            target="_blank"
            rel="noreferrer"
            color="inherit"
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.primary",
            }}
          >
            <LinkedInIcon fontSize="small" />
          </Link>
          <Link
            href="https://github.com/FurkanKarakas"
            target="_blank"
            rel="noreferrer"
            color="inherit"
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.primary",
            }}
          >
            <GitHubIcon fontSize="small" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
