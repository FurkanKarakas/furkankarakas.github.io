import AnimatedPage from "../components/AnimatedPage.jsx";
import { Container, Typography } from "@mui/material";

export default function Blog() {
  return (
    <AnimatedPage>
      <Container>
        <Typography variant={"h1"} textAlign={"center"} gutterBottom>
          Blog
        </Typography>
      </Container>
    </AnimatedPage>
  );
}
