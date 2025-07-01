
import { Link } from "react-router-dom";
import { ArrowUp, Book, FileText, Mail, Users, ArrowRight, Star } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-12">
            <div className="w-56 h-56 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/e008a4dd-627d-4765-878b-33dd956c2926.png" 
                  alt="Prof. Rizwanul Haque"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                RIZWANUL
                <br />
                <span className="text-yellow-400 font-light">HAQUE</span>
              </h1>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-2xl md:text-3xl font-light text-blue-100">
                  Professor & Dean
                </p>
                <p className="text-lg text-blue-200/80 font-medium">
                  Central University of South Bihar
                </p>
                <div className="flex items-center justify-center space-x-2 text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">40 Years of Excellence</span>
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Discover My Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/research">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold shadow-lg transition-all duration-300">
                Research Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold shadow-lg transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 inline-block border border-white/20 shadow-2xl">
            <p className="text-yellow-400 font-bold text-xl mb-2">1000+ Students Mentored</p>
            <p className="text-blue-100 text-sm">Shaping the future of biotechnology research</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Impact</h2>
            <p className="text-xl text-gray-600">Measuring excellence through meaningful metrics</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About Professor</span>
                <h2 className="text-5xl font-black text-gray-900 mt-2 mb-6">
                  Four Decades of
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scientific Excellence</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Prof. (Dr.) Rizwanul Haque stands as a beacon of innovation in biotechnology and stem cell research, 
                  with over 40 years of transformative contributions to science and education.
                </p>
                <p>
                  Currently serving as Dean of School of Earth Biological & Environmental Sciences at Central University 
                  of South Bihar, his journey includes 9.2 years of groundbreaking postdoctoral research at Penn State 
                  College of Medicine, USA.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Full Biography
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Research Laboratory"
                className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">Research Portfolio</span>
            <h2 className="text-5xl font-black mt-2 mb-6">Pioneering Discoveries</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Leading breakthrough research in biotechnology, regenerative medicine, and cancer immunotherapy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">iPSC-derived T Cells</h3>
                <p className="text-blue-200 leading-relaxed">
                  Revolutionary designer T cells for hepatocellular carcinoma treatment through ICMR funded research
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Cancer Immunotherapy</h3>
                <p className="text-blue-200 leading-relaxed">
                  Advanced FoxP3 modulation research in Rheumatoid Arthritis and cancer through CCRUM funding
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">Telomerase Research</h3>
                <p className="text-blue-200 leading-relaxed">
                  Groundbreaking breast cancer studies in arsenic-affected regions supported by BCST funding
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
