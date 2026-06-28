import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PersonalLifeSection() {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          Personal Life
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Typography variant="body1" color="text.secondary">
          Outside of work, I enjoy learning, writing, exploring new ideas, and
          spending time in environments that inspire creativity and calm. I also
          value balance, curiosity, and meaningful conversations.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
