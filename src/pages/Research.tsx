
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const ongoingProjects = [
    {
      title: "iPSC-derived Designer T Cells for HCC Treatment",
      funding: "ICMR",
      description: "Development of induced pluripotent stem cell-derived T cells for hepatocellular carcinoma immunotherapy",
      status: "Ongoing",
      category: "Cancer Immunotherapy"
    },
    {
      title: "FoxP3 Modulation in Rheumatoid Arthritis",
      funding: "CCRUM",
      description: "Investigation of FoxP3 transcription factor regulation in autoimmune arthritis treatment",
      status: "Ongoing", 
      category: "Autoimmune Diseases"
    },
    {
      title: "Telomerase and Breast Cancer in Arsenic-affected Regions",
      funding: "BCST",
      description: "Study of telomerase activity in breast cancer patients from arsenic-contaminated areas",
      status: "Ongoing",
      category: "Environmental Health"
    }
  ];

  const completedProjects = [
    {
      title: "Telomerase Regulation in Liver Cancer",
      funding: "SERB",
      description: "Comprehensive analysis of telomerase activity and regulation in hepatocellular carcinoma",
      status: "Completed",
      category: "Cancer Biology"
    },
    {
      title: "Melanoma T Cell Biology",
      funding: "US NIH",
      description: "Investigation of T cell responses in melanoma immunotherapy",
      status: "Completed",
      category: "Cancer Immunotherapy"
    },
    {
      title: "Lupus Autoimmunity Mechanisms",
      funding: "US NIH", 
      description: "Molecular mechanisms of systemic lupus erythematosus pathogenesis",
      status: "Completed",
      category: "Autoimmune Diseases"
    }
  ];

  const researchInterests = [
    {
      title: "Stem Cell-derived Tregs and CTLs",
      description: "Development of regulatory T cells and cytotoxic T lymphocytes from stem cells for therapeutic applications"
    },
    {
      title: "Neoantigen-based Vaccine Development", 
      description: "Design and optimization of personalized cancer vaccines using tumor-specific neoantigens"
    },
    {
      title: "Telomerase and Notch Signaling in Cancer",
      description: "Investigation of telomerase regulation and Notch pathway interactions in cancer progression"
    },
    {
      title: "iPSC Technology and Regenerative Medicine",
      description: "Applications of induced pluripotent stem cells in tissue engineering and regenerative therapies"
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Research & <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge research in stem cell biology, cancer immunotherapy, and biotechnology
            </p>
          </div>

          {/* Ongoing Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ongoing Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-green-100 text-green-800">{project.status}</Badge>
                      <Badge variant="outline">{project.funding}</Badge>
                    </div>
                    <CardTitle className="text-lg text-blue-900">{project.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Completed Projects */}
          <div className="mb-16">
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
                    <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Interests</h2>
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
          </div>

          {/* Research Impact */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Research Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                <div className="text-3xl font-bold text-yellow-400">6</div>
                <div className="text-blue-100">Active Grants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
