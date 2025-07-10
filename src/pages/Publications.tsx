import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Book, FileText, Award, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Publication {
  number: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  impactFactor: string;
  doi?: string;
  pmid?: string;
  issn?: string;
  status?: string;
}

const Publications = () => {
  const [showAllPublications, setShowAllPublications] = useState(false);

  const fullLengthPublications: Publication[] = [
    {
      number: 63,
      title: "Promoter methylation correlates with reduced SMAD4 expression in patients with breast cancer",
      authors: "Archana Chaudhary, Manish Kumar, Pankaj Prabhakar, Lalit Mohan Mohammad Shamsul Ola, Rizwanul Haque and Md. Margoob Ahmad",
      journal: "Discover Oncology",
      year: "2025",
      impactFactor: "2.8",
      issn: "eISSN: 2730-6011",
      status: "Accepted for publication"
    },
    {
      number: 62,
      title: "Coevolutionary dynamics of 53BP1 and its impact on TP53 interaction for DNA damage repair",
      authors: "Kumari K, Rai GP, Shriya S, Khan N, Ola MS, Shanker A, Rizwanul Haque",
      journal: "Comput Biol Chem",
      year: "2025",
      impactFactor: "2.6",
      doi: "10.1016/j.compbiolchem.2025.108508",
      pmid: "40382899"
    },
    {
      number: 61,
      title: "An insight into impact of nanomaterials toxicity on human health",
      authors: "Qamar W, Gulia S, Athar M, Ahmad R, Imam MT, Chandra P, Singh BP, Rizwanul Haque, Hassan MI, Rahman S",
      journal: "PeerJ",
      year: "2024",
      impactFactor: "2.7",
      doi: "10.7717/peerj.17807"
    },
    {
      number: 60,
      title: "Neoantigen identification and Dendritic Cell-Based vaccine for Lung Cancer Immunotherapy",
      authors: "Komal Kumari, Amarrnath Singh, Archana Chaudhary, Rakesh Kumar Singh, Asheesh Shanker, Vinay Kumar, Rizwanul Haque",
      journal: "Vaccines",
      year: "2024",
      impactFactor: "7.8",
      doi: "10.3390/vaccines12050498"
    },
    {
      number: 59,
      title: "Gamma irradiation in modulating arsenic bioremediation potential of Pseudomonas sp. AK1 and AK9",
      authors: "Ghanshyam K Satyapal, Rizwanul Haque and Nitish Kumar",
      journal: "Int J Radiat Biol",
      year: "2024",
      impactFactor: "2.6",
      doi: "10.1080/09553002.2024.2345137"
    },
    {
      number: 58,
      title: "Unlocking the Potential of Induced Pluripotent Stem Cells in Revolutionizing Cancer Therapy",
      authors: "Amrita Mondal, Ankita Talukdar, & Rizwanul Haque",
      journal: "Current Stem Cell Research & Therapy",
      year: "2024",
      impactFactor: "2.7",
      doi: "10.2174/011574888X294791240408055222"
    },
    // ... continuing with more publications
  ];

  const morePublications: Publication[] = [
    {
      number: 57,
      title: "Reactive oxygen species mediated apoptosis induction in human liver cancer cells by Emblica officinalis (Amla): a new trend in liver cancer treatment",
      authors: "Archana Chaudhary, Nandani Kumari, Manish Kumar, Md. Margoob Ahmad, & Rizwanul Haque",
      journal: "Toxicol. Environ. Health Sci.",
      year: "2024",
      impactFactor: "1.7",
      doi: "10.1007/s13530-024-00209-9"
    },
    {
      number: 56,
      title: "Functional Significance of the C Terminal Domain of Human Interferon Regulatory Factor-1 (IRF-1) In Gene Expression and Cell Cycle Regulation",
      authors: "Krishna Prakasha, Rizwanul Haque Santosh Kumar Mishra, Ekta Singh",
      journal: "Iranian Journal of Science",
      year: "2024",
      impactFactor: "1.7",
      doi: "10.1007/s40995-024-01583-2",
      status: "Accepted"
    },
    {
      number: 55,
      title: "Potential inhibition of 12-O-tetradecanoylphorbol-13-acetate-induced inflammation, hyperproliferation, and hyperplasiogenic responses by celecoxib in mouse skin",
      authors: "Shakilur Rahman, Rizwanul Haque & Sheikh Raisuddin",
      journal: "Cutaneous and Ocular Toxicology",
      year: "2024",
      impactFactor: "1.974",
      doi: "10.1080/15569527.2023.2295843"
    },
    // Add more publications here - continuing with the pattern for all 63 publications
  ];

  const bookChapters = [
    {
      number: 10,
      title: "Natural products for the management of oral cancer: A lifestyle problem and its solution",
      authors: "Vikas Kumar, Komal Kumari and Rizwanul Haque",
      book: "Environmental Toxicants and Lifestyle Diseases",
      publisher: "Springer",
      editors: "Prof. Sheikh Raisuddin, Dr. Shahzad Ahmad and Dr. Mehjabeen Javed"
    },
    {
      number: 9,
      title: "Focusing on the cytokine storm in the battle against COVID-19: The rising role of mesenchymal-derived stem cells",
      authors: "Abdul Naeem, Arshi Waseem, Abdul Junaid Siddiqui, Beauty Ray, Riya Sinha, Abdul Quiayoom Khan, Rizwanul Haque and Syed Shadab Raza",
      book: "Stem cell, An alternative Therapy to Covid-19 and Cytokine Storm",
      publisher: "Academic Press",
      chapter: "Chapter 13",
      pages: "191-207",
      year: "2024"
    },
    // ... add more book chapters
  ];

  const books = [
    {
      title: "Effect of Arsenic on T cells in Rheumatoid Arthritis",
      authors: "Archana Chaudhry & Rizwanul Haque",
      publisher: "Lambert Academic Publishing, Germany",
      year: "2015",
      isbn: "978-3-330-06769-1"
    },
    {
      title: "Human Implication of Biotechnology",
      authors: "Rizwanul Haque, Amrita Srivastava, & Nitish Kumar",
      publisher: "Shree Publisher and Distributor, New Delhi",
      year: "2017",
      isbn: "978-81-8329-862-9"
    },
    {
      title: "Power of Induced Pluripotent Stem Cells in Regenerative Medicine",
      authors: "Faisal Alzahrani & Rizwanul Haque",
      publisher: "Springer",
      status: "Under Preparation"
    }
  ];

  const displayedPublications = showAllPublications 
    ? [...fullLengthPublications, ...morePublications]
    : fullLengthPublications;

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scientific <span className="text-blue-600">Publications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of 63+ peer-reviewed publications with 4200+ citations and H-index of 25
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
                <div className="text-3xl font-bold text-blue-600 mb-2">265</div>
                <div className="text-gray-600">Total Impact Factor</div>
              </CardContent>
            </Card>
          </div>

          {/* Research Contribution Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Research Contribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  My research interests are in the area of immunology particularly on stem cells to treat immune mediated diseases. 
                  I am involved in the generation of immune cells mainly platelets, designer T cells and Treg cells from Hematopoietic 
                  stem cells (HSC), induced pluripotent stem (iPS) cells and Embryonic stem (ES) cells which can be used for adoptive 
                  immunotherapy and likely to contribute toward treatments of cancers, asthma, and autoimmune diseases.
                </p>
                <p className="mb-4">
                  <strong>Breakthrough Research:</strong> For the first time we have reported that T lineage cells can be generated from 
                  induced Pluripotent Stem cell has been published in Cellular Immunology. This breakthrough research is very important 
                  for developing therapeutic immune cells since it provides a potential treatment target for patients.
                </p>
                <p className="mb-4">
                  We have made significant contributions to the area of stem cell, lung biology, proteomics, immunomodulation and T cell 
                  based therapy, which is evident from our 63 peer reviewed full-length publication records in a variety of top class 
                  scientific journals and 10 book chapters and books.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="full-length" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="full-length">Full Length Papers</TabsTrigger>
              <TabsTrigger value="book-chapters">Book Chapters</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="news">News & Recognition</TabsTrigger>
            </TabsList>

            <TabsContent value="full-length" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Full Length Manuscripts ({fullLengthPublications.length + morePublications.length})</h2>
                <Button 
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>{showAllPublications ? 'Show Less' : 'Show All Publications'}</span>
                </Button>
              </div>

              <div className="space-y-4">
                {displayedPublications.map((pub, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-blue-100 text-blue-800">#{pub.number}</Badge>
                        <Badge className="bg-green-100 text-green-800">IF: {pub.impactFactor}</Badge>
                        <Badge variant="outline">{pub.year}</Badge>
                        {pub.status && <Badge className="bg-yellow-100 text-yellow-800">{pub.status}</Badge>}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                      <p className="text-gray-600 mb-2 text-sm">{pub.authors}</p>
                      <p className="text-blue-600 font-medium mb-2">{pub.journal}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        {pub.doi && <span>DOI: {pub.doi}</span>}
                        {pub.pmid && <span>PMID: {pub.pmid}</span>}
                        {pub.issn && <span>{pub.issn}</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {!showAllPublications && (
                <div className="text-center pt-6">
                  <Button 
                    onClick={() => setShowAllPublications(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Read More - Show All {morePublications.length} Additional Publications
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="book-chapters" className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Chapters ({bookChapters.length})</h2>
              <div className="space-y-4">
                {bookChapters.map((chapter, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Book className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-purple-100 text-purple-800">#{chapter.number}</Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{chapter.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{chapter.authors}</p>
                          <p className="text-blue-600 font-medium">{chapter.book}</p>
                          <div className="text-sm text-gray-500 mt-2">
                            <span>{chapter.publisher}</span>
                            {chapter.editors && <span> • Editors: {chapter.editors}</span>}
                            {chapter.chapter && <span> • {chapter.chapter}</span>}
                            {chapter.pages && <span> • Pages: {chapter.pages}</span>}
                            {chapter.year && <span> • {chapter.year}</span>}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="books" className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Books Published & Under Preparation</h2>
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
                          {book.isbn && <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>}
                          {book.status && <Badge className="bg-yellow-100 text-yellow-800 mt-2">{book.status}</Badge>}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">News & Recognition</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="current-science">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <span>Featured in Current Science</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Science Last Fortnight Recognition</h4>
                        <p className="text-gray-700 mb-2">
                          Recent work published in Life Science journal was featured by the editor of Current Science as 
                          <strong> "Toxin Turned Medicine (Arsenic to cure liver cancer)"</strong>
                        </p>
                        <p className="text-sm text-gray-500">
                          Published in Current Science, Vol. 115, No. 2, Pages 195-196, July 25, 2018
                        </p>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="priority-reports">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-red-600" />
                      <span>Priority Reports & Cover Features</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-blue-900 mb-2">High Impact Publications</h4>
                        <p className="text-gray-700 mb-2">
                          Several publications have been published as <strong>priority reports</strong> and captured on cover pages. 
                          These are short, definitive reports of findings of high impact, significance, and timeliness.
                        </p>
                        <p className="text-gray-700 mb-2">
                          Notable work has been reported worldwide in science news media and captured by many websites, 
                          particularly <strong>"Stem cells are potential source of cancer fighting T cells"</strong>.
                        </p>
                        <Badge className="bg-red-100 text-red-800">Priority Report</Badge>
                        <Badge className="bg-green-100 text-green-800 ml-2">Cover Feature</Badge>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rapid-communications">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-green-600" />
                      <span>Rapid Communications</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Breakthrough Research Communications</h4>
                        <p className="text-gray-700 mb-2">
                          Several papers have been published as <strong>Rapid Communications</strong> - brief, definitive reports 
                          of highly significant and timely findings in the field.
                        </p>
                        <p className="text-sm text-gray-600">
                          These publications represent cutting-edge research with immediate impact on the scientific community.
                        </p>
                        <Badge className="bg-green-100 text-green-800">Rapid Communication</Badge>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          {/* External Links */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Profiles & Academic Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <a href="https://orcid.org/0000-0002-5759-4140" target="_blank" rel="noopener noreferrer">
                  ORCID Profile
                </a>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Google Scholar</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>ResearchGate</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Scopus Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
