import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WorkExperienceSection() {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          Work Experience
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Typography variant="body1" color="text.secondary">
          Over time, I have worked in quality assurance and software-related
          roles where I focused on reliability, automation, and improving
          product quality. I enjoy testing critically and helping teams build
          more dependable software.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
