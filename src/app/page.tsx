import type { Metadata } from "next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "../components/Link";
import profileImage from "../assets/OCTS9246.jpg";

export const metadata: Metadata = {
  title: { absolute: "Home | Furkan Karakaş" },
};

function TurkishLetterTooltip({ children }: { children: React.ReactNode }) {
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
      <span>{children}</span>
    </Tooltip>
  );
}

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 }, flex: 1 }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
              My name is Furkan Karaka
              <TurkishLetterTooltip>
                <span
                  style={{
                    display: "inline-block",
                    border: "2px solid red",
                    borderRadius: "4px",
                    padding: "0 3px",
                    margin: "0 2px",
                    lineHeight: 1.2,
                  }}
                >
                  ş
                </span>
              </TurkishLetterTooltip>
            </Typography>
            <Typography variant="body1">
              Software / Quality Assurance Engineer.
            </Typography>
            <Typography variant="body1">
              I like testing a software critically, and sometimes building it
              too. I also like to write about my experiences and share them with
              others. 😊
            </Typography>
            <Typography variant="body1">
              My favorite programming languages are{" "}
              <Box component="span" sx={{ display: "inline" }}>
                <Typography
                  component="a"
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  Python
                </Typography>
              </Box>{" "}
              and{" "}
              <Box component="span" sx={{ display: "inline" }}>
                <Typography
                  component="a"
                  href="https://www.java.com/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  Java
                </Typography>
              </Box>
              . I also use{" "}
              <Box component="span" sx={{ display: "inline" }}>
                <Typography
                  component="a"
                  href="https://appium.io/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  Appium
                </Typography>
              </Box>{" "}
              for mobile test automation and{" "}
              <Box component="span" sx={{ display: "inline" }}>
                <Typography
                  component="a"
                  href="https://playwright.dev/"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  Playwright
                </Typography>
              </Box>{" "}
              for modern web automation.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: 240 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tooltip
              title={
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, p: 0.5 }}
                >
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
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button component={Link} href="/about" variant="contained">
            Learn more about me
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
