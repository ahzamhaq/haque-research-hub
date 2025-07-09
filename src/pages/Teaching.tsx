
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Book, X } from "lucide-react";
import { useState } from "react";

const Teaching = () => {
  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  const courses = [
    {
      level: "Ph.D. Program",
      degree: "Ph.D. in Biotechnology",
      subjects: ["Advanced Immunology", "Cancer Biology", "Stem Cell Technology", "Research Methodology"]
    },
    {
      level: "Master's Program", 
      degree: "M.Sc. in Biotechnology",
      subjects: ["Molecular Diagnostics", "Bioprocess Technology", "Genetic Engineering", "Bioinformatics"]
    },
    {
      level: "Master's Program",
      degree: "M.Sc. in Life Sciences", 
      subjects: ["Cell Biology", "Molecular Biology", "Biochemistry", "Microbiology"]
    },
    {
      level: "Master's Program",
      degree: "M.Sc. in Bioinformatics",
      subjects: ["Computational Biology", "Sequence Analysis", "Structural Biology", "Systems Biology"]
    }
  ];

  const specializations = [
    "Immunology and Immunotherapy",
    "Cancer Biology and Oncology", 
    "Molecular Diagnostics and Biomarkers",
    "Stem Cell Technology and Regenerative Medicine",
    "Biotechnology Applications in Medicine",
    "Environmental Health and Toxicology"
  ];

  const supervision = {
    phdAwarded: 3,
    phdCurrent: 6,
    mscCompleted: 25
  };

  // Data for modals
  const phdAwardedData = [
    { year: "2016-2021", name: "Dr Nadra Sadaf", fellowship: "CSIR-JRF", currentPosition: "Almanac Life Science India Pvt Ltd., New Delhi" },
    { year: "2016-2021", name: "Dr. Neeraj Kumar Rai", fellowship: "UGC-JRF", currentPosition: "PDF, West Virginia University, USA" },
    { year: "2017-2023", name: "Archana Chaudhry", fellowship: "UGC-JRF", currentPosition: "Guest teacher in AN College, Patna" }
  ];

  const currentPhdStudents = [
    { year: "2020", name: "Komal Kumri", fellowship: "" },
    { year: "2022", name: "Nandani Kumari", fellowship: "CSIR-SRF, GATE" },
    { year: "2022", name: "Seema Singh Marabhi", fellowship: "GATE, SRF" },
    { year: "2022", name: "Vikas Kumar", fellowship: "DBT-SRF" },
    { year: "2024", name: "Naina Sakshi", fellowship: "Non-Net Fellow" },
    { year: "2024", name: "Srishti Shriya", fellowship: "CSIR-NET, Non-Net Fellow" }
  ];

  const currentProjectFellows = [
    { year: "2024", name: "Rashid Lateef", position: "Senior Research Fellow", project: "CCRUM project" },
    { year: "2025", name: "Antriksha Banik", position: "Project Research Scientist - I (Non-Medical)", project: "ICMR Project" }
  ];

  const pastProjectFellows = [
    { year: "2019", name: "Ankita Kumari" },
    { year: "2021", name: "Sadhan Kumar" }
  ];

  const invitedPresentations = [
    {
      year: "2025",
      title: "Modern Trends In Research",
      venue: "Maulana Azad National Urdu University College of Teacher Education, Darbhanga",
      date: "14-05-2025"
    },
    {
      year: "2024",
      title: "Generation of Immune Cells through in vitro Cell Culture Methods",
      venue: "4th Asian Congress for Alternatives to Animal Experiments, Jamia Hamdard, New Delhi",
      date: "December 12th-14th, 2024"
    },
    {
      year: "2024",
      title: "Complexities of Telomere and Telomerase in Liver Cancer",
      venue: "International Conference on Recent Trends in Biosciences and Healthcare, Patna University",
      date: "22nd-23rd November 2024"
    },
    {
      year: "2024",
      title: "Effect of Ozone on Human Health and its Impact on Lung Inflammation and Injury",
      venue: "National Seminar on Current Environmental Issues and Sustainable Development, MU Gaya",
      date: "September 11-12, 2024"
    },
    {
      year: "2024",
      title: "Panel Discussion on Computational Oncology",
      venue: "3-day Workshop on Computational Oncology (WoCOn 2024), IIT Patna",
      date: "April 19-21, 2024"
    }
    // ... (truncated for brevity, but full list would be included)
  ];

  const thesisEvaluations = {
    external: {
      msc: [
        { year: "2023", name: "Anamika Kumar", degree: "MSc (Ag)", field: "Agriculture Biotechnology", institution: "Bihar Agriculture University, Sabour" },
        { year: "2020", name: "Priyanka Kumari", degree: "MSc (Ag)", field: "Molecular Biology & Biotechnology", institution: "Bihar Agriculture University, Sabour" }
      ],
      mphil: [
        { year: "2017", name: "Saniya Khan", institution: "Centre for Interdisciplinary Research in Basic Science, JMI, ND-25" },
        { year: "2017", name: "Mr. Nafis Raj", institution: "Centre for Interdisciplinary Research in Basic Science, JMI, ND-25" }
      ],
      phd: [
        { year: "2025", name: "Ms. Sadaf Khan", department: "Department of Biochemistry", institution: "AMU, Aligarh, UP" },
        { year: "2024", name: "Ms. Ritu", institution: "CSIR-INDIAN INSTITUTE of Himalayan Bioresource Technology, Palampur" },
        { year: "2024", name: "Miss Paramanya Additiya Haridas", department: "Department of Life Sciences", institution: "University of Mumbai" }
        // ... (truncated for brevity)
      ]
    }
  };

  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Teaching & <span className="text-blue-600">Mentorship</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nurturing the next generation of scientists and researchers in biotechnology and life sciences
            </p>
          </div>

          {/* Teaching Stats - Now Clickable */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card 
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedModal('phdAwarded')}
            >
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{supervision.phdAwarded}</div>
                <div className="text-gray-600">Ph.D. Awarded</div>
                <div className="text-sm text-blue-600 mt-2">Click to view details</div>
              </CardContent>
            </Card>
            <Card 
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedModal('currentPhd')}
            >
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{supervision.phdCurrent}</div>
                <div className="text-gray-600">Ph.D. Students (Current)</div>
                <div className="text-sm text-green-600 mt-2">Click to view details</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Book className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{supervision.mscCompleted}+</div>
                <div className="text-gray-600">M.Sc. Dissertations Completed</div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Taught */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Courses Taught</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{course.level}</Badge>
                    <CardTitle className="text-xl text-blue-900">{course.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Project Fellows */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Project Fellows in Funded Grants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProjectFellows.map((fellow, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{fellow.year}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{fellow.name}</h3>
                    <p className="text-gray-700 mb-1">{fellow.position}</p>
                    <p className="text-gray-600 text-sm">{fellow.project}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Past Project Fellows</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pastProjectFellows.map((fellow, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{fellow.name}</span>
                      <Badge variant="outline">{fellow.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Areas of Specialization */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teaching Specializations</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {specializations.map((spec, index) => (
                <Badge key={index} className="text-sm py-2 px-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          {/* Invited Presentations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Invited Presentations</h2>
            <div className="space-y-4">
              {invitedPresentations.slice(0, 5).map((presentation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{presentation.year}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{presentation.title}</h3>
                    <p className="text-gray-700 mb-1">{presentation.venue}</p>
                    <p className="text-gray-600 text-sm">{presentation.date}</p>
                  </CardContent>
                </Card>
              ))}
              <div className="text-center">
                <button 
                  onClick={() => setSelectedModal('allPresentations')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View All Presentations ({invitedPresentations.length} total)
                </button>
              </div>
            </div>
          </div>

          {/* Thesis Evaluation Work */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Thesis Evaluation Work for Outside CUSB</h2>
            <Tabs defaultValue="external-phd" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="external-phd">External Ph.D.</TabsTrigger>
                <TabsTrigger value="external-msc">External M.Sc./M.Tech</TabsTrigger>
                <TabsTrigger value="external-mphil">External M.Phil.</TabsTrigger>
              </TabsList>
              
              <TabsContent value="external-phd" className="mt-6">
                <div className="space-y-4">
                  {thesisEvaluations.external.phd.slice(0, 5).map((thesis, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{thesis.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{thesis.name}</h3>
                        {thesis.department && <p className="text-gray-700 mb-1">{thesis.department}</p>}
                        <p className="text-gray-600 text-sm">{thesis.institution}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="text-center">
                    <button 
                      onClick={() => setSelectedModal('allThesis')}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All Thesis Evaluations
                    </button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="external-msc" className="mt-6">
                <div className="space-y-4">
                  {thesisEvaluations.external.msc.map((thesis, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{thesis.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{thesis.name}</h3>
                        <p className="text-gray-700 mb-1">{thesis.degree} - {thesis.field}</p>
                        <p className="text-gray-600 text-sm">{thesis.institution}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="external-mphil" className="mt-6">
                <div className="space-y-4">
                  {thesisEvaluations.external.mphil.map((thesis, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{thesis.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{thesis.name}</h3>
                        <p className="text-gray-600 text-sm">{thesis.institution}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Teaching Philosophy */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Teaching Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Research-Integrated Learning</h3>
                <p className="text-blue-100">
                  Combining theoretical knowledge with hands-on research experience to prepare students 
                  for real-world scientific challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Mentorship Excellence</h3>
                <p className="text-blue-100">
                  Providing personalized guidance and support to help each student achieve their 
                  academic and research potential.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-medium text-yellow-300">
                "Empowering the next generation of biotechnologists and life scientists through 
                excellence in education and research mentorship."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={selectedModal === 'phdAwarded'} 
        onClose={() => setSelectedModal(null)}
        title="Ph.D. Awarded Under My Supervision"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ph.D. Awarded:</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Fellowship</TableHead>
                  <TableHead>Current Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {phdAwardedData.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>{student.year}</TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.fellowship}</TableCell>
                    <TableCell>{student.currentPosition}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">M.Phil. Awarded:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>2016:</strong> Nadra Sadaf</p>
            </div>
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={selectedModal === 'currentPhd'} 
        onClose={() => setSelectedModal(null)}
        title="Current Ph.D. Students Under My Supervision"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Fellowship</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPhdStudents.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.year}</TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.fellowship}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Advisory Committee Memberships</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="current-rac">
              <AccordionTrigger>Current RAC Memberships</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li>1. Ankita Kumari (Biotechnology)</li>
                  <li>2. Surbhi Kumari (Life Science)</li>
                  <li>3. Ananta (Life Science)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="past-rac">
              <AccordionTrigger>Past RAC Memberships</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li>1. Abhay Pandit (Biotechnology)</li>
                  <li>2. Priya Kumari (Biotechnology)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Patent Submitted</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>PSU Patent:</strong> Establishment of a Maurine Stromal Cell Line Expressing Two Notch Ligands and MHC-II protein.</p>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Teaching;
