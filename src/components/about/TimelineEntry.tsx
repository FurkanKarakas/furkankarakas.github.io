import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
        p: 1.5,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
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

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {entryType} at {instituteName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {city}, {country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {startYear} – {endYear}
        </Typography>
        {children ? <Box sx={{ mt: 2 }}>{children}</Box> : null}
      </Box>
    </Box>
  );
}
