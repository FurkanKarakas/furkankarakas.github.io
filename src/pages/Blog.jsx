import { Container, Typography } from "@mui/material";

import AnimatedPage from "../components/AnimatedPage.jsx";

export default function Blog() {
  return (
    <AnimatedPage>
      <Container>
        <Typography
          variant={"h3"}
          component={"h1"}
          textAlign={"center"}
          gutterBottom
        >
          Blog
        </Typography>
      </Container>
    </AnimatedPage>
  );
}
