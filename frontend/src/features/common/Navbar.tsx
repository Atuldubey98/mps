import { NavLink } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

export default function Navbar() {
  return (
    <header className="flex justify-around items-center p-2 bg-yellow-200">
      <h1 className="text-3xl font-bold">MPS</h1>
      <ul className="flex justify-around items-center gap-3">
        <li>
          <NavLink
            className={"text-blue-600 visited:text-purple-600 target:shadow-lg"}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <AuthWrapper>
          <li>
            <NavLink
              className={
                "text-blue-600 visited:text-purple-600 target:shadow-lg"
              }
              to={"/students"}
            >
              Students
            </NavLink>
          </li>
        </AuthWrapper>
      </ul>
    </header>
  );
}
