import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VitznauPhoto from "../../assets/vitznau.jpg";
import RochePhoto from "../../assets/roche.jpg";
import AbbPhoto from "../../assets/abb.jpg";
import PfPhoto from "../../assets/postfinance.jpg";
import type { StaticImageData } from "next/image";
import WorkTimelineEntry from "./WorkTimelineEntry";

export default function WorkExperienceSection() {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          Work Experience
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        {workEntries.map((entry) => (
          <WorkTimelineEntry
            key={`${entry.instituteName}-${entry.startYear}`}
            entryType={entry.entryType}
            instituteName={entry.instituteName}
            city={entry.city}
            country={entry.country}
            startYear={entry.startYear}
            endYear={entry.endYear}
            photo={entry.photo}
            items={entry.items}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

interface WorkItem {
  id: number;
  label: string;
}

interface WorkEntry {
  entryType: string;
  instituteName: string;
  city: string;
  country: string;
  startYear: string;
  endYear: string;
  photo: StaticImageData;
  items: WorkItem[];
}

const pfWorkItems = [
  {
    id: 1,
    label:
      "Automated independent end-to-end tests of the company web and mobile applications on the system level by means of black-box testing using an internal test automation toolbox built on top of Appium and Selenium",
  },
  {
    id: 2,
    label: "Worked in four releases in a year using agile methodology",
  },
  {
    id: 3,
    label:
      "Used the issue tracking service JIRA and the application lifecycle management tool HPQC",
  },
  {
    id: 4,
    label:
      "Detected countless bugs using the automated test scripts and reported them to the development team, contributing to the overall quality of the applications",
  },
];

const zzagWorkItems = [
  {
    id: 1,
    label:
      'Developed internal "Knowledge Base" web app using React.js, Spring Boot, and PostgreSQL, streamlining business processes for 25+ colleagues',
  },
  {
    id: 2,
    label:
      "Built automated CI/CD pipelines using GitLab runners in Docker for seamless application deployment to prod/dev environments, over 80% improvement of build time of the web application",
  },
  {
    id: 3,
    label:
      "Created in-house Value-at-Risk computation framework in Python integrated with company data warehouse using Pandas/NumPy",
  },
  {
    id: 4,
    label:
      "Parsed XML files to identify data load errors in Java, enabling team to review and correct issues daily",
  },
];

const rocheWorkItems = [
  {
    id: 1,
    label:
      "Conducted literature review on corporate skills management using machine learning",
  },
  {
    id: 2,
    label:
      "Implemented and evaluated graph neural network method to learn skill representations",
  },
  {
    id: 3,
    label:
      "Achieved 72% F1-score on skill prediction task by collaborating cross-functionally",
  },
];

const abbWorkItems = [
  {
    id: 1,
    label:
      "Designed Docker containers interacting on Hyperledger Fabric blockchain to store IoT sensor data",
  },
  {
    id: 2,
    label:
      "Built React.js front-end application interfacing with the blockchain network",
  },
];

const workEntries: WorkEntry[] = [
  {
    entryType: "Software automation test engineer",
    instituteName: "Postfinance AG",
    city: "Bern",
    country: "Switzerland",
    startYear: "2024",
    endYear: "Present",
    photo: PfPhoto,
    items: pfWorkItems,
  },
  {
    entryType: "Financial software engineer",
    instituteName: "ZZ Vermögensverwaltung AG",
    city: "Vitznau",
    country: "Switzerland",
    startYear: "2022",
    endYear: "2024",
    photo: VitznauPhoto,
    items: zzagWorkItems,
  },
  {
    entryType: "Master's thesis student",
    instituteName: "Hoffmann-La Roche",
    city: "Basel",
    country: "Switzerland",
    startYear: "2021",
    endYear: "2022",
    photo: RochePhoto,
    items: rocheWorkItems,
  },
  {
    entryType: "Student internship",
    instituteName: "ABB Corporate Research Center",
    city: "Baden",
    country: "Switzerland",
    startYear: "2020",
    endYear: "2020",
    photo: AbbPhoto,
    items: abbWorkItems,
  },
];
