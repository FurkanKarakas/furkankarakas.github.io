import AnimatedPage from "../components/AnimatedPage.jsx";

export default function About() {
  return (
    <AnimatedPage>
      <h1>About</h1>

      <p>
        My name is Furkan Karakaş. I am a software engineer who is passionate
        about creating exciting projects.
      </p>

      <h2>Work Experience</h2>

      <p>
        <strong>ZZ Vermögensberatung AG</strong> <em>July 2022-Present</em>{" "}
        Currently, I am working in a financial asset management company as a
        software developer. In particular, my tasks comprise the following
        points:
      </p>

      <ul>
        <li>
          Parsing errors in XML files after end-of-day data load to the system
          in <code>Murex</code> in the programming language{" "}
          <code>Java 1.8</code>
        </li>

        <li>
          Developing and maintaining the web application &quot;Knowledge
          Base&quot; used internally with the front-end <code>JavaScript</code>{" "}
          library <code>React.js</code>, the back-end <code>Java</code>{" "}
          framework <code>Spring Boot</code>, and the SQL database{" "}
          <code>PostgreSQL</code>
        </li>

        <li>
          Creating automated CI/CD pipelines to install the dependencies in a
          project, build it, and deploy it to the production and development
          servers using &quot;GitLab runners&quot; in isolated{" "}
          <code>Docker</code> containers
        </li>

        <li>
          Creating in-house Value-at-Risk (VaR) computation framework in Python
          using the company data warehouse in <code>Python 3.9</code> with the
          libraries <code>Pandas</code> and <code>Numpy</code>
        </li>

        <li>
          Using the data integration tool <code>Talend</code> for ETL processes
        </li>

        <li>Using the IDE products of JetBrains</li>
      </ul>
    </AnimatedPage>
  );
}
