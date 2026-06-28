import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PersonalLifeSection() {
  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
        Personal life
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Outside of work, I enjoy learning, writing, exploring new ideas, and
        spending time in environments that inspire creativity and calm. I also
        value balance, curiosity, and meaningful conversations.
      </Typography>
    </Box>
  );
}
