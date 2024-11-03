// noinspection SpellCheckingInspection
import { ExpandMore } from "@mui/icons-material";
import FolderIcon from "@mui/icons-material/Folder";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";

import AnimatedPage from "../components/AnimatedPage.jsx";

export default function About() {
  const pfAgListItems = [
    "Automated independent end-to-end tests of the company web and mobile applications on the system level by means of black-box testing using an internal test automation toolbox built on top of Appium and Selenium",

    "Worked in four releases in a year using agile methodology",

    "Used the issue tracking service JIRA and the application lifecycle management tool HPQC",
  ];

  const zzAgListItems = [
    'Developed internal "Knowledge Base" web app using React.js, Spring Boot, and PostgreSQL, streamlining business processes for 25+ colleagues',

    "Built automated CI/CD pipelines using GitLab runners in Docker for seamless application deployment to prod/dev environments, over 80% improvement of build time of the web application",

    "Created in-house Value-at-Risk computation framework in Python integrated with company data warehouse using Pandas/NumPy",

    "Parsed XML files to identify data load errors in Java, enabling team to review and correct issues daily",
  ];

  const epflListItems = [
    "Distributed systems",
    "Data science",
    "Deep learning",
    "Security and cryptography",
  ];

  // noinspection JSValidateTypes
  return (
    <AnimatedPage>
      <Container component={"article"}>
        <Typography variant={"h1"} textAlign={"center"} gutterBottom>
          About
        </Typography>

        <Typography variant={"body1"} sx={{ marginBottom: "3rem" }}>
          My name is Furkan Karakaş. I am a software engineer who is passionate
          about creating exciting projects.
        </Typography>

        <Accordion component={"article"} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="work-content"
            id="work-header"
          >
            <Typography variant={"h2"}>Work Experience</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Accordion component={"section"}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="pf-content"
                id="pf-header"
              >
                <Typography variant={"h6"}>
                  PostFinance AG (External), <em>May 2024-Present</em>
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant={"body1"}>
                  Currently, I am working in PostFinance AG in an external role
                  as a software test engineer. My responsibilities comprise the
                  following:
                </Typography>

                <List>
                  {pfAgListItems.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        {item}
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion component={"section"}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="zzag-content"
                id="zzag-header"
              >
                <Typography variant={"h6"}>
                  ZZ Vermögensberatung AG, <em>July 2022-April 2024</em>
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant={"body1"}>
                  In the past, I worked in a financial asset management company
                  as a software developer. In particular, my tasks comprised the
                  following points:
                </Typography>

                <List>
                  {zzAgListItems.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        {item}
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        <Accordion component={"article"}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="education-content"
            id="education-header"
          >
            <Typography variant={"h2"}>Education</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Accordion component={"section"}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="epfl-content"
                id="epfl-header"
              >
                <Typography variant={"h6"}>
                  École Polytechnique Fédérale de Lausanne,{" "}
                  <em>September 2019-April 2022</em>
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant={"body1"}>
                  I obtained my master of sciences degree in EPFL from the
                  department of computer and communication sciences. During my
                  studies, I had the privilege to have exposure to various areas
                  in computer science, including:
                </Typography>

                <List>
                  {epflListItems.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        {item}
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion component={"section"}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="bogazici-content"
                id="bogazici-header"
              >
                <Typography variant={"h6"}>
                  Boğaziçi University, <em>September 2014-July 2019</em>
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant={"body1"}>
                  I obtained my bachelor of sciences degree in Boğaziçi
                  University from the department of electrical and electronics
                  engineering. In the last year, I chose the specialization path
                  &quot;signal processing&quot;.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Container>
    </AnimatedPage>
  );
}
