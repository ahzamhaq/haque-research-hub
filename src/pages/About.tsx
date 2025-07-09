import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const About = () => {
  const education = [{
    degree: "Ph.D. in Immunotoxicology",
    institution: "Jamia Hamdard University",
    year: "2003"
  }, {
    degree: "M.Sc. in Biochemistry",
    institution: "Jamia Hamdard University",
    year: "1998"
  }, {
    degree: "B.Sc. in Biochemistry",
    institution: "Aligarh Muslim University",
    year: "1996"
  }];
  const expertise = ["Stem Cell Biology", "T-cell Immunotherapy", "Cancer Research", "Immunotoxicology", "Biotechnology", "Regenerative Medicine", "Molecular Diagnostics", "Telomerase Research"];
  const awards = ["Best Postdoctoral Fellow (2009, USA)", "CSIR Travel Award", "CCRUM Research Grant", "Bharat Seva Trust Award", "Multiple Research Excellence Awards"];
  return <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Prof. Rizwanul Haque</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Distinguished academic leader with 23+ years of research experience and 13+ years of teaching excellence in biotechnology, stem cell research, and higher education</p>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Professional Biography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Dr. Rizwanul Haque is currently serving as Dean, School of Earth Biological Science and Professor & Former Head in the Department of Biotechnology at CUSB and is actively involved in teaching, research and administration. Dr. Rizwanul Haque received postdoctoral training for 9.2 years at Penn State College of Medicine, Hershey, PA, USA, in the area of Lung Inflammation and Stem Cell Biology. He has received Ph.D. Degree (Immunotoxicology), M. Sc. (Biochemistry) from Jamia Hamdard University, New Delhi, and B.Sc. (Biochemistry) from AMU, Aligarh.</p>
                  <p>Dr. Haque has extensive experience in the area of immunology, particularly on stem cells to treat immune-mediated diseases. Dr. Haque is involved in the generation of immune cells, mainly T cells and Treg cells from stem cells, which can be used for adaptive immunotherapy with potential for treatments of cancer, asthma, and autoimmune diseases. His breakthrough research and his background are significant for developing therapeutic immune cells to treat cancer potentially. Dr. Haque is currently working on dissecting the role of Telomere and Telomerase modulation by using novel and natural compounds to modulate liver and lung cancer as well as identifying novel epitopes for neo-antigen based vaccine development leading to the treatment of cancer and other diseases.</p>
                  <p>Dr. Haque is actively involved in teaching, training and research program of CUSB. He is involved in teaching of Ph.D. students as well as MSc Biotechnology students. In the past he was involved in teaching of MSc Bioinformatics, MSc Life Science, BSc LLB as well as BSc BEd students. Dr. Haque, has produced 3 Ph.D. and currently 6 Ph.D. students are enrolled under his supervision. More than 25 students have completed MSc dissertation under his mentorship. Dr. Haque served as a Chair or member for designing and improvement of syllabi of Ph.D. course as well as MSc Biotechnology, Life Science, Bioinformatics, Environmental Science, M. Pharm and BSc BEd, courses. Dr. Haque has organized several National and International conferences and workshops as convener, coordinator and as a member. He was involved viva-voce and evaluation of Ph.D, Pre-Ph.D, M.Phil thesis as well as M. Pharma MSc dissertation evaluation for more than two dozen places from all over India. He has delivered more than 25 invited lectures and 40 selected lectures in national and international conferences all over the world. He is a member of several scientific societies and served as adhoc reviewer of high impact journals. Dr. Haque has made significant scientific contributions, evident from his 63 publications and 10 book chapters in a variety of top-class scientific journals and his research has been cited for more than 4200 times by other research groups worldwide, with an h-index of 25 and i10- index of 41. He is serving as the Principal Investigator/Co-PI in SERB, ICMR, CCRUM, DST-FIST, Bihar S&T, corporate funded research projects and as well as Co-PI in 5 research projects in USA.</p>
                  <p>Dr. Haque served as Head of the Department of Biotechnology from 2018 to Aug 2021. He also served as Head of the Centre for Biological Sciences (CBS) that included Biotechnology, Life Science and Bioinformatics programs from 2012-2018 and Coordinated part of BSc BEd and BSc LLB Life Science portions as the Head CBS. Dr. Haque has served and serving as member or Chair of various major committees of the University including University Court, EC, AC, Chairman CUSB purchase committee, UATECH, NEP task force, CSR cell, School Board, BoS, GRC for Teacher, ICC, IBSC, Admission Committee, Minority Cell, Anti Ragging Committee, Anti-discriminating Officer. He is also serving as an outside expert of IBSC of MGCU, Motihari and VV Biotech Pvt. Ltd. Bodhgaya and member of IQAC of Jamia Hamdard. Dr. Haque served as member for faculty appraisal committee and selection committees for selection and promotion of Teacher and Non-Teaching staff within the University, and Universities and Institutes outside. He served as referee for evaluation of research for promotion of international faculty as well as member or Chair of various selection committees of JRF, SRF, JRF to SRF for various research projects of different funding agencies in CUSB and outside CUSB like NIPER (Hajipur) and RMRIMS (Patna). Dr. Haque has been involved in drafting of several policy documents of the University as a member or Chair, such as policy for incentive to teachers, MSRP CUSB faculty to serve as co-supervisor for outside students, Project Manual of CUSB etc.</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Current Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">Professor & Dean (SEBES) & Former Head (Dept. of Biotechnology)</p>
                  <p className="text-gray-600">School of Earth Biological & Environmental Sciences</p>
                  <p className="text-gray-600">Central University of South Bihar</p>
                  <p className="text-gray-600 mt-2 text-base px-[3px] py-px mx-0 text-left font-normal">NH-120, Gaya-Panchanpur Road, Post Fatehpur, Gaya, 824236 
IDs: https://orcid.org/0000-0002-5759-4140/Scopus Author ID: 57203184276</p>
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
              {education.map((item, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg text-blue-900 mb-2">{item.degree}</h3>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <Badge variant="outline">{item.year}</Badge>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Expertise</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.map((skill, index) => <Badge key={index} className="text-sm py-2 px-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {skill}
                </Badge>)}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Honors & Awards</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {awards.map((award, index) => <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">{award}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>;
};
export default About;