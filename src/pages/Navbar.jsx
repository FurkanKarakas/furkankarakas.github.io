import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  SvgIcon,
  Stack,
  Divider,
  Typography,
} from "@mui/material";
import WebsiteLogo from "/favicon.svg?react";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ marginBottom: 3 }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SvgIcon component={WebsiteLogo} inheritViewBox />
        </IconButton>

        <Typography sx={{ flexGrow: 1 }} variant="h6" component="div">
          Personal Website
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="flex-end"
        >
          <Link to="/" component={RouterLink}>
            Home
          </Link>

          <Link to="/about" component={RouterLink}>
            About
          </Link>

          <Link to="/contact" component={RouterLink}>
            Contact
          </Link>

          <Link to="/blog" component={RouterLink}>
            Blog Posts
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
