import type { StaticImageData } from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Children } from "react";

interface TimelineEntryProps {
  entryType: string;
  instituteName: string;
  city: string;
  country: string;
  startYear: string;
  endYear: string;
  photo?: StaticImageData;
  children?: React.ReactNode;
}

export default function TimelineEntry({
  entryType,
  instituteName,
  city,
  country,
  startYear,
  endYear,
  photo,
  children,
}: TimelineEntryProps) {
  const summaryContent = (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: 2,
        alignItems: "start",
      }}
    >
      {photo ? (
        <Box
          component="img"
          src={photo.src}
          alt={`${entryType} at ${instituteName}`}
          sx={{
            width: 100,
            height: 100,
            objectFit: "cover",
            borderRadius: 1.5,
            flexShrink: 0,
          }}
        />
      ) : (
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 1.5,
            bgcolor: "grey.200",
            flexShrink: 0,
          }}
        />
      )}

      <Box sx={{ minWidth: 0 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {entryType} at {instituteName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {city}, {country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {startYear} – {endYear}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Accordion defaultExpanded disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ width: "100%", pr: 1 }}>{summaryContent}</Box>
      </AccordionSummary>
      {children ? (
        <AccordionDetails>
          {Children.toArray(children).map((child, index) => (
            <Box key={index} sx={index === 0 ? undefined : { mt: 1 }}>
              {child}
            </Box>
          ))}
        </AccordionDetails>
      ) : null}
    </Accordion>
  );
}
