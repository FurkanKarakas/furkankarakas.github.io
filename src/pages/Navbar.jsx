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
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [rotate, setRotate] = useState(false);

  return (
    <AppBar position="sticky" sx={{ marginBottom: 3 }}>
      <Toolbar>
        <motion.div
          animate={{ rotate: rotate ? 360 : 0 }}
          transition={{ duration: 1.0 }}
          onClick={() => setRotate(!rotate)}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <SvgIcon component={WebsiteLogo} inheritViewBox />
          </IconButton>
        </motion.div>

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
