import AnimatedPage from "../components/AnimatedPage.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <AnimatedPage>
      <div className="p-8 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white">
          I am Furkan.
        </h1>
        <h2 className="mb-6 text-3xl font-normal text-gray-200">
          Young & passionate software developer.
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-200">
          My preferred software tools are{" "}
          <a href="https://www.java.com/en/" target="_blank" rel="noreferrer">
            <code>Java</code>
          </a>
          ,{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <code>JavaScript</code>
          </a>{" "}
          and{" "}
          <a href="https://www.python.org/" target="_blank" rel="noreferrer">
            <code>Python</code>
          </a>
          .
        </p>
        <Link
          to="/about"
          className="inline-flex items-center justify-center rounded-lg border-2 border-amber-50 bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Learn more about me
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </AnimatedPage>
  );
}
