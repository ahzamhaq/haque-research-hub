
import { Link } from "react-router-dom";
import { ArrowUp, Book, FileText, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Index = () => {
  const stats = [
    { label: "Publications", value: "63+", icon: Book },
    { label: "H-Index", value: "25", icon: ArrowUp },
    { label: "Citations", value: "4200+", icon: FileText },
    { label: "PhD Students", value: "9", icon: Users },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full mb-8 overflow-hidden">
              <img 
                src="/lovable-uploads/e008a4dd-627d-4765-878b-33dd956c2926.png" 
                alt="Prof. Rizwanul Haque"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hello I'm
              <br />
              <span className="text-yellow-400">RIZWANUL HAQUE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Professor & Dean at Central University of South Bihar
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
              Scientist | Educator | Innovator in Biotechnology and Stem Cell Research
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/about">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                About Me
              </Button>
            </Link>
            <Link to="/research">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Research
              </Button>
            </Link>
            <Link to="/publications">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Publications
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-yellow-400 font-semibold text-lg mb-2">40 YEARS EXPERIENCE</p>
            <p className="text-sm">More than 1k+ students taught worldwide</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-500">ABOUT</span> PROF. HAQUE
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With over 40 years of experience in academic and research excellence, Prof. (Dr.) Rizwanul Haque 
                serves as the Dean of School of Earth Biological & Environmental Sciences at Central University 
                of South Bihar. His distinguished career includes 9.2 years of postdoctoral training at Penn State 
                College of Medicine, USA.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                His expertise spans Stem Cell Biology, T-cell Immunotherapy, Cancer Research, and Biotechnology. 
                He has authored 63+ research publications with an h-index of 25 and over 4200 citations.
              </p>
              <Link to="/about">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Prof. Haque
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Research Laboratory"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Research Excellence</h2>
            <p className="text-xl text-blue-200">Cutting-edge research in biotechnology and regenerative medicine</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">iPSC-derived T Cells</h3>
                <p className="text-blue-200">Designer T cells for hepatocellular carcinoma treatment - ICMR funded project</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Cancer Immunotherapy</h3>
                <p className="text-blue-200">FoxP3 modulation in Rheumatoid Arthritis and cancer research - CCRUM funded</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Telomerase Research</h3>
                <p className="text-blue-200">Breast cancer studies in arsenic-affected regions - BCST funded project</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
