import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  SvgIcon,
  Stack,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import WebsiteLogo from "/favicon.svg?react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [rotate, setRotate] = useState(false);

  return (
    <AppBar position="static">
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
          flexWrap={"wrap"}
          component={"nav"}
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="flex-end"
        >
          <Button to="/" variant={"text"} component={RouterLink}>
            Home
          </Button>

          <Button to="/about" variant={"text"} component={RouterLink}>
            About
          </Button>

          <Button to="/contact" variant={"text"} component={RouterLink}>
            Contact
          </Button>

          <Button to="/blog" variant={"text"} component={RouterLink}>
            Blog Posts
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
