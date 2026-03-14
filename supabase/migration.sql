-- ============================================
-- HAQUE RESEARCH HUB - Database Migration
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Publications
CREATE TABLE IF NOT EXISTS publications (
  id SERIAL PRIMARY KEY,
  number INTEGER NOT NULL,
  title TEXT NOT NULL,
  authors TEXT NOT NULL,
  journal TEXT NOT NULL,
  year TEXT NOT NULL,
  impact_factor TEXT,
  doi TEXT,
  pmid TEXT,
  issn TEXT,
  status TEXT,
  type TEXT,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Book Chapters
CREATE TABLE IF NOT EXISTS book_chapters (
  id SERIAL PRIMARY KEY,
  number INTEGER NOT NULL,
  title TEXT NOT NULL,
  authors TEXT NOT NULL,
  book TEXT NOT NULL,
  publisher TEXT NOT NULL,
  editors TEXT,
  chapter TEXT,
  pages TEXT,
  year TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Books
CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT NOT NULL,
  publisher TEXT NOT NULL,
  year TEXT,
  isbn TEXT,
  status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL,
  author TEXT DEFAULT 'Prof. Rizwanul Haque',
  type TEXT,
  media JSONB,
  location TEXT,
  attendees INTEGER,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PhD Students
CREATE TABLE IF NOT EXISTS phd_students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  year TEXT NOT NULL,
  fellowship TEXT,
  qualification TEXT,
  title TEXT,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'current',
  current_position TEXT,
  position_label TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Research Projects
CREATE TABLE IF NOT EXISTS research_projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  funding TEXT NOT NULL,
  amount TEXT,
  duration TEXT,
  grant_number TEXT,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'Ongoing',
  category TEXT,
  role TEXT DEFAULT 'PI',
  region TEXT DEFAULT 'india',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Collaborators
CREATE TABLE IF NOT EXISTS collaborators (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT,
  institution TEXT,
  specialization TEXT,
  image_url TEXT,
  profile_link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Workshop Activities
CREATE TABLE IF NOT EXISTS workshop_activities (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  event TEXT,
  date TEXT,
  location TEXT,
  type TEXT NOT NULL,
  year TEXT,
  authors TEXT,
  organizer TEXT,
  highlight BOOLEAN DEFAULT FALSE,
  abstract_number TEXT,
  page TEXT,
  theme TEXT,
  role TEXT,
  note TEXT,
  mode TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Public can READ, only authenticated can WRITE
-- ============================================

-- Enable RLS on all tables
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE phd_students ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE collaborators ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_activities ENABLE ROW LEVEL SECURITY;

-- Public READ policies (anyone can view the website data)
CREATE POLICY "Public read publications" ON publications FOR SELECT USING (true);
CREATE POLICY "Public read book_chapters" ON book_chapters FOR SELECT USING (true);
CREATE POLICY "Public read books" ON books FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read phd_students" ON phd_students FOR SELECT USING (true);
CREATE POLICY "Public read research_projects" ON research_projects FOR SELECT USING (true);
CREATE POLICY "Public read collaborators" ON collaborators FOR SELECT USING (true);
CREATE POLICY "Public read workshop_activities" ON workshop_activities FOR SELECT USING (true);

-- Authenticated WRITE policies (only admin can add/edit/delete)
CREATE POLICY "Admin insert publications" ON publications FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update publications" ON publications FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete publications" ON publications FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert book_chapters" ON book_chapters FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update book_chapters" ON book_chapters FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete book_chapters" ON book_chapters FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert books" ON books FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update books" ON books FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete books" ON books FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert blog_posts" ON blog_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update blog_posts" ON blog_posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete blog_posts" ON blog_posts FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert phd_students" ON phd_students FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update phd_students" ON phd_students FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete phd_students" ON phd_students FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert research_projects" ON research_projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update research_projects" ON research_projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete research_projects" ON research_projects FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert collaborators" ON collaborators FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update collaborators" ON collaborators FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete collaborators" ON collaborators FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert workshop_activities" ON workshop_activities FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update workshop_activities" ON workshop_activities FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete workshop_activities" ON workshop_activities FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================
-- STORAGE BUCKET for media uploads
-- ============================================
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to media bucket
CREATE POLICY "Public read media" ON storage.objects FOR SELECT USING (bucket_id = 'media');

-- Allow authenticated users to upload media
CREATE POLICY "Admin upload media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
CREATE POLICY "Admin update media" ON storage.objects FOR UPDATE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
CREATE POLICY "Admin delete media" ON storage.objects FOR DELETE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
