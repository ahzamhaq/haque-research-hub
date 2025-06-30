
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const education = [
    {
      degree: "Ph.D. in Immunotoxicology",
      institution: "Jamia Hamdard University",
      year: "2003"
    },
    {
      degree: "M.Sc. in Biochemistry",
      institution: "Jamia Hamdard University", 
      year: "1998"
    },
    {
      degree: "B.Sc. in Biochemistry",
      institution: "Aligarh Muslim University",
      year: "1996"
    }
  ];

  const expertise = [
    "Stem Cell Biology",
    "T-cell Immunotherapy", 
    "Cancer Research",
    "Immunotoxicology",
    "Biotechnology",
    "Regenerative Medicine",
    "Molecular Diagnostics",
    "Telomerase Research"
  ];

  const awards = [
    "Best Postdoctoral Fellow (2009, USA)",
    "CSIR Travel Award",
    "CCRUM Research Grant",
    "Bharat Seva Trust Award",
    "Multiple Research Excellence Awards"
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Prof. Rizwanul Haque</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished academic leader with 40+ years of excellence in biotechnology, 
              stem cell research, and higher education
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Professional Biography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Prof. (Dr.) Rizwanul Haque serves as the Professor and Dean of the School of Earth 
                    Biological & Environmental Sciences at Central University of South Bihar (CUSB). 
                    His distinguished academic career spans over four decades, marked by groundbreaking 
                    research in stem cell biology, immunotherapy, and biotechnology.
                  </p>
                  <p>
                    Dr. Haque completed 9.2 years of intensive postdoctoral training at Penn State 
                    College of Medicine, USA, where he developed expertise in cutting-edge research 
                    methodologies and established international collaborations that continue to 
                    influence his work today.
                  </p>
                  <p>
                    His research portfolio encompasses diverse areas including iPSC-derived designer 
                    T cells for cancer treatment, FoxP3 modulation in autoimmune diseases, and 
                    telomerase regulation in various cancer types. He has successfully secured 
                    funding from prestigious organizations including ICMR, CCRUM, BCST, and SERB.
                  </p>
                  <p>
                    As an educator, Prof. Haque has delivered over 60 national and international 
                    lectures, chaired numerous conferences, and mentored countless students in 
                    pursuing excellence in biological sciences and biotechnology.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Current Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">Professor & Dean</p>
                  <p className="text-gray-600">School of Earth Biological & Environmental Sciences</p>
                  <p className="text-gray-600">Central University of South Bihar</p>
                  <p className="text-gray-600 mt-2">Gaya, Bihar, India</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Research Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Publications:</span>
                      <span className="font-semibold">63+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">H-Index:</span>
                      <span className="font-semibold">25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">i10-Index:</span>
                      <span className="font-semibold">41</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Citations:</span>
                      <span className="font-semibold">4200+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg text-blue-900 mb-2">{item.degree}</h3>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <Badge variant="outline">{item.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Expertise</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((skill, index) => (
                <Badge key={index} className="text-sm py-2 px-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Honors & Awards</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
