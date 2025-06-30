
import { Link, useLocation } from "react-router-dom";
import { Mail, Users, Book, FileText, Home, User } from "lucide-react";

const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Research", href: "/research", icon: FileText },
    { name: "Publications", href: "/publications", icon: Book },
    { name: "Teaching", href: "/teaching", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-black text-lg">RH</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Prof. Rizwanul Haque
                </h1>
                <p className="text-sm text-gray-500">Dean & Professor</p>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">RH</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Prof. (Dr.) Rizwanul Haque</h3>
                  <p className="text-gray-400 text-sm">Dean & Professor</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Dean of School of Earth Biological & Environmental Sciences at Central University of South Bihar, 
                pioneering research in stem cell biology, cancer immunotherapy, and biotechnology.
              </p>
              <div className="text-sm text-gray-400">
                <p>Central University of South Bihar</p>
                <p>Gaya, Bihar, India</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-blue-400">Research Focus</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Stem Cell Biology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Cancer Immunotherapy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Biotechnology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Regenerative Medicine</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-blue-400">Academic Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="https://orcid.org/0000-0002-5759-4140" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>ORCID Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Google Scholar</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>ResearchGate</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Prof. Rizwanul Haque. All rights reserved. | Advancing Science Through Innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
