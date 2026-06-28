import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import sumeyyeAndIPhoto from "../../assets/sumeyye-and-i.jpg";

export default function PersonalLifeSection() {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          Personal Life
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: "flex-start",
          }}
        >
          <Tooltip
            title={
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, p: 0.5 }}
              >
                <Typography variant="body2">🇨🇭</Typography>
                <Typography variant="body2">Lake Lugano, April 2026</Typography>
              </Box>
            }
            arrow
            placement="bottom"
            disableHoverListener={false}
            disableTouchListener={false}
            enterTouchDelay={0}
            leaveTouchDelay={2500}
          >
            <Box
              component="img"
              src={sumeyyeAndIPhoto.src}
              alt="Sumeyye and I"
              sx={{
                width: { xs: "100%", md: 240 },
                maxWidth: 320,
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </Tooltip>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1" color="text.secondary">
              I used to enjoy playing a lot of video games, but over the years,
              I have lost interest in them. Nevertheless, I still enjoy watching
              others play video games on platforms like Twitch and YouTube 🎮
            </Typography>

            <Typography variant="body1" color="text.secondary">
              I also hit the gym regularly to stay fit and healthy. I like
              lifting heavy weights and challenging myself 🏋️‍♂️
            </Typography>

            <Typography variant="body1" color="text.secondary">
              I am also lucky to have a wonderful family and a loving wife who
              support me in everything I do. I am grateful for their presence in
              my life and cherish the moments we spend together ❤️
            </Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
