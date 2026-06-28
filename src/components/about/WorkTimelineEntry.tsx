import type { StaticImageData } from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TimelineEntry from "./TimelineEntry";

interface WorkItem {
  id: number;
  label: string;
}

interface WorkTimelineEntryProps {
  entryType: string;
  instituteName: string;
  city: string;
  country: string;
  startYear: string;
  endYear: string;
  photo?: StaticImageData;
  items: WorkItem[];
}

export default function WorkTimelineEntry({
  entryType,
  instituteName,
  city,
  country,
  startYear,
  endYear,
  photo,
  items,
}: WorkTimelineEntryProps) {
  return (
    <TimelineEntry
      entryType={entryType}
      instituteName={instituteName}
      city={city}
      country={country}
      startYear={startYear}
      endYear={endYear}
      photo={photo}
    >
      <List sx={{ listStyleType: "disc", pl: 3 }}>
        {items.map((item) => (
          <ListItem key={item.id} sx={{ display: "list-item", py: 0.3 }}>
            <ListItemText
              primary={item.label}
              slotProps={{
                primary: {
                  variant: "body2",
                  color: "textSecondary",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </TimelineEntry>
  );
}
