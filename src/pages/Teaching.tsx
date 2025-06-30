
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Book } from "lucide-react";

const Teaching = () => {
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

  const invitedLectures = [
    {
      title: "iPSC Technology in Cancer Immunotherapy",
      venue: "International Conference on Stem Cell Research",
      location: "Boston, USA",
      year: "2023"
    },
    {
      title: "T Cell Engineering: From Bench to Bedside",
      venue: "Asian Society of Immunology Annual Meeting",
      location: "Singapore",
      year: "2023"
    },
    {
      title: "Environmental Toxicology and Immune System",
      venue: "Global Health Conference",
      location: "Geneva, Switzerland", 
      year: "2022"
    },
    {
      title: "Future of Regenerative Medicine",
      venue: "National Biotechnology Summit",
      location: "New Delhi, India",
      year: "2022"
    },
    {
      title: "Personalized Cancer Therapy Approaches",
      venue: "Indo-US Science and Technology Forum",
      location: "Virtual",
      year: "2021"
    }
  ];

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

          {/* Teaching Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{supervision.phdAwarded}</div>
                <div className="text-gray-600">Ph.D. Awarded</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{supervision.phdCurrent}</div>
                <div className="text-gray-600">Ph.D. Students (Current)</div>
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

          {/* Invited Lectures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Invited Lectures</h2>
            <div className="space-y-4">
              {invitedLectures.map((lecture, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{lecture.year}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{lecture.title}</h3>
                    <p className="text-gray-700 mb-1">{lecture.venue}</p>
                    <p className="text-gray-600 text-sm">{lecture.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
    </Layout>
  );
};

export default Teaching;
