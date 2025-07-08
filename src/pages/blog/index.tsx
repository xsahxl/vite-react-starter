import { NavLink } from "react-router";
import { Button } from "tdesign-react";

function Page() {
  return (
    <nav className="m-30 text-2xl">
      <NavLink to="/news">
        news
      </NavLink>
      <Button theme="default">
        Button
      </Button>
    </nav>
  );
}

export default Page;
