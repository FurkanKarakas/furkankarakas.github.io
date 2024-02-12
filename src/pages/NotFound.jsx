import { Container, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container>
      <Typography variant={"h1"}>404</Typography>
      <Typography variant={"body1"}>The requested URL wasn't found!</Typography>
    </Container>
  );
}
