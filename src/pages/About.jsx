import AnimatedPage from "../components/AnimatedPage.jsx";
import "../styles/styles.css";

export default function About() {
  return (
    <AnimatedPage>
      <div className="p-8 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white">
          About
        </h1>

        <p className="mb-4 text-gray-200">
          My name is Furkan Karakaş. I am a software engineer who is passionate
          about creating exciting projects.
        </p>

        <section className="text-purple-100">
          <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-200">
            Work Experience
          </h2>

          <section>
            <p>
              <strong>ZZ Vermögensberatung AG</strong>{" "}
              <em>July 2022-Present</em> Currently, I am working in a financial
              asset management company as a software developer. In particular,
              my tasks comprise the following points:
            </p>

            <ul className="repeating-counter-rule my-8 list-inside space-y-5">
              <li>
                Parsing errors in XML files after end-of-day data load to the
                system in <code>Murex</code> in the programming language{" "}
                <code>Java 1.8</code>
              </li>

              <li>
                Developing and maintaining the web application &quot;Knowledge
                Base&quot; used internally with the front-end{" "}
                <code>JavaScript</code> library <code>React.js</code>, the
                back-end <code>Java</code> framework <code>Spring Boot</code>,
                and the SQL database <code>PostgreSQL</code>
              </li>

              <li>
                Creating automated CI/CD pipelines to install the dependencies
                in a project, build it, and deploy it to the production and
                development servers using &quot;GitLab runners&quot; in isolated{" "}
                <code>Docker</code> containers
              </li>

              <li>
                Creating in-house Value-at-Risk (VaR) computation framework in
                Python using the company data warehouse in{" "}
                <code>Python 3.9</code> with the libraries <code>Pandas</code>{" "}
                and <code>Numpy</code>
              </li>

              <li>
                Using the data integration tool <code>Talend</code> for ETL
                processes
              </li>

              <li>Using the IDE products of JetBrains</li>
            </ul>
          </section>
        </section>

        <section className="text-violet-50">
          <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-200">
            Education
          </h2>

          <section>
            <p>
              <strong>École Polytechnique Fédérale de Lausanne</strong>{" "}
              <em>September 2019-April 2022</em> I obtained my master of
              sciences degree in EPFL from the department of computer and
              communication sciences. During my studies, I had the privilege to
              have exposure to various areas in computer science, including:
            </p>

            <ul className="repeating-counter-rule my-8 list-inside space-y-5">
              <li>Distributed systems</li>
              <li>Data science</li>
              <li>Deep learning</li>
              <li>Security and cryptography</li>
            </ul>
          </section>

          <section>
            <p>
              <strong>Boğaziçi University</strong>{" "}
              <em>September 2014-July 2019</em> I obtained my bachelor of
              sciences degree in Boğaziçi University from the department of
              electrical and electronics engineering. In the last year, I chose
              the specialization path &quot;signal processing&quot;.
            </p>
          </section>
        </section>
      </div>
    </AnimatedPage>
  );
}
