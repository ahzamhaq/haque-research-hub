import React, { useState, useMemo } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Book, FileText, Award, ExternalLink, BarChart3, Loader2 } from "lucide-react";
import { researchMetrics } from '@/data/publicationsData';
import { usePublications, useBookChapters, useBooks } from '@/hooks/useSupabaseData';
import PublicationCard from '@/components/publications/PublicationCard';
import PublicationPagination from '@/components/publications/PublicationPagination';
import PublicationStats from '@/components/publications/PublicationStats';

const Publications = () => {
  const [showStats, setShowStats] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Fetch from Supabase
  const { data: publications, isLoading: pubLoading } = usePublications();
  const { data: bookChapters, isLoading: chapLoading } = useBookChapters();
  const { data: books, isLoading: booksLoading } = useBooks();

  const filteredPublications = publications ?? [];

  // Paginate results
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const paginatedPublications = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPublications.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPublications, currentPage, itemsPerPage]);

  // Handle pagination changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  if (pubLoading || chapLoading || booksLoading) {
    return (
      <Layout>
        <div className="py-32 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
          <p className="text-gray-500 text-lg">Loading publications from database...</p>
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
              Scientific <span className="text-blue-600">Publications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of {filteredPublications.length} peer-reviewed publications with {researchMetrics.totalCitations}+ citations and H-index of {researchMetrics.hIndex}
            </p>
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
                  based therapy, which is evident from our {researchMetrics.totalPublications} peer reviewed full-length publication records in a variety of top class 
                  scientific journals and {bookChapters.length} book chapters and books.
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
                <h2 className="text-3xl font-bold text-gray-900">
                  Full Length Manuscripts ({filteredPublications.length})
                </h2>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setShowStats(!showStats)}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>{showStats ? 'Hide' : 'Show'} Analytics</span>
                  </Button>
                </div>
              </div>

              {/* Analytics Dashboard */}
              {showStats && <PublicationStats publications={filteredPublications} />}

              {/* Publications List */}
              <div className="space-y-4">
                {paginatedPublications.map((pub, index) => (
                  <PublicationCard key={pub.number} publication={pub} />
                ))}
              </div>

              {/* Pagination */}
              <PublicationPagination
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                totalItems={filteredPublications.length}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
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
                          <p className="text-sm text-gray-500">{book.publisher}{book.year && `, ${book.year}`}</p>
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

          {/* External Links - Fixed */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Profiles & Academic Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="flex items-center space-x-2">
                <a href="https://orcid.org/0000-0002-5759-4140" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>ORCID Profile</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="flex items-center space-x-2">
                <a href="https://scholar.google.com/citations?user=upsNfz0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Scholar</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="flex items-center space-x-2">
                <a href="https://www.researchgate.net/profile/Rizwanul_Haque5/2" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>ResearchGate</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="flex items-center space-x-2">
                <a href="https://www.scopus.com/authid/detail.uri?authorId=57203184276" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>Scopus Profile</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;
