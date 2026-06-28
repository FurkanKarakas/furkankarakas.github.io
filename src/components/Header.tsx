import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        <Typography
          component={Link}
          href="/"
          variant="h6"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "text.primary",
            fontWeight: 700,
          }}
        >
          Furkan Karakaş
        </Typography>

        <Box
          component="nav"
          aria-label="Primary navigation"
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                color: "text.primary",
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              {item.label}
            </Button>
          ))}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
