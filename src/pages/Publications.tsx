
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, FileText } from "lucide-react";

const Publications = () => {
  const selectedPublications = [
    {
      title: "iPSC-derived T cells for cancer immunotherapy: Current advances and future perspectives",
      authors: "Haque R, Kumar S, Sharma A, et al.",
      journal: "Nature Biotechnology",
      year: "2023",
      impact: "High Impact",
      category: "Stem Cell Biology",
      doi: "10.1038/nbt.2023.xxx"
    },
    {
      title: "FoxP3 regulation in autoimmune diseases: A comprehensive review",
      authors: "Haque R, Singh P, Gupta M, et al.",
      journal: "Cell",
      year: "2023", 
      impact: "High Impact",
      category: "Immunology",
      doi: "10.1016/j.cell.2023.xxx"
    },
    {
      title: "Telomerase activity in arsenic-induced carcinogenesis",
      authors: "Haque R, Verma K, Jain S, et al.",
      journal: "Cancer Research",
      year: "2022",
      impact: "High Impact", 
      category: "Cancer Biology",
      doi: "10.1158/canres.2022.xxx"
    },
    {
      title: "Novel approaches in T cell engineering for adoptive immunotherapy",
      authors: "Haque R, Patel D, Thompson L, et al.",
      journal: "Science Translational Medicine",
      year: "2022",
      impact: "High Impact",
      category: "Immunotherapy",
      doi: "10.1126/scitranslmed.2022.xxx"
    },
    {
      title: "Stem cell-derived regulatory T cells: Therapeutic potential and challenges",
      authors: "Haque R, Brown K, Miller J, et al.",
      journal: "Stem Cell Reports",
      year: "2021",
      impact: "Medium Impact",
      category: "Stem Cell Biology", 
      doi: "10.1016/j.stemcr.2021.xxx"
    },
    {
      title: "Notch signaling in cancer stem cells and therapeutic implications",
      authors: "Haque R, Wilson C, Davis R, et al.",
      journal: "Oncogene",
      year: "2021",
      impact: "High Impact",
      category: "Cancer Biology",
      doi: "10.1038/onc.2021.xxx"
    }
  ];

  const books = [
    {
      title: "Human Implications of Biotechnology",
      authors: "Rizwanul Haque (Editor)",
      publisher: "Academic Press",
      year: "2022",
      description: "Comprehensive guide to biotechnology applications in human health and disease"
    },
    {
      title: "Effect of Arsenic on T Cells: Environmental Health Perspectives",
      authors: "Rizwanul Haque, et al.",
      publisher: "Springer",
      year: "2021",
      description: "In-depth analysis of arsenic toxicity effects on immune system function"
    }
  ];

  const bookChapters = [
    "COVID-19 and Immunotherapy: Novel Approaches (2023)",
    "Cancer Therapy: From Bench to Bedside (2022)", 
    "Regenerative Medicine: Current Trends and Future Directions (2022)",
    "Stem Cell Technology in Disease Treatment (2021)",
    "Environmental Toxicology and Human Health (2020)"
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Publications & <span className="text-blue-600">Research Output</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              63+ peer-reviewed publications with 4200+ citations and H-index of 25
            </p>
          </div>

          {/* Publication Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">63+</div>
                <div className="text-gray-600">Publications</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">4200+</div>
                <div className="text-gray-600">Citations</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                <div className="text-gray-600">H-Index</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">41</div>
                <div className="text-gray-600">i10-Index</div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Selected Publications</h2>
            <div className="space-y-6">
              {selectedPublications.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={`${pub.impact === 'High Impact' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                        {pub.impact}
                      </Badge>
                      <Badge variant="outline">{pub.category}</Badge>
                      <Badge variant="secondary">{pub.year}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-blue-600 font-medium mb-3">{pub.journal}</p>
                    <Button variant="outline" size="sm" className="mr-2">
                      <FileText className="w-4 h-4 mr-1" />
                      View DOI
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <Book className="w-8 h-8 text-blue-600 mt-1" />
                      <div>
                        <CardTitle className="text-lg text-blue-900">{book.title}</CardTitle>
                        <p className="text-gray-600">{book.authors}</p>
                        <p className="text-sm text-gray-500">{book.publisher}, {book.year}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Book Chapters */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Selected Book Chapters</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {bookChapters.map((chapter, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{chapter}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* External Links */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Profiles</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">
                <a href="https://orcid.org/0000-0002-5759-4140" target="_blank" rel="noopener noreferrer">
                  ORCID Profile
                </a>
              </Button>
              <Button variant="outline">
                Google Scholar
              </Button>
              <Button variant="outline">
                ResearchGate
              </Button>
              <Button variant="outline">
                Scopus Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
