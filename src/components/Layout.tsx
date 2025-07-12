import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "Teaching", href: "/teaching" },
    { name: "Workshop", href: "/workshop" },
    { name: "Blog", href: "/blog" },
    { name: "Collaboration", href: "/collaboration" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <header className="supports-backdrop-blur:bg-background/60 bg-background/95 border-b sticky top-0 z-50 w-full backdrop-blur">
        <div className="container flex items-center justify-between space-x-2 py-2">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                <Menu className="w-4 h-4 mr-2" /> Menu
              </SheetTrigger>
              <SheetContent className="w-full sm:w-[28rem]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Explore the site using the navigation below.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="px-4 py-2 rounded-md hover:bg-secondary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/" className="font-bold">
              Rizwanul Haque
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container py-10">{children}</main>
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rizwanul Haque. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
