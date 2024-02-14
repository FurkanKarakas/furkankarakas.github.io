import { Container, Typography } from "@mui/material";

import DonkeyImage from "../assets/donkey.jpg";
import AnimatedPage from "../components/AnimatedPage.jsx";

export default function NotFound() {
  return (
    <AnimatedPage>
      <Container>
        <Typography variant={"h1"} textAlign={"center"}>
          404
        </Typography>
        <Typography variant={"body1"} textAlign={"center"}>
          The requested URL wasn&apos;t found!
        </Typography>
        <img
          src={DonkeyImage}
          className="donkey-image"
          width={"50%"}
          height={"auto"}
          alt="Two lovely donkeys"
        />
      </Container>
    </AnimatedPage>
  );
}
