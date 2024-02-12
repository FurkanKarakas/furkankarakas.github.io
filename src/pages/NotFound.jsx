import { Container, Typography } from "@mui/material";
import AnimatedPage from "../components/AnimatedPage.jsx";

export default function NotFound() {
  return (
    <AnimatedPage>
      <Container>
        <Typography variant={"h1"}>404</Typography>
        <Typography variant={"body1"}>
          The requested URL wasn't found!
        </Typography>
      </Container>
    </AnimatedPage>
  );
}
