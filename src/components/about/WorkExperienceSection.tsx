import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WorkExperienceSection() {
  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
        Work experience
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Over time, I have worked in quality assurance and software-related roles
        where I focused on reliability, automation, and improving product
        quality. I enjoy testing critically and helping teams build more
        dependable software.
      </Typography>
    </Box>
  );
}
