import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <a href="/src/assets/furkan.png" target="_blank">
            <img
              className="h-10 w-auto"
              src="/src/assets/furkan.png"
              alt="Furkan Karakaş"
            />
          </a>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CustomLink
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
              Home
            </CustomLink>

            <CustomLink
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </CustomLink>

            <CustomLink
              to="/blog"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Blog Posts
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={`${props.className} ${isActive ? "bg-gray-600" : ""}`}
    >
      {children}
    </Link>
  );
}
