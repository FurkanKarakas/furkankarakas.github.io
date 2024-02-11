// noinspection SpellCheckingInspection

import { Copyright, Email, Instagram } from "@mui/icons-material";
import { Box, Typography, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const subject = encodeURI("Hi Furkan!");
  const body = encodeURI("Hi Furkan, let us have a chat!");

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "2px solid #fff",
        marginTop: "auto",
        p: 3,
      }}
    >
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginX={5}
        flexWrap="wrap"
      >
        <Stack
          display="flex"
          direction="row"
          justifyContent="flex-start"
          spacing={2}
        >
          <Stack display="flex" direction="row" spacing={0.5}>
            <Copyright fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Copyright
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            <Link to="/" component={RouterLink} color="inherit">
              Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Stack>

        <Stack display="flex" direction="row" alignItems="center" spacing={0.5}>
          <Email fontSize="medium" />
          <Link
            href={`mailto:fkarakasster@gmail.com?subject=${subject}&body=${body}`}
            color="inherit"
            underline="hover"
          >
            fkarakasster@gmail.com
          </Link>
        </Stack>

        <Stack display="flex" direction="row" alignItems="center" spacing={0.5}>
          <Instagram fontSize="medium" />
          <Link
            href="https://www.instagram.com/furkan.karakas95/"
            target="_blank"
            color="inherit"
            underline="hover"
          >
            @furkan.karakas95
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
