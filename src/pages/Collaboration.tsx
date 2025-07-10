
import { Link } from "react-router-dom";
import { Users, MapPin, Calendar, ExternalLink, Mail, Globe, Award, BookOpen, Microscope, FlaskConical, Dna, Building, GraduationCap } from "lucide-react";
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
      specialization: "Biomedical Engineering",
      email: "r.kumar@iitd.ac.in",
      collaborationYears: "2017-Present"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Generation of hepatocellular carcinoma reactive designer T cells based on induced pluripotent stem cells",
      description: "ICMR funded project developing iPSC-derived T cells for liver cancer treatment",
      partners: ["ICMR", "Central University of South Bihar"],
      funding: "ICMR Grant: 92 Lakhs",
      duration: "2024-2027",
      status: "Active",
      publications: 8,
      grantNumber: "IIRPSG-2024-01-05271"
    },
    {
      id: 2,
      title: "Evaluation of Unani Drug on FoxP3 expressing in Regulatory T cells in the Modulation of Rheumatoid Arthritis",
      description: "Research on FoxP3 modulation in Rheumatoid Arthritis using traditional Unani medicine",
      partners: ["CCRUM", "Ministry of Ayush", "Central University of South Bihar"],
      funding: "CCRUM Grant: 30.15 Lakhs",
      duration: "2024-2027",
      status: "Active",
      publications: 5,
      grantNumber: "F.No-TECH-21013/11/2024-CCRUM-HQ"
    },
    {
      id: 3,
      title: "Study of the Telomerase Regulation in Female Breast Cancer Patient of Arsenic Affected region of Bihar",
      description: "Investigating telomerase activity in breast cancer patients from arsenic-affected areas",
      partners: ["Bihar Council on Science & Technology", "Central University of South Bihar"],
      funding: "BCST Grant: 2 Lakhs",
      duration: "2022-2024",
      status: "Active",
      publications: 3,
      grantNumber: "BCST-RD=01/2022-769"
    }
  ];

  const consultancy = [
    {
      id: 1,
      title: "Antioxidants and Sex differences study in free radical mediated brain stroke",
      country: "Kingdom of Saudi Arabia",
      organization: "National Science, Technology and Innovation Plan (KACST)",
      year: "2015",
      status: "Approved",
      focus: "Hormonal and oxidative stress signaling in stroke"
    },
    {
      id: 2,
      title: "Protective role of adenosine Kinase inhibition in Traumatic Optic Neuropathy",
      country: "Kingdom of Saudi Arabia", 
      organization: "King Abdul Aziz University",
      year: "2016",
      status: "Submitted",
      focus: "Neuroprotective mechanisms"
    }
  ];

  const meetings = [
    {
      id: 1,
      title: "Annual Indo-US Biotechnology Summit 2024",
      date: "March 15-17, 2024",
      location: "New Delhi, India",
      type: "International Conference",
      role: "Keynote Speaker"
    },
    {
      id: 2,
      title: "Global Stem Cell Research Symposium",
      date: "January 22-24, 2024",
      location: "Boston, USA",
      type: "Research Collaboration",
      role: "Panel Discussion"
    },
    {
      id: 3,
      title: "4th Asian Congress for Alternatives to Animal Experiments",
      date: "December 12-14, 2024",
      location: "Jamia Hamdard, New Delhi",
      type: "Academic Conference",
      role: "Invited Speaker"
    },
    {
      id: 4,
      title: "Immuncon-2023 Golden Jubilee Conference",
      date: "October 5-8, 2023",
      location: "AIIMS, New Delhi",
      type: "National Conference",
      role: "National Speaker"
    }
  ];

  const patents = [
    {
      id: 1,
      title: "Establishment of a Maurine Stromal Cell Line Expressing Two Notch Ligands and MHC-II protein",
      university: "Pennsylvania State University",
      number: "2012-3908",
      inventors: "Jianxun Song, Fengyang Lei, and Rizwanul Haque",
      year: "2012"
    },
    {
      id: 2,
      title: "Generation of tumor-specific T lymphocytes from induced pluripotent stem cells",
      university: "Pennsylvania State University", 
      number: "2011-3814",
      inventors: "Jianxun Song, Fengyang Lei, and Rizwanul Haque",
      year: "2011"
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
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{collaborator.name.split(' ').map(n => n[0]).join('')}</span>
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

      {/* Active Research Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Active Research Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current major research initiatives with significant funding and impact
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
                      <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
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
                        <div className="text-xs text-gray-500">
                          Grant: {project.grantNumber}
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

      {/* Research Consultancy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">International Research Consultancy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advisory roles and consultation services for international research projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultancy.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">{item.country}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.organization}</p>
                  <p className="text-sm text-gray-700 mb-4">{item.focus}</p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.year}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patent Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intellectual property contributions to stem cell and immunotherapy research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {patents.map((patent) => (
              <Card key={patent.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">{patent.university}</span>
                    </div>
                    <div className="text-sm text-gray-500">{patent.year}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{patent.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">Patent No: {patent.number}</p>
                  <p className="text-sm text-gray-700">Inventors: {patent.inventors}</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  
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
