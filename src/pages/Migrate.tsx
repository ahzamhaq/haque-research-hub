import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { fullLengthPublications, bookChapters, books } from '@/data/publicationsData';

// All blog post data from Blog.tsx
const blogPostsData = [
  {
    title: "Celebrating the MSc 2023–25 Convocation – SEBES, CUSB",
    excerpt: "A proud moment attending the convocation ceremony for MSc students of the School of Earth, Biological and Environmental Sciences at Central University of South Bihar.",
    content: "I had the honour of attending the convocation ceremony for the MSc students (2023–25) of the School of Earth, Biological and Environmental Sciences (SEBES) at the Central University of South Bihar.",
    date: "2025-03-15", author: "Prof. Rizwanul Haque", type: "ceremony",
    media: { type: "gallery", images: ["https://i.postimg.cc/D0bfsyWt/covo-photo1.jpg","https://i.postimg.cc/vTVzKj2p/convo-photo-2.jpg","https://i.postimg.cc/8PCrHs0B/jim-visit5.jpg"], videos: ["https://1drv.ms/v/c/88f158d94a1c365f/EZ9sJtn1kfVKq6ZKjNszDaoBSbn4luRX6T0hawFiaQRV6g?e=PkEMXS","https://1drv.ms/v/c/88f158d94a1c365f/Eey8oECX9EJCiR532zOdRBwBQkWxN_RHtrEnJvFDV36XMQ?e=egZf4a"], videoCovers: ["https://i.postimg.cc/8PgB5Z0z/Screenshot-2025-07-15-180548.png","https://i.postimg.cc/4xNc7qbs/cover-convo.jpg"], thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format&q=80" },
    location: "SEBES, Central University of South Bihar", attendees: 80, views: 245, likes: 32, comments: 8,
    tags: ["Convocation", "MSc Graduation", "SEBES", "Academic Achievement"]
  },
  {
    title: "Science Day PURSE Grant Felicitation Ceremony",
    excerpt: "Attended as delegates in Science Day for Felicitation Ceremony of PURSE grant.",
    content: "Attended as delegates in Science Day for Felicitation Ceremony of PURSE grant and attended special lectures on the theme for NSD 2025.",
    date: "2025-02-28", author: "Prof. Rizwanul Haque", type: "event",
    media: { type: "video", url: "https://1drv.ms/v/c/88f158d94a1c365f/EfSKdyRXp3xBhwnHhw35troB6PNdl94-uoazsFO3rcETEQ?e=N8SOWQ", videoCover: "https://i.postimg.cc/yxmfdth0/purse-cover.jpg", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600" },
    location: "Vigyan Bhawan, New Delhi", attendees: 200, views: 189, likes: 24, comments: 5,
    tags: ["Science Day", "PURSE Grant", "DST", "National Event"]
  },
  {
    title: "Visit to Hamdard Laboratories (India), Ghaziabad",
    excerpt: "Exploring the manufacturing processes and rich heritage of Hamdard Laboratories.",
    content: "I recently had the opportunity to visit Hamdard Laboratories (India) at their facility in Ghaziabad.",
    date: "2025-02-20", author: "Prof. Rizwanul Haque", type: "visit",
    media: { type: "image", url: "https://i.postimg.cc/V6yBC4kg/hamdard-laboratory.jpg", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600" },
    location: "Hamdard Laboratories, Ghaziabad", attendees: 15, views: 156, likes: 18, comments: 12,
    tags: ["Industry Visit", "Hamdard", "Unani Medicine", "Manufacturing"]
  },
  {
    title: "Unani Day 2025 and International Conference",
    excerpt: "Attended International conference on Innovation in Unani Medicine.",
    content: "Attended as delegates in Unani Day 2025 and International conference on Innovation in Unani Medicine for Integrative Health Solutions.",
    date: "2025-02-11", author: "Prof. Rizwanul Haque", type: "conference",
    media: { type: "gallery", images: ["https://i.postimg.cc/zfkXCGJQ/unani-meeting2.jpg","https://i.postimg.cc/BnHvvCR4/unani-meeting.jpg","https://i.postimg.cc/sfLf98r3/unani-meeting3.jpg"], thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600" },
    location: "Vigyan Bhawan, New Delhi", attendees: 300, views: 298, likes: 41, comments: 15,
    tags: ["Unani Day", "International Conference", "Traditional Medicine"]
  },
  {
    title: "MSc Students Farewell Ceremony 2023-25 Batch",
    excerpt: "An emotional farewell to the MSc students of 2023–25 batch from SEBES.",
    content: "It was a proud and emotional moment to bid farewell to the MSc students of the 2023–25 batch.",
    date: "2025-02-05", author: "Prof. Rizwanul Haque", type: "ceremony",
    media: { type: "video", url: "https://1drv.ms/v/c/88f158d94a1c365f/Ebqpm42FAtFIp7ioyzgd7IgBIepH9QX-m0MNYeFPdqIYhQ?e=ckab8r", videoCover: "https://i.postimg.cc/Hs5JJH7q/farewell-cover.jpg", thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600" },
    location: "SEBES, Central University of South Bihar", attendees: 120, views: 278, likes: 35, comments: 18,
    tags: ["Farewell", "MSc Students", "SEBES", "Graduation"]
  },
  {
    title: "Visit by Dr. Jianxun (Jim) Song from Texas A&M University",
    excerpt: "Honoured to host Dr. Jianxun Song, R.L. Bricker Endowed Professor from Texas A&M University.",
    content: "We were honoured to host Dr. Jianxun (Jim) Song, PhD, R.L. Bricker Endowed Professor from Texas A&M University.",
    date: "2025-01-28", author: "Prof. Rizwanul Haque", type: "visit",
    media: { type: "gallery", images: ["https://i.postimg.cc/D0Gzbdmr/jim-visit1.jpg","https://i.postimg.cc/dt81sBbv/jim-visit2.jpg","https://i.postimg.cc/fRDbJdsd/jim-visit3.jpg","https://i.postimg.cc/8PCrHs0B/jim-visit5.jpg"], videos: ["https://1drv.ms/v/c/88f158d94a1c365f/Ebk3--sP3alNpJUOy1qbsZ8B8K1Sh6snOV3I20D765KLAg?e=NIiuje"], videoCovers: ["https://i.postimg.cc/nVKbMPhd/jim-cover.jpg"], thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600" },
    location: "Central University of South Bihar", attendees: 50, views: 195, likes: 28, comments: 14,
    tags: ["International Collaboration", "Texas A&M", "Campus Visit"]
  },
  {
    title: "DST-FIST Project Presentation at IISER Pune",
    excerpt: "Historic milestone as CUSB Biotechnology Department becomes the first to receive DST-FIST funding.",
    content: "I recently visited IISER, Pune to present and defend the DST-FIST project on behalf of the Department of Biotechnology.",
    date: "2025-01-15", author: "Prof. Rizwanul Haque", type: "presentation",
    media: { type: "gallery", images: ["https://i.postimg.cc/02HtNYDW/IISER-1.jpg","https://i.postimg.cc/L8cNtmyj/IISER-2.jpg","https://i.postimg.cc/TwG0sCvw/IISER-3.jpg","https://i.postimg.cc/9MpbHZcB/IISER-4.jpg"], thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600" },
    location: "IISER Pune", attendees: 25, views: 167, likes: 22, comments: 9,
    tags: ["DST-FIST", "IISER Pune", "Research Funding", "Biotechnology"]
  }
];

// PhD Students
const phdStudentsData = [
  { name: "Dr Nadra Sadaf", year: "2016-2021", status: "awarded", fellowship: "CSIR-JRF", current_position: "Almanac Life Science India Pvt Ltd., New Delhi" },
  { name: "Dr. Neeraj Kumar Rai", year: "2016-2021", status: "awarded", fellowship: "UGC-JRF", current_position: "PDF, West Virginia University, USA" },
  { name: "Archana Chaudhry", year: "2017-2023", status: "awarded", fellowship: "UGC-JRF", current_position: "Guest teacher in AN College, Patna" },
  { name: "Komal Kumari", year: "2020", status: "current", fellowship: "Non-net fellowship", qualification: "MSc Biotechnology", title: "Identification of novel immunogenic epitopes based on neoantigens for lung cancer vaccination", image_url: "/students/students/Komal-kumari-Phd.jpg" },
  { name: "Vikas Kumar", year: "2022", status: "current", fellowship: "DBT-JRF", qualification: "M.Sc. in Biotechnology", title: "Study on the modulation of Receptor for Activated C Kinase 1 protein in Oral Squamous Cell Carcinoma", image_url: "/students/students/Vikas-Kumar-PhD.jpg" },
  { name: "Nandani Kumari", year: "2022", status: "current", fellowship: "CSIR-SRF", qualification: "MSc in Zoology", title: "Impact of Arsenic trioxide and natural compound(s) on telomerase modulation in breast cancer cell line", image_url: "/students/students/Nandani-kumari-PhD.jpg" },
  { name: "Seema Singh Marabi", year: "2022", status: "current", fellowship: "NFST-SRF", qualification: "MSc in Biotechnology", title: "Modulation of FoxP3 and miRNA by arsenic trioxide in rheumatoid arthritis", image_url: "/students/students/seema-singh-marabi-PhD.jpg" },
  { name: "Srishti Shriya", year: "2023", status: "current", fellowship: "CSIR Net LS and Non-Net Fellowship", qualification: "M.Sc Zoology", title: "Identification and Immunological Evaluation of Neoepitopes for Breast Cancer Immunotherapy", image_url: "/students/students/Shrishti-Sriyis-Phd.jpg" },
  { name: "Naina Sakshi", year: "2023", status: "current", fellowship: "Non-Net Fellow", qualification: "M.Sc Biotechnology", title: "Nanoconjugation of Aloe-emodin with Arsenic trioxide", image_url: "/students/students/Naina-Sakshi-Phd.jpg" },
  { name: "Rashid Lateef", year: "2024", status: "current", fellowship: "Central Council for Research in Unani Medicine (CCRUM)", qualification: "MSc in Biochemistry", title: "Evaluation of Unani drug on FoxP3 expressing regulatory T cells", image_url: "/students/students/rashid-lateef-PhD.jpg", position_label: "Senior Research Fellow" },
  { name: "Antariksha Banik", year: "2025", status: "current", fellowship: "ICMR", qualification: "MSc Biotechnology (2024)", title: "Generation of Hepatocellular Carcinoma reactive designer T cells", image_url: "/students/students/Antarakshi-baini-PhD.jpg" }
];

// Research Projects
const researchProjectsData = [
  { title: "iPSC-derived Designer T Cells for HCC Treatment", funding: "ICMR", amount: "₹92 Lakhs", duration: "2024-2027 (36 months)", grant_number: "IIRPSG-2024-01-05271", description: "Generation of hepatocellular carcinoma reactive designer T cells based on induced pluripotent stem cells", status: "Ongoing", category: "Cancer Immunotherapy", role: "PI", region: "india" },
  { title: "FoxP3 Modulation in Rheumatoid Arthritis", funding: "CCRUM", amount: "₹30.15 Lakhs", duration: "2024-2027 (3 years)", grant_number: "F.No-TECH-21013/11/2024-CCRUM-HQ", description: "Evaluation of Unani Drug on FoxP3 expressing in Regulatory T cells in the Modulation of Rheumatoid Arthritis", status: "Ongoing", category: "Autoimmune Diseases", role: "PI", region: "india" },
  { title: "Telomerase and Breast Cancer in Arsenic-affected Regions", funding: "BCST", amount: "₹2 Lakhs", duration: "2022-2024 (2 years)", grant_number: "BCST-RD=01/2022-769", description: "Study of the Telomerase Regulation in Female Breast Cancer Patient of Arsenic Affected region of Bihar", status: "Ongoing", category: "Environmental Health", role: "Co-PI", region: "india" },
  { title: "Breast Cancer Epigenetic Study", funding: "ICMR", amount: "₹47 Lakhs", duration: "2024-2027 (36 months)", grant_number: "IIRP-2023-2456", description: "Epigenetic modulation and molecular mechanism involved in development of breast cancer", status: "Ongoing", category: "Cancer Biology", role: "Co-PI", region: "india" },
  { title: "DST-FIST Infrastructure Development", funding: "DST", amount: "₹59 Lakhs", grant_number: "SR/FST/LS-I/2019/513", description: "Department of Biotechnology, SEBES, Central University of South Bihar, FIST- PROJECT (Level-1)", status: "Ongoing", category: "Infrastructure", role: "PI", region: "india" },
  { title: "Telomerase Regulation in Liver Cancer", funding: "SERB", amount: "₹31.5 Lakhs", duration: "2018-2021", grant_number: "EMR/2017/004171", description: "Mechanism of telomerase regulation in response of arsenic in liver cancer", status: "Completed", category: "Cancer Biology", role: "PI", region: "india" },
  { title: "Corporate funding", funding: "VV Biotech Pvt. Ltd.", amount: "₹1.25 Lakhs", duration: "2020-2024", description: "Characterization and preclinical investigation of our molecules against autoimmune diseases", status: "Completed", category: "Drug Development", role: "PI", region: "india" },
  { title: "Tyrosine-specific CTLs from iPS cells on melanoma", funding: "W. W. Smith Charitable Trust", amount: "$100,000", duration: "2010-2012", status: "Completed", role: "Co-PI", region: "usa" },
  { title: "iPS cell-derived highly reactive T lymphocytes on melanoma", funding: "Melanoma Research Foundation", amount: "$100,000", duration: "2010-2012", status: "Completed", role: "Co-PI", region: "usa" },
  { title: "iPS derived regulatory T cells on Lupus", funding: "Barsumian Trust", amount: "$25,000", duration: "2011", status: "Completed", role: "Co-PI", region: "usa" },
  { title: "Survivin and Aurora B in Primary T Lymphocytes", funding: "Pennsylvania Department of Health", amount: "$50,000", duration: "2008-2010", status: "Completed", role: "Co-PI", region: "usa" },
  { title: "Generation of tumor-specific CTLs from HSC", funding: "St. Baldric's Foundation", amount: "$50,000", duration: "2008-2009", status: "Completed", role: "Co-PI", region: "usa" }
];

// Collaborators
const collaboratorsData = [
  { name: "Prof. Jianxun (Jim) Song", position: "R.L. Bricker Endowed Professor", institution: "Department of Microbial Pathogenesis and Immunology, Texas A&M University, USA", specialization: "Cancer Immunotherapy and T Cell Biology" },
  { name: "Prof. Sheikh Raisuddin", position: "Professor", institution: "Department of Medical Elementology and Toxicology, Jamia Hamdard, New Delhi", specialization: "Arsenic Toxicology" },
  { name: "Dr. Syed Shadab Raza", position: "Associate Professor", institution: "Era's Lucknow Medical College, Lucknow", specialization: "Stem Cell Biology and Neuroscience" },
  { name: "Prof. Asheesh Shanker", position: "Professor", institution: "School of Biotechnology, BHU, Varanasi", specialization: "Bioinformatics and Computational Biology" },
  { name: "Prof. Mohammad Shamsul Ola", position: "Professor", institution: "Department of Biochemistry, King Saud University, Riyadh, Saudi Arabia", specialization: "Biochemistry and Neuroprotection" }
];

type MigrationStatus = 'idle' | 'running' | 'done' | 'error';

interface MigSection {
  label: string;
  status: MigrationStatus;
  count: number;
  error?: string;
}

const Migrate = () => {
  const [sections, setSections] = useState<Record<string, MigSection>>({
    publications: { label: 'Publications', status: 'idle', count: 0 },
    book_chapters: { label: 'Book Chapters', status: 'idle', count: 0 },
    books: { label: 'Books', status: 'idle', count: 0 },
    blog_posts: { label: 'Blog Posts', status: 'idle', count: 0 },
    phd_students: { label: 'PhD Students', status: 'idle', count: 0 },
    research_projects: { label: 'Research Projects', status: 'idle', count: 0 },
    collaborators: { label: 'Collaborators', status: 'idle', count: 0 },
  });
  const [migrating, setMigrating] = useState(false);

  const updateSection = (key: string, updates: Partial<MigSection>) => {
    setSections(prev => ({ ...prev, [key]: { ...prev[key], ...updates } }));
  };

  const migrateAll = async () => {
    setMigrating(true);

    // Check auth
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert('Please login first at /admin, then come back here.');
      setMigrating(false);
      return;
    }

    // 1. Publications
    updateSection('publications', { status: 'running' });
    try {
      const pubData = fullLengthPublications.map(p => ({
        number: p.number, title: p.title, authors: p.authors, journal: p.journal,
        year: p.year, impact_factor: p.impactFactor, doi: p.doi || null,
        pmid: p.pmid || null, issn: p.issn || null, status: p.status || null,
        type: p.type || null, category: p.category || null
      }));
      const { error } = await supabase.from('publications').insert(pubData);
      if (error) throw error;
      updateSection('publications', { status: 'done', count: pubData.length });
    } catch (e: any) { updateSection('publications', { status: 'error', error: e.message }); }

    // 2. Book Chapters
    updateSection('book_chapters', { status: 'running' });
    try {
      const chapData = bookChapters.map(c => ({
        number: c.number, title: c.title, authors: c.authors, book: c.book,
        publisher: c.publisher, editors: c.editors || null, chapter: c.chapter || null,
        pages: c.pages || null, year: c.year || null
      }));
      const { error } = await supabase.from('book_chapters').insert(chapData);
      if (error) throw error;
      updateSection('book_chapters', { status: 'done', count: chapData.length });
    } catch (e: any) { updateSection('book_chapters', { status: 'error', error: e.message }); }

    // 3. Books
    updateSection('books', { status: 'running' });
    try {
      const booksData = books.map(b => ({
        title: b.title, authors: b.authors, publisher: b.publisher,
        year: b.year || null, isbn: b.isbn || null, status: b.status || null
      }));
      const { error } = await supabase.from('books').insert(booksData);
      if (error) throw error;
      updateSection('books', { status: 'done', count: booksData.length });
    } catch (e: any) { updateSection('books', { status: 'error', error: e.message }); }

    // 4. Blog Posts
    updateSection('blog_posts', { status: 'running' });
    try {
      const { error } = await supabase.from('blog_posts').insert(blogPostsData);
      if (error) throw error;
      updateSection('blog_posts', { status: 'done', count: blogPostsData.length });
    } catch (e: any) { updateSection('blog_posts', { status: 'error', error: e.message }); }

    // 5. PhD Students
    updateSection('phd_students', { status: 'running' });
    try {
      const { error } = await supabase.from('phd_students').insert(phdStudentsData);
      if (error) throw error;
      updateSection('phd_students', { status: 'done', count: phdStudentsData.length });
    } catch (e: any) { updateSection('phd_students', { status: 'error', error: e.message }); }

    // 6. Research Projects
    updateSection('research_projects', { status: 'running' });
    try {
      const { error } = await supabase.from('research_projects').insert(researchProjectsData);
      if (error) throw error;
      updateSection('research_projects', { status: 'done', count: researchProjectsData.length });
    } catch (e: any) { updateSection('research_projects', { status: 'error', error: e.message }); }

    // 7. Collaborators
    updateSection('collaborators', { status: 'running' });
    try {
      const { error } = await supabase.from('collaborators').insert(collaboratorsData);
      if (error) throw error;
      updateSection('collaborators', { status: 'done', count: collaboratorsData.length });
    } catch (e: any) { updateSection('collaborators', { status: 'error', error: e.message }); }

    setMigrating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Data Migration</CardTitle>
            <p className="text-gray-500">Migrate existing hardcoded data into Supabase database. Login at /admin first!</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(sections).map(([key, sec]) => (
              <div key={key} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                <span className="font-medium">{sec.label}</span>
                <div className="flex items-center space-x-2">
                  {sec.status === 'idle' && <Badge variant="outline">Pending</Badge>}
                  {sec.status === 'running' && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
                  {sec.status === 'done' && <><Check className="w-4 h-4 text-green-600" /><Badge className="bg-green-100 text-green-800">{sec.count} items</Badge></>}
                  {sec.status === 'error' && <><AlertCircle className="w-4 h-4 text-red-600" /><span className="text-xs text-red-600">{sec.error}</span></>}
                </div>
              </div>
            ))}
            <Button onClick={migrateAll} disabled={migrating} className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
              {migrating ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Migrating...</> : 'Start Migration'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Migrate;
