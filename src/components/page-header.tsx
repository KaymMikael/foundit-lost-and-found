import Logo from "@/assets/images/FoundIt_Logo-min.png";
import { Link } from "react-router";
import HeaderNavigationSheet from "./header-navigation-sheet";

const navItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/login",
    title: "Log In",
  },
];

interface PageHeaderProps {
  activePath: string;
}

const PageHeader = ({ activePath }: PageHeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <img src={Logo} alt="Foundit Logo" className="max-w-20" />
      <nav className="px-4">
        <ul className="hidden gap-4 sm:flex items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  activePath === item.path && "text-primary"
                } hover:underline hover:underline-offset-8 font-semibold`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HeaderNavigationSheet activePath={activePath} navItems={navItems} />
    </header>
  );
};

export default PageHeader;
