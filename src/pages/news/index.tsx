import { NavLink } from "react-router";

function Page() {
  return (
    <nav className="m-30 text-2xl">
      <NavLink to="/">
        Blog
      </NavLink>
    </nav>
  );
}

export default Page;
