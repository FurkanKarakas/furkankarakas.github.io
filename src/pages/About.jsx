// noinspection SpellCheckingInspection

import AnimatedPage from "../components/AnimatedPage.jsx";
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
import { ExpandMore } from "@mui/icons-material";
import FolderIcon from "@mui/icons-material/Folder";

export default function About() {
  const zzAgListItems = [
    "Parsing errors in XML files after end-of-day data load to" +
      " the system in Murex in the programming language Java 1.8",

    'Developing and maintaining the web application "Knowledge Base"' +
      " used internally with the front-end JavaScript library React.js," +
      " the back-end Java framework Spring Boot, and the SQL database PostgreSQL",

    "Creating automated CI/CD pipelines to install the dependencies in a project," +
      " build it, and deploy it to the production and development servers" +
      ' using "GitLab runners" in isolated Docker containers',

    "Creating in-house Value-at-Risk (VaR) computation framework in Python using" +
      " the company data warehouse in Python 3.9 with the libraries Pandas and Numpy",

    "Using the data integration tool Talend for ETL processes",

    "Using the IDE products of JetBrains",
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
                aria-controls="zzag-content"
                id="zzag-header"
              >
                <Typography variant={"h6"}>
                  ZZ Vermögensberatung AG, <em>July 2022-Present</em>
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant={"body1"}>
                  Currently, I am working in a financial asset management
                  company as a software developer. In particular, my tasks
                  comprise the following points:
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
