import { Link, useLocation } from "react-router-dom";
import { Mail, Users, Book, FileText } from "lucide-react";
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/",
    icon: null
  }, {
    name: "About",
    href: "/about",
    icon: Users
  }, {
    name: "Research",
    href: "/research",
    icon: FileText
  }, {
    name: "Publications",
    href: "/publications",
    icon: Book
  }, {
    name: "Teaching",
    href: "/teaching",
    icon: Users
  }, {
    name: "Contact",
    href: "/contact",
    icon: Mail
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RH</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Prof. Rizwanul Haque</h1>
                <p className="text-sm text-gray-600"></p>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"}`}>
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>;
            })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Prof. (Dr.) Rizwanul Haque</h3>
              <p className="text-gray-300">
                Dean, School of Earth Biological & Environmental Sciences
                <br />
                Central University of South Bihar
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Research Focus</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Stem Cell Biology</li>
                <li>Cancer Immunotherapy</li>
                <li>Biotechnology</li>
                <li>Regenerative Medicine</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-300 space-y-2">
                <li><a href="https://orcid.org/0000-0002-5759-4140" className="hover:text-blue-400">ORCID Profile</a></li>
                <li><a href="#" className="hover:text-blue-400">Google Scholar</a></li>
                <li><a href="#" className="hover:text-blue-400">ResearchGate</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Prof. Rizwanul Haque. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;