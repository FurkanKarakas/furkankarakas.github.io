import { Container, Typography, Button, Link, Box } from "@mui/material";
import AnimatedPage from "../components/AnimatedPage.jsx";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <AnimatedPage>
      <Container>
        <Typography variant="h1" textAlign={"center"} gutterBottom>
          I am Furkan.
        </Typography>
        <Typography variant="h2" gutterBottom>
          Young & passionate software developer.
        </Typography>
        <Typography variant="body1" gutterBottom>
          My preferred software tools are{" "}
          <Link href="https://www.java.com/en/" target="_blank">
            <code>Java</code>
          </Link>
          ,{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <code>JavaScript</code>
          </Link>{" "}
          and{" "}
          <Link href="https://www.python.org/" target="_blank">
            <code>Python</code>
          </Link>
          .
        </Typography>
        <Box display={"flex"} justifyContent={"center"} marginTop={7}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/about"
            endIcon={<ArrowForwardIcon />}
          >
            Learn more about me
          </Button>
        </Box>
      </Container>
    </AnimatedPage>
  );
}
