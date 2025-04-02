import { NavLink } from "react-router";

function Page() {
  return (
    <nav className="m-30 text-2xl">
      <NavLink to="/news">
        news
      </NavLink>
    </nav>
  );
}

export default Page;
