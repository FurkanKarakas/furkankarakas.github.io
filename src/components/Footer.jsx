// noinspection SpellCheckingInspection
import { Copyright, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer({ marginTop }) {
  const subject = encodeURI("Hi Furkan!");
  const body = encodeURI("Hi Furkan, let us have a chat!");

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "2px solid #fff",
        marginTop: marginTop,
        paddingY: 3,
      }}
    >
      <Stack
        display="flex"
        direction="column"
        alignItems="center"
        flexWrap="wrap"
        spacing={0.5}
      >
        <Stack display="flex" direction="row" spacing={1}>
          <Stack display="flex" direction="row" spacing={0.5}>
            <Copyright fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Copyright
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            <Link to="/" component={RouterLink} color="inherit">
              furkankarakas.github.io
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Stack>

        <Stack display="flex" direction="row" spacing={0.5}>
          <Email fontSize="medium" />
          <Link
            href={`mailto:fkarakasster@gmail.com?subject=${subject}&body=${body}`}
            color="inherit"
            underline="hover"
          >
            fkarakasster@gmail.com
          </Link>
        </Stack>

        <Stack display="flex" direction="row" spacing={0.5}>
          <LinkedIn fontSize="medium" />
          <Link
            href="https://www.linkedin.com/in/furkan-karakas/"
            target="_blank"
            color="inherit"
            underline="hover"
          >
            furkan-karakas
          </Link>
        </Stack>

        <Stack display="flex" direction="row" spacing={0.5}>
          <GitHub fontSize="medium" />
          <Link
            href="https://github.com/FurkanKarakas"
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
