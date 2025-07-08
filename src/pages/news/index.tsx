import { NavLink } from "react-router";
import { Button } from "tdesign-react";

function Page() {
  return (
    <nav className="m-30 text-2xl">
      <NavLink to="/">
        Blog
      </NavLink>
      <Button>
        Button
      </Button>
    </nav>
  );
}

export default Page;
