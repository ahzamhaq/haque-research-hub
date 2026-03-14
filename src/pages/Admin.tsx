import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useSupabaseData';
import { supabase } from '@/lib/supabaseClient';
import AdminLogin from '@/components/admin/AdminLogin';
import ContentManager from '@/components/admin/ContentManager';
import {
  LogOut, BookOpen, FileText, Users, FlaskConical, Handshake,
  Presentation, Home, LayoutDashboard
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onLogin={() => {
      supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    }} />;
  }

  const sections = [
    { id: 'publications', label: 'Publications', icon: BookOpen, table: 'publications',
      fields: [
        { name: 'number', label: 'Number', type: 'number', required: true },
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'authors', label: 'Authors', type: 'text', required: true },
        { name: 'journal', label: 'Journal', type: 'text', required: true },
        { name: 'year', label: 'Year', type: 'text', required: true },
        { name: 'impact_factor', label: 'Impact Factor', type: 'text' },
        { name: 'doi', label: 'DOI', type: 'text' },
        { name: 'pmid', label: 'PMID', type: 'text' },
        { name: 'issn', label: 'ISSN', type: 'text' },
        { name: 'status', label: 'Status', type: 'text' },
        { name: 'type', label: 'Type', type: 'select', options: ['regular', 'priority', 'rapid', 'cover'] },
        { name: 'category', label: 'Category', type: 'text' },
      ],
      displayFields: ['number', 'title', 'journal', 'year'],
      orderBy: 'number'
    },
    { id: 'book_chapters', label: 'Book Chapters', icon: BookOpen, table: 'book_chapters',
      fields: [
        { name: 'number', label: 'Number', type: 'number', required: true },
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'authors', label: 'Authors', type: 'text', required: true },
        { name: 'book', label: 'Book Name', type: 'text', required: true },
        { name: 'publisher', label: 'Publisher', type: 'text', required: true },
        { name: 'editors', label: 'Editors', type: 'text' },
        { name: 'chapter', label: 'Chapter', type: 'text' },
        { name: 'pages', label: 'Pages', type: 'text' },
        { name: 'year', label: 'Year', type: 'text' },
      ],
      displayFields: ['number', 'title', 'book', 'year'],
      orderBy: 'number'
    },
    { id: 'books', label: 'Books', icon: BookOpen, table: 'books',
      fields: [
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'authors', label: 'Authors', type: 'text', required: true },
        { name: 'publisher', label: 'Publisher', type: 'text', required: true },
        { name: 'year', label: 'Year', type: 'text' },
        { name: 'isbn', label: 'ISBN', type: 'text' },
        { name: 'status', label: 'Status', type: 'text' },
      ],
      displayFields: ['title', 'authors', 'publisher', 'year'],
      orderBy: 'created_at'
    },
    { id: 'blog_posts', label: 'Blog / Events', icon: FileText, table: 'blog_posts',
      fields: [
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'excerpt', label: 'Short Description', type: 'textarea', required: true },
        { name: 'content', label: 'Full Content', type: 'textarea', required: true },
        { name: 'date', label: 'Date', type: 'date', required: true },
        { name: 'author', label: 'Author', type: 'text', defaultValue: 'Prof. Rizwanul Haque' },
        { name: 'type', label: 'Event Type', type: 'select', options: ['ceremony', 'event', 'visit', 'conference', 'presentation'] },
        { name: 'location', label: 'Location', type: 'text' },
        { name: 'attendees', label: 'Number of Attendees', type: 'number' },
        { name: 'tags', label: 'Tags (comma separated)', type: 'tags' },
      ],
      displayFields: ['title', 'date', 'type', 'location'],
      orderBy: 'date',
      hasMedia: true
    },
    { id: 'phd_students', label: 'PhD Students', icon: Users, table: 'phd_students',
      fields: [
        { name: 'name', label: 'Student Name', type: 'text', required: true },
        { name: 'year', label: 'Year of Enrollment', type: 'text', required: true },
        { name: 'status', label: 'Status', type: 'select', options: ['current', 'awarded'], required: true },
        { name: 'fellowship', label: 'Fellowship', type: 'text' },
        { name: 'qualification', label: 'Qualification', type: 'text' },
        { name: 'title', label: 'Research Title', type: 'textarea' },
        { name: 'image_url', label: 'Photo URL', type: 'text' },
        { name: 'current_position', label: 'Current Position (for awarded)', type: 'text' },
        { name: 'position_label', label: 'Position Label', type: 'text' },
      ],
      displayFields: ['name', 'year', 'status', 'fellowship'],
      orderBy: 'year'
    },
    { id: 'research_projects', label: 'Research Projects', icon: FlaskConical, table: 'research_projects',
      fields: [
        { name: 'title', label: 'Project Title', type: 'text', required: true },
        { name: 'funding', label: 'Funding Agency', type: 'text', required: true },
        { name: 'amount', label: 'Amount', type: 'text' },
        { name: 'duration', label: 'Duration', type: 'text' },
        { name: 'grant_number', label: 'Grant Number', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Ongoing', 'Completed'], required: true },
        { name: 'category', label: 'Category', type: 'text' },
        { name: 'role', label: 'Role', type: 'select', options: ['PI', 'Co-PI'] },
        { name: 'region', label: 'Region', type: 'select', options: ['india', 'usa'] },
      ],
      displayFields: ['title', 'funding', 'status', 'role'],
      orderBy: 'created_at'
    },
    { id: 'collaborators', label: 'Collaborators', icon: Handshake, table: 'collaborators',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'position', label: 'Position', type: 'text' },
        { name: 'institution', label: 'Institution', type: 'text' },
        { name: 'specialization', label: 'Specialization', type: 'text' },
        { name: 'image_url', label: 'Photo URL', type: 'text' },
        { name: 'profile_link', label: 'Profile Link', type: 'text' },
      ],
      displayFields: ['name', 'position', 'institution'],
      orderBy: 'created_at'
    },
    { id: 'workshop_activities', label: 'Workshops & Talks', icon: Presentation, table: 'workshop_activities',
      fields: [
        { name: 'title', label: 'Title', type: 'text', required: true },
        { name: 'type', label: 'Type', type: 'select', options: ['session', 'invited', 'oral', 'poster', 'seminar', 'workshop'], required: true },
        { name: 'event', label: 'Event Name', type: 'text' },
        { name: 'date', label: 'Date', type: 'text' },
        { name: 'year', label: 'Year', type: 'text' },
        { name: 'location', label: 'Location', type: 'text' },
        { name: 'organizer', label: 'Organizer', type: 'text' },
        { name: 'authors', label: 'Authors', type: 'text' },
        { name: 'role', label: 'Role', type: 'text' },
        { name: 'highlight', label: 'Highlight/Recent?', type: 'checkbox' },
        { name: 'abstract_number', label: 'Abstract Number', type: 'text' },
        { name: 'page', label: 'Page', type: 'text' },
        { name: 'theme', label: 'Theme', type: 'text' },
        { name: 'note', label: 'Note', type: 'text' },
        { name: 'mode', label: 'Mode (Online/Offline)', type: 'text' },
      ],
      displayFields: ['title', 'type', 'year', 'event'],
      orderBy: 'year'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <LayoutDashboard className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <Badge className="bg-green-100 text-green-800">Connected</Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  View Site
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="flex flex-wrap gap-1 h-auto p-1 bg-white border rounded-lg shadow-sm mb-6">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <TabsTrigger key={section.id} value={section.id} className="text-xs sm:text-sm">
                  <Icon className="w-4 h-4 mr-1 hidden sm:inline" />
                  {section.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {sections.map(section => (
            <TabsContent key={section.id} value={section.id}>
              <ContentManager
                tableName={section.table}
                title={section.label}
                fields={section.fields}
                displayFields={section.displayFields}
                orderBy={section.orderBy}
                hasMedia={section.hasMedia}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
