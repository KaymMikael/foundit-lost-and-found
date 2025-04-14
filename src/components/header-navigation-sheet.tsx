import { SquareMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface HeaderNavigationSheetProps {
  activePath: string;
  navItems: { path: string; title: string }[];
}

const HeaderNavigationSheet = ({
  activePath,
  navItems,
}: HeaderNavigationSheetProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)"); // sm breakpoint
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsSheetOpen(false); // Close the sheet when breakpoint is reached
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <SquareMenu size={"36"} className="sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Site Navigation</SheetTitle>
          <SheetDescription>
            Easily explore and access the pages you need for a seamless
            experience.
          </SheetDescription>
        </SheetHeader>
        <nav className="px-4">
          <ul className="flex flex-col gap-2">
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
      </SheetContent>
    </Sheet>
  );
};

export default HeaderNavigationSheet;
