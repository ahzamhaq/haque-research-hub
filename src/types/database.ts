// Database types matching Supabase tables

export interface DbPublication {
  id?: number;
  number: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  impact_factor?: string;
  doi?: string;
  pmid?: string;
  issn?: string;
  status?: string;
  type?: string;
  category?: string;
  created_at?: string;
}

export interface DbBookChapter {
  id?: number;
  number: number;
  title: string;
  authors: string;
  book: string;
  publisher: string;
  editors?: string;
  chapter?: string;
  pages?: string;
  year?: string;
  created_at?: string;
}

export interface DbBook {
  id?: number;
  title: string;
  authors: string;
  publisher: string;
  year?: string;
  isbn?: string;
  status?: string;
  created_at?: string;
}

export interface BlogMediaConfig {
  type: 'gallery' | 'video' | 'image';
  thumbnail?: string;
  images?: string[];
  videos?: string[];
  videoCovers?: string[];
  url?: string;
  videoCover?: string;
}

export interface DbBlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  type?: string;
  media?: BlogMediaConfig;
  location?: string;
  attendees?: number;
  views?: number;
  likes?: number;
  comments?: number;
  tags?: string[];
  created_at?: string;
}

export interface DbPhdStudent {
  id?: number;
  name: string;
  year: string;
  fellowship?: string;
  qualification?: string;
  title?: string;
  image_url?: string;
  status: 'current' | 'awarded';
  current_position?: string;
  position_label?: string;
  created_at?: string;
}

export interface DbResearchProject {
  id?: number;
  title: string;
  funding: string;
  amount?: string;
  duration?: string;
  grant_number?: string;
  description?: string;
  status: string;
  category?: string;
  role?: string;
  region: string;
  created_at?: string;
}

export interface DbCollaborator {
  id?: number;
  name: string;
  position?: string;
  institution?: string;
  specialization?: string;
  image_url?: string;
  profile_link?: string;
  created_at?: string;
}

export interface DbWorkshopActivity {
  id?: number;
  title: string;
  event?: string;
  date?: string;
  location?: string;
  type: string;
  year?: string;
  authors?: string;
  organizer?: string;
  highlight?: boolean;
  abstract_number?: string;
  page?: string;
  theme?: string;
  role?: string;
  note?: string;
  mode?: string;
  created_at?: string;
}
