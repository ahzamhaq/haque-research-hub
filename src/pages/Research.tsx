import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { useResearchProjects } from "@/hooks/useSupabaseData";

const Research = () => {
  const { data: allProjects, isLoading } = useResearchProjects();

  // Split by status and region from DB data
  const ongoingProjects = allProjects.filter((p: any) => p.status === 'Ongoing' && p.region === 'india');
  const completedProjects = allProjects.filter((p: any) => p.status === 'Completed' && p.region === 'india');
  const usaGrants = allProjects.filter((p: any) => p.region === 'usa');

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

  if (isLoading) {
    return (
      <Layout>
        <div className="py-32 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
          <p className="text-gray-500 text-lg">Loading research projects...</p>
        </div>
      </Layout>
    );
  }

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
                {ongoingProjects.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No ongoing projects found.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ongoingProjects.map((project: any, index: number) => (
                      <Card key={project.id ?? index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
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
                            {project.grant_number && <div><strong>Grant:</strong> {project.grant_number}</div>}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              <Separator />

              {/* Completed Projects */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Completed Projects</h2>
                {completedProjects.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No completed projects found.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completedProjects.map((project: any, index: number) => (
                      <Card key={project.id ?? index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
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
                            {project.grant_number && <div><strong>Grant:</strong> {project.grant_number}</div>}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
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
              {usaGrants.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No USA grants found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {usaGrants.map((grant: any, index: number) => (
                    <Card key={grant.id ?? index} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
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
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
