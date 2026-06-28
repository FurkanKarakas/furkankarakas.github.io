import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimelineEntry from "./TimelineEntry";
import EpflPhoto from "../../assets/epfl.jpg";
import { Link } from "@mui/material";

export default function PastEducationSection() {
  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
        Past education
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1.5 }}>
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
            master&apos;s degree in computer and communication sciences. During
            my time there, I was exposed to a wide range of advanced topics in
            computer science, including distributed computing, machine and deep
            learning, security and cryptography. With hands-on experience in
            research and practical applications, I developed a strong foundation
            in both theoretical and applied aspects of computer science.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            My time at EPFL was not only academically enriching but also
            personally transformative, as I had the opportunity to collaborate
            with brilliant minds from around the world and engage in
            cutting-edge research projects.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            I conducted the master thesis titled {'"'}Graph Convolutional
            Networks for Skills Management{'"'} with the goal of visualizing and
            analyzing skills data of company employees in{" "}
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
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            I completed my master&apos;s degree with a very good GPA of
            <em>5.20/6.00</em>, which reflects my dedication and hard work
            throughout the program.
          </Typography>
        </TimelineEntry>
        <TimelineEntry
          entryType="Bachelor degree"
          instituteName="BOUN"
          city="İstanbul"
          country="Türkiye"
          startYear="2018"
          endYear="2022"
        />
        <TimelineEntry
          entryType="High school degree"
          instituteName="İEL"
          city="İstanbul"
          country="Türkiye"
          startYear="2014"
          endYear="2018"
        />
      </Box>
    </Box>
  );
}
