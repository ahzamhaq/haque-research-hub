
import { Link } from "react-router-dom";
import { Users, MapPin, Calendar, ExternalLink, Mail, Globe, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Collaboration = () => {
  const collaborators = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Professor of Molecular Biology",
      institution: "Harvard Medical School",
      location: "Boston, USA",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      specialization: "Cancer Immunotherapy",
      email: "sarah.johnson@hms.harvard.edu",
      collaborationYears: "2018-Present"
    },
    {
      id: 2,
      name: "Prof. Hiroshi Tanaka",
      position: "Director, Stem Cell Research Center",
      institution: "University of Tokyo",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      specialization: "iPSC Technology",
      email: "h.tanaka@u-tokyo.ac.jp",
      collaborationYears: "2019-Present"
    },
    {
      id: 3,
      name: "Dr. Maria Rodriguez",
      position: "Senior Research Scientist",
      institution: "Max Planck Institute",
      location: "Munich, Germany",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      specialization: "Regenerative Medicine",
      email: "m.rodriguez@mpi.de",
      collaborationYears: "2020-Present"
    },
    {
      id: 4,
      name: "Prof. Rajesh Kumar",
      position: "Head of Biotechnology Department",
      institution: "IIT Delhi",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      specialization: "Biomedical Engineering",
      email: "r.kumar@iitd.ac.in",
      collaborationYears: "2017-Present"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "International iPSC Consortium for Cancer Research",
      description: "Multi-institutional project developing iPSC-derived T cells for hepatocellular carcinoma treatment",
      partners: ["Harvard Medical School", "University of Tokyo", "Central University of South Bihar"],
      funding: "NIH & ICMR Joint Grant",
      duration: "2020-2025",
      status: "Active",
      publications: 8
    },
    {
      id: 2,
      title: "Indo-German Collaboration on Regenerative Medicine",
      description: "Advanced research on stem cell applications in tissue engineering and organ regeneration",
      partners: ["Max Planck Institute", "IIT Delhi", "Central University of South Bihar"],
      funding: "DST-DAAD Partnership",
      duration: "2019-2024",
      status: "Active",
      publications: 12
    },
    {
      id: 3,
      title: "South Asian Biotechnology Research Network",
      description: "Regional consortium focusing on biotechnology solutions for healthcare challenges",
      partners: ["Multiple Universities across India, Bangladesh, Sri Lanka"],
      funding: "SAARC Development Fund",
      duration: "2018-2023",
      status: "Completed",
      publications: 15
    }
  ];

  const meetings = [
    {
      id: 1,
      title: "Annual Indo-US Biotechnology Summit 2024",
      date: "March 15-17, 2024",
      location: "New Delhi, India",
      type: "International Conference",
      role: "Keynote Speaker",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Global Stem Cell Research Symposium",
      date: "January 22-24, 2024",
      location: "Boston, USA",
      type: "Research Collaboration",
      role: "Panel Discussion",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "European Society for Medical Oncology Conference",
      date: "October 10-14, 2023",
      location: "Munich, Germany",
      type: "Academic Exchange",
      role: "Research Presentation",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">
            Colleagues & 
            <span className="text-yellow-400"> Collaborations</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Building bridges across institutions and continents to advance scientific knowledge 
            and foster innovation in biotechnology research
          </p>
          <div className="mt-8 flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-400" />
              <span>50+ Active Collaborators</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-yellow-400" />
              <span>15+ Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>25+ Joint Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Collaborators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Collaborators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished researchers and institutions that have partnered with us in advancing scientific frontiers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborators.map((collaborator) => (
              <Card key={collaborator.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={collaborator.image} 
                      alt={collaborator.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{collaborator.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-1">{collaborator.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{collaborator.institution}</p>
                  
                  <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
                    <MapPin className="w-3 h-3 mr-1" />
                    {collaborator.location}
                  </div>
                  
                  <div className="bg-blue-100 rounded-lg p-3 mb-4">
                    <p className="text-xs text-blue-800 font-medium">Specialization</p>
                    <p className="text-sm text-blue-900">{collaborator.specialization}</p>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    Collaboration: {collaborator.collaborationYears}
                  </div>
                  
                  <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Collaborative Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Major multi-institutional research initiatives driving innovation in biotechnology
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-3">{project.title}</CardTitle>
                      <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    </div>
                    <div className="flex-shrink-0 lg:ml-8">
                      <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${
                        project.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Partners</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.partners.map((partner, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            {partner}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {project.duration}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-gray-400" />
                          {project.funding}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-gray-400" />
                          {project.publications} Publications
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-end">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Meetings & Conferences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Meetings & Conferences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International gatherings where collaborative research and future partnerships are fostered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-0 bg-white shadow-lg">
                <div className="relative">
                  <img 
                    src={meeting.image} 
                    alt={meeting.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                      {meeting.type}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {meeting.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {meeting.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {meeting.location}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs text-blue-600 font-medium mb-1">Role</div>
                    <div className="text-sm text-blue-900">{meeting.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                View All Conference Updates
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Interested in Collaboration?</h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            We welcome opportunities to collaborate on groundbreaking research projects, 
            share expertise, and contribute to the advancement of biotechnology and medical sciences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Link to="/research">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold shadow-lg transition-all duration-300">
                <BookOpen className="w-5 h-5 mr-2" />
                View Research Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collaboration;
