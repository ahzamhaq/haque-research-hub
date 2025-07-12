
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();
  
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
        <div className="container flex items-center justify-between space-x-2 py-4">
          <Link to="/" className="font-bold text-lg">
            Rizwanul Haque
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu - simplified hamburger for smaller screens */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <div className="flex flex-col space-y-1">
                  <div className="w-5 h-0.5 bg-foreground"></div>
                  <div className="w-5 h-0.5 bg-foreground"></div>
                  <div className="w-5 h-0.5 bg-foreground"></div>
                </div>
              </summary>
              <div className="absolute right-0 top-8 bg-background border rounded-md shadow-lg p-4 w-48">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-sm hover:bg-secondary rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
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
