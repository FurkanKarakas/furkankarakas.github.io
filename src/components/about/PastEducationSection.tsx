import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TimelineEntry from "./TimelineEntry";
import EpflPhoto from "../../assets/epfl.jpg";
import BounPhoto from "../../assets/boun.jpg";
import IelPhoto from "../../assets/iel.jpg";
import { Link } from "@mui/material";

export default function PastEducationSection() {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" component="h2">
          Past Education
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <TimelineEntry
            entryType="Master degree"
            instituteName="EPFL"
            city="Lausanne"
            country="Switzerland"
            startYear="2019"
            endYear="2022"
            photo={EpflPhoto}
          >
            <Typography variant="body2" color="textSecondary">
              I had the privilege of studying at EPFL, where I pursued a
              master&apos;s degree in computer and communication sciences.
              During my time there, I was exposed to a wide range of advanced
              topics in computer science, including distributed computing,
              machine and deep learning, security and cryptography. With
              hands-on experience in research and practical applications, I
              developed a strong foundation in both theoretical and applied
              aspects of computer science.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              My time at EPFL was not only academically enriching but also
              personally transformative, as I had the opportunity to collaborate
              with brilliant minds from around the world and engage in
              cutting-edge research projects.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              I conducted the master thesis titled {'"'}Graph Convolutional
              Networks for Skills Management{'"'} with the goal of visualizing
              and analyzing skills data of company employees in{" "}
              <Link
                href="https://www.roche.com/"
                target="_blank"
                rel="noreferrer"
              >
                Hoffmann La Roche
              </Link>{" "}
              under the supervision of{" "}
              <Link
                href="https://people.epfl.ch/tanja.kaeser/?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                Asst. Prof. Tanja Käser
              </Link>{" "}
              in the{" "}
              <Link
                href="https://www.epfl.ch/labs/ml4ed/"
                target="_blank"
                rel="noreferrer"
              >
                ML4ED laboratory
              </Link>
              . You can find the thesis report{" "}
              <Link
                href="/master-thesis-report.pdf"
                target="_blank"
                rel="noreferrer"
              >
                here
              </Link>
              .
            </Typography>
            <Typography variant="body2" color="textSecondary">
              I completed my master&apos;s degree with a very good GPA of
              <em>5.20/6.00</em>, which reflects my dedication and hard work
              throughout the program.
            </Typography>
          </TimelineEntry>

          <TimelineEntry
            entryType="Bachelor degree"
            instituteName="Boğaziçi University"
            city="İstanbul"
            country="Türkiye"
            startYear="2014"
            endYear="2019"
            photo={BounPhoto}
          >
            <Typography variant="body2" color="textSecondary">
              Renowned as one of Türkiye{"'"}s most prestigious universities, I
              earned admission through exceptional performance in the national
              university entrance examination. Among approximately 2.5 million
              candidates, I achieved an overall ranking of <em>300th</em>{" "}
              nationwide, placing me within the top <em>0.012%</em> of all
              participants. This accomplishment reflects my strong academic
              abilities, dedication, and commitment to excellence.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              I pursued my bachelor{"'"}s degree in electrical and electronics
              engineering with a double major in mathematics at BOUN. During my
              time there, I gained a solid foundation in digital systems,
              electronics, digital communications and in the fundamental areas
              of mathematics, including linear algebra, calculus, probability
              theory and discrete mathematics.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              I graduated with double Bachelor{"'"}s degrees, once in electrical
              and electronics engineering and once in mathematics, with a final
              GPA of
              <em>3.59/4.00</em>, earning the High Honor distinction awarded by
              the university{"'"}s faculty in recognition of my outstanding
              academic performance.
            </Typography>
          </TimelineEntry>

          <TimelineEntry
            entryType="High school degree"
            instituteName="İstanbul Erkek Lisesi"
            city="İstanbul"
            country="Türkiye"
            startYear="2009"
            endYear="2014"
            photo={IelPhoto}
          >
            <Typography variant="body2" color="textSecondary">
              I completed my secondary education at İstanbul Erkek Lisesi, one
              of the most prestigious high schools in Türkiye. Admission is
              highly competitive, and I earned my place through outstanding
              performance in the national high school entrance examination.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              The school operates under a long-standing educational partnership
              between the Turkish and German governments, with the entire
              curriculum taught in German, with an exception for certain Turkish
              subjects. Studying in this environment enabled me to achieve
              fluency in German while receiving a rigorous academic education.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Upon graduation, I was awarded the <em>Abitur</em> diploma in
              addition to the Turkish high school diploma. The Abitur
              qualification provides direct access to higher education in
              Germany and is widely recognized by universities in Switzerland
              and other countries.
            </Typography>
          </TimelineEntry>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
