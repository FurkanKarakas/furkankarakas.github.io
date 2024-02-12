import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  FormHelperText,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [mailClientResponse, setMailClientResponse] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const body = `Sender email: ${email}<br>Sender Message: ${message}`;

    // noinspection JSUnresolvedReference
    Email.send({
      SecureToken: "102323f1-d771-4640-8098-063ade2b62b2",
      To: "fkarakasster@gmail.com",
      From: "fkarakasster@gmail.com",
      Subject: subject,
      Body: body,
    }).then((result) => {
      setIsSnackbarOpen(true);
      setMailClientResponse(result);

      setIsSubmitButtonDisabled(true);
      setTimeout(() => setIsSubmitButtonDisabled(false), 10000);
    });
  };

  const handleClose = (event, reason) => {
    // noinspection SpellCheckingInspection
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <AnimatedPage>
      <Container component={"section"}>
        <Typography variant={"h3"} gutterBottom>
          Contact Me
        </Typography>

        <Typography variant={"body1"} sx={{ marginBottom: "3rem" }}>
          Would you like to know something more about me? Let me know!
        </Typography>

        <form
          className={"contact-form"}
          onSubmit={(event) => handleFormSubmit(event)}
        >
          <Grid
            container
            direction={"column"}
            justify={"center"}
            align={"center"}
            spacing={2}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id={"email-address"}
                name={"email"}
                label={"Email address"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby={"email-helper-text"}
                type={"email"}
                inputProps={{ spellCheck: "false" }}
              />
              <FormHelperText id={"email-helper-text"}>
                I will never share your email.
              </FormHelperText>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                required
                id={"email-subject"}
                name={"subject"}
                label={"Subject"}
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                aria-describedby={"subject-helper-text"}
                type={"text"}
              />
              <FormHelperText id={"subject-helper-text"}>
                Subject of the message.
              </FormHelperText>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                id="email-message"
                name={"message"}
                label={"Message"}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                multiline
                minRows={4}
                aria-describedby={"message-helper-text"}
              />
              <FormHelperText id={"message-helper-text"}>
                You can write your message here.
              </FormHelperText>
            </Grid>

            <Grid item>
              <Button
                disabled={isSubmitButtonDisabled}
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
                size={"large"}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Snackbar
        open={isSnackbarOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={() => handleClose()}
          severity={mailClientResponse === "OK" ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%", color: "#ffffff" }}
        >
          <AlertTitle>
            {mailClientResponse === "OK" ? "Success" : "Error"}
          </AlertTitle>
          {mailClientResponse === "OK"
            ? "Your message has been sent successfully. I will be getting in touch with you soon!"
            : "There was en error sending the form details. Please try again later!"}
        </Alert>
      </Snackbar>
    </AnimatedPage>
  );
}
