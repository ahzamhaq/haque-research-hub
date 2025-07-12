import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Research = () => {
  const ongoingProjects = [
    {
      title: "iPSC-derived Designer T Cells for HCC Treatment",
      funding: "ICMR",
      amount: "₹92 Lakhs",
      duration: "2024-2027 (36 months)",
      grantNumber: "IIRPSG-2024-01-05271",
      description: "Generation of hepatocellular carcinoma reactive designer T cells based on induced pluripotent stem cells",
      status: "Ongoing",
      category: "Cancer Immunotherapy",
      role: "PI"
    },
    {
      title: "FoxP3 Modulation in Rheumatoid Arthritis",
      funding: "CCRUM",
      amount: "₹30.15 Lakhs",
      duration: "2024-2027 (3 years)",
      grantNumber: "F.No-TECH-21013/11/2024-CCRUM-HQ",
      description: "Evaluation of Unani Drug on FoxP3 expressing in Regulatory T cells in the Modulation of Rheumatoid Arthritis",
      status: "Ongoing", 
      category: "Autoimmune Diseases",
      role: "PI"
    },
    {
      title: "Telomerase and Breast Cancer in Arsenic-affected Regions",
      funding: "BCST",
      amount: "₹2 Lakhs",
      duration: "2022-2024 (2 years)",
      grantNumber: "BCST-RD=01/2022-769",
      description: "Study of the Telomerase Regulation in Female Breast Cancer Patient of Arsenic Affected region of Bihar",
      status: "Ongoing",
      category: "Environmental Health",
      role: "Co-PI"
    },
    {
      title: "Breast Cancer Epigenetic Study",
      funding: "ICMR",
      amount: "₹47 Lakhs",
      duration: "2024-2027 (36 months)",
      grantNumber: "IIRP-2023-2456",
      description: "Epigenetic modulation and molecular mechanism involved in development of breast cancer – A case-control study",
      status: "Ongoing",
      category: "Cancer Biology",
      role: "Co-PI"
    },
    {
      title: "DST-FIST Infrastructure Development",
      funding: "DST",
      amount: "₹59 Lakhs",
      grantNumber: "SR/FST/LS-I/2019/513",
      description: "Department of Biotechnology, SEBES, Central University of South Bihar, FIST- PROJECT (Level-1)",
      status: "Ongoing",
      category: "Infrastructure",
      role: "PI"
    }
  ];

  const completedProjects = [
    {
      title: "Telomerase Regulation in Liver Cancer",
      funding: "SERB",
      amount: "₹31.5 Lakhs",
      duration: "2018-2021",
      grantNumber: "EMR/2017/004171",
      description: "Mechanism of telomerase regulation in response of arsenic in liver cancer",
      status: "Completed",
      category: "Cancer Biology",
      role: "PI"
    },
    {
      title: "Corporate funding",
      funding: "VV Biotech Pvt. Ltd.",
      amount: "₹1.25 Lakhs",
      duration: "2020-2024",
      description: "Characterization and preclinical investigation of our molecules against autoimmune diseases",
      status: "Completed",
      category: "Drug Development",
      role: "PI"
    }
  ];

  const usaGrants = [
    {
      title: "Tyrosine-specific CTLs from iPS cells on melanoma",
      funding: "W. W. Smith Charitable Trust",
      amount: "$100,000",
      duration: "2010-2012",
      role: "Co-PI"
    },
    {
      title: "iPS cell-derived highly reactive T lymphocytes on melanoma",
      funding: "Melanoma Research Foundation",
      amount: "$100,000",
      duration: "2010-2012",
      role: "Co-PI"
    },
    {
      title: "iPS derived regulatory T cells on Lupus",
      funding: "Barsumian Trust",
      amount: "$25,000",
      duration: "2011",
      role: "Co-PI"
    },
    {
      title: "Survivin and Aurora B in Primary T Lymphocytes",
      funding: "Pennsylvania Department of Health",
      amount: "$50,000",
      duration: "2008-2010",
      role: "Co-PI"
    },
    {
      title: "Generation of tumor-specific CTLs from HSC",
      funding: "St. Baldric's Foundation",
      amount: "$50,000",
      duration: "2008-2009",
      role: "Co-PI"
    }
  ];

  const researchInterests = [
    {
      title: "Stem Cell-derived Tregs and CTLs",
      description: "Generation of immune cells mainly platelets, designer T cells and Treg cells from Hematopoietic stem cells (HSC), induced pluripotent stem (iPS) cells and Embryonic stem (ES) cells for adoptive immunotherapy"
    },
    {
      title: "Neoantigen-based Vaccine Development", 
      description: "Identification of novel epitopes from Neoantigen/Antigen for the generation of novel epitope based vaccine for the treatment of Cancer and other diseases"
    },
    {
      title: "Telomerase and Notch Signaling in Cancer",
      description: "Dissecting the role of Telomerase complex and Notch signaling in the modulation of Cancer and Rheumatoid arthritis"
    },
    {
      title: "FoxP3 and Autoimmune Diseases",
      description: "Study on modulation of Foxp3 expression in response of arsenic and correlation with Rheumatoid arthritis"
    },
    {
      title: "Tumor-Specific T Cell Generation",
      description: "Generating Tumor Specific T cells from Stem cells (HSCs, ESCs & iPSCs) to treat HCC and other form of cancer"
    },
    {
      title: "Stem Cell Biology in Pregnancy",
      description: "Comparison of HSCs in diseased versus normal after full term pregnancy"
    }
  ];

  const consultancies = [
    {
      title: "Antioxidants and Sex differences in brain stroke",
      organization: "National Science, Technology and Innovation Plan (KACST-2015), Kingdom of Saudi Arabia",
      description: "Free radical mediated brain stroke in relation to hormonal and oxidative stress signaling",
      status: "Approved"
    },
    {
      title: "Protective role of adenosine Kinase inhibition",
      organization: "Ministry of Higher Education, King Abdul Aziz University, Saudi Arabia",
      description: "Protective role of adenosine Kinase inhibition in Traumatic Optic Neuropathy",
      status: "Submitted"
    }
  ];

  const patents = [
    {
      title: "Establishment of a Maurine Stromal Cell Line Expressing Two Notch Ligands and MHC-II protein",
      number: "2012-3908",
      institution: "Pennsylvania State University",
      inventors: "Jianxun Song, Fengyang Lei, and Rizwanul Haque"
    },
    {
      title: "Generation of tumor-specific T lymphocytes from induced pluripotent stem cells",
      number: "2011-3814", 
      institution: "Pennsylvania State University",
      inventors: "Jianxun Song, Fengyang Lei, and Rizwanul Haque"
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Research & <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Pioneering research in stem cell biology, cancer immunotherapy, and regenerative medicine with international recognition
            </p>
          </div>

          {/* Research Impact */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-8">Research Impact & Recognition</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">63+</div>
                  <div className="text-blue-100">Publications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">4200+</div>
                  <div className="text-blue-100">Citations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">25</div>
                  <div className="text-blue-100">H-Index</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">41</div>
                  <div className="text-blue-100">i10-Index</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">265+</div>
                  <div className="text-blue-100">Total Impact Factor</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">10+</div>
                  <div className="text-blue-100">Book Chapters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">2</div>
                  <div className="text-blue-100">Patents</div>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Awards & Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-amber-800">Best Postdoctoral Fellow (2009)</h4>
                    <p className="text-sm text-gray-600">Recognition for outstanding research contributions</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-amber-800">International Travel Awards</h4>
                    <p className="text-sm text-gray-600">Japan, California, and various US universities</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-amber-800">Multiple Awards</h4>
                    <p className="text-sm text-gray-600">CSIR, CCRUM, and Bharat Seva Trust</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold text-amber-800">International Recognition</h4>
                    <p className="text-sm text-gray-600">High global citation impact in stem cell research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Contribution Overview */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Research Contribution Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  My research interests focus on immunology, particularly stem cells to treat immune-mediated diseases. I specialize in generating immune cells from various stem cell sources for adoptive immunotherapy, contributing to treatments for cancers, asthma, and autoimmune diseases.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">First Report</div>
                    <div className="text-sm text-gray-600">T lineage cells from iPSCs published in Cellular Immunology</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">265+</div>
                    <div className="text-sm text-gray-600">Total Impact Factor</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">2</div>
                    <div className="text-sm text-gray-600">Patents Submitted</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="interests">Research Focus</TabsTrigger>
              <TabsTrigger value="patents">Patents</TabsTrigger>
              <TabsTrigger value="consultancy">Consultancy</TabsTrigger>
              <TabsTrigger value="usa-grants">USA Grants</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              {/* Ongoing Projects */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Research Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ongoingProjects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge className="bg-green-100 text-green-800">{project.status}</Badge>
                          <Badge variant="outline">{project.funding}</Badge>
                        </div>
                        <CardTitle className="text-lg text-blue-900">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{project.category}</Badge>
                          <Badge variant="outline" className="text-xs">{project.role}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-600 text-sm">{project.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div><strong>Amount:</strong> {project.amount}</div>
                          <div><strong>Duration:</strong> {project.duration}</div>
                          {project.grantNumber && <div><strong>Grant:</strong> {project.grantNumber}</div>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Completed Projects */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Completed Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedProjects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge className="bg-blue-100 text-blue-800">{project.status}</Badge>
                          <Badge variant="outline">{project.funding}</Badge>
                        </div>
                        <CardTitle className="text-lg text-blue-900">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{project.category}</Badge>
                          <Badge variant="outline" className="text-xs">{project.role}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-600 text-sm">{project.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div><strong>Amount:</strong> {project.amount}</div>
                          <div><strong>Duration:</strong> {project.duration}</div>
                          {project.grantNumber && <div><strong>Grant:</strong> {project.grantNumber}</div>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="interests" className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Research Focus Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchInterests.map((interest, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">{interest.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{interest.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="patents" className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Patent Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {patents.map((patent, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{patent.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">Patent No: {patent.number}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div><strong>Institution:</strong> {patent.institution}</div>
                      <div><strong>Inventors:</strong> {patent.inventors}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consultancy" className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Consultancy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consultancies.map((consultancy, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{consultancy.title}</CardTitle>
                      <Badge variant={consultancy.status === 'Approved' ? 'default' : 'secondary'}>
                        {consultancy.status}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div><strong>Organization:</strong> {consultancy.organization}</div>
                      <p className="text-gray-600">{consultancy.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="usa-grants" className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">International Grants (USA)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usaGrants.map((grant, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{grant.title}</CardTitle>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{grant.funding}</Badge>
                        <Badge className="bg-purple-100 text-purple-800">{grant.role}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div><strong>Amount:</strong> {grant.amount}</div>
                      <div><strong>Duration:</strong> {grant.duration}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
