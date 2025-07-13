import { useState } from "react";
import { Calendar, Eye, Heart, MessageCircle, Share2, Play, Image, MapPin, Users, Award, Presentation, BookOpen, Video, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Annual Biotechnology Research Symposium 2024",
      excerpt: "A remarkable gathering of researchers, students, and industry experts showcasing cutting-edge biotechnology innovations and collaborative research findings.",
      date: "2024-06-15",
      author: "Prof. Rizwanul Haque",
      type: "event",
      media: {
        type: "video",
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
      },
      location: "Central University of South Bihar",
      attendees: 150,
      views: 245,
      likes: 32,
      comments: 8,
      tags: ["Research", "Symposium", "Biotechnology", "Academic Event"]
    },
    {
      id: 2,
      title: "ICMR Funded Project Review Meeting",
      excerpt: "Comprehensive progress review and milestone discussion for our groundbreaking iPSC-derived T cells research project targeting hepatocellular carcinoma treatment.",
      date: "2024-06-10",
      author: "Prof. Rizwanul Haque",
      type: "meeting",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
      },
      location: "Department of Biotechnology, CUSB",
      attendees: 25,
      views: 189,
      likes: 24,
      comments: 5,
      tags: ["ICMR", "iPSC", "Cancer Research", "Project Review"]
    },
    {
      id: 3,
      title: "International Collaboration Ceremony - Penn State Alumni Network",
      excerpt: "A prestigious ceremony celebrating the strengthening of international research collaborations and the Penn State alumni network in biotechnology research.",
      date: "2024-06-05",
      author: "Prof. Rizwanul Haque",
      type: "ceremony",
      media: {
        type: "gallery",
        images: [
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
        ],
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
      },
      location: "University Conference Hall",
      attendees: 80,
      views: 156,
      likes: 18,
      comments: 12,
      tags: ["Collaboration", "Penn State", "Alumni", "International"]
    },
    {
      id: 4,
      title: "PhD Students Research Excellence Awards 2024",
      excerpt: "Annual recognition ceremony honoring outstanding PhD students for their exceptional research contributions and academic achievements in biotechnology.",
      date: "2024-05-28",
      author: "Prof. Rizwanul Haque",
      type: "ceremony",
      media: {
        type: "video",
        url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
      },
      location: "SEBES Auditorium, CUSB",
      attendees: 120,
      views: 298,
      likes: 41,
      comments: 15,
      tags: ["PhD Students", "Awards", "Research Excellence", "Academic Achievement"]
    }
  ]);

  const workshops = [
    {
      id: 1,
      title: "Geospatial Technology for Viksit Bharat",
      role: "Chairperson",
      date: "2025-02-21",
      organization: "Department of Geography, CUSB, Gaya",
      type: "Pre-conference Workshop",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Addressed the audience in inaugural session as Chairperson focusing on geospatial technologies for national development."
    },
    {
      id: 2,
      title: "SPARC-Indo-US Immunology Workshop",
      role: "Participant",
      date: "2020-06-12",
      organization: "IIT Ropar, India & The George Washington University, USA",
      type: "International Workshop",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      description: "Attended joint Indo-US workshop on immunology research and collaboration opportunities."
    },
    {
      id: 3,
      title: "Management of Diversity and Equity in Universities",
      role: "Participant",
      date: "2017-07-10",
      organization: "National University of Educational Planning and Administration (NUEPA), New Delhi",
      type: "Orientation Workshop",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      description: "Attended comprehensive workshop on diversity and equity management in higher education institutions."
    }
  ];

  const conferences = [
    {
      id: 1,
      title: "Indian Geophysical Union - Anni Talwani Memorial Prize Lecture",
      role: "Speaker",
      date: "2025-04-25",
      organization: "Department of Geology, CUSB, Gaya",
      type: "Special Lecture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Addressed the gathering on inaugural session of prestigious memorial prize lecture."
    },
    {
      id: 2,
      title: "Science Day for Felicitation Ceremony - PURSE Grant",
      role: "Delegate",
      date: "2025-02-28",
      organization: "DST at Vigyan Bhawan, New Delhi",
      type: "National Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Attended Science Day celebration with theme 'Empowering Indian Youth for Global Leadership in Science and Innovation for Viksit Bharat.'"
    },
    {
      id: 3,
      title: "Unani Day 2025 and International Conference",
      role: "Delegate",
      date: "2025-02-11",
      organization: "Vigyan Bhawan, New Delhi",
      type: "International Conference",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      description: "Attended conference on Innovation in Unani Medicine for Integrative Health Solutions, addressed by Hon'ble President of India."
    }
  ];

  const invitedPresentations = [
    {
      id: 1,
      title: "Modern Trends In Research",
      venue: "Maulana Azad National Urdu University College of Teacher Education, Darbhanga",
      date: "2025-05-14",
      type: "Extension Lecture",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Generation of Immune Cells through in vitro Cell Culture Methods",
      venue: "4th Asian Congress for Alternatives to Animal Experiments, Jamia Hamdard, New Delhi",
      date: "2024-12-12",
      type: "International Conference",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Complexities of Telomere and Telomerase in Liver Cancer",
      venue: "International Conference on Recent Trends in Biosciences and Healthcare, Patna University",
      date: "2024-11-22",
      type: "Technical Session Speaker",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'ceremony': return Award;
      case 'meeting': return Users;
      case 'event': return Presentation;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'ceremony': return 'from-purple-500 to-pink-500';
      case 'meeting': return 'from-blue-500 to-indigo-500';
      case 'event': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'video': return Play;
      case 'gallery': return Camera;
      default: return Image;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Events & <span className="text-blue-300">Ceremonies</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Discover our latest ceremonies, meetings, and academic events through rich visual storytelling and comprehensive coverage.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Video className="w-5 h-5 text-red-400" />
              <span>Video Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-green-400" />
              <span>Photo Galleries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Live Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="events" className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Events</span>
              </TabsTrigger>
              <TabsTrigger value="workshops" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Workshops</span>
              </TabsTrigger>
              <TabsTrigger value="conferences" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Conferences</span>
              </TabsTrigger>
              <TabsTrigger value="presentations" className="flex items-center space-x-2">
                <Presentation className="w-4 h-4" />
                <span>Invited Talks</span>
              </TabsTrigger>
            </TabsList>

            {/* Events Tab */}
            <TabsContent value="events">
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Events & Ceremonies</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience our academic journey through immersive visual documentation of ceremonies, meetings, and milestone events.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {posts.map((post) => {
                    const EventIcon = getEventIcon(post.type);
                    const MediaIcon = getMediaIcon(post.media.type);
                    
                    return (
                      <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden border-0 bg-white">
                        <div className="relative">
                          <div className="relative overflow-hidden">
                            <img 
                              src={post.media.thumbnail || post.media.url} 
                              alt={post.title}
                              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          </div>
                          
                          {/* Event Type Badge */}
                          <div className="absolute top-4 left-4">
                            <div className={`flex items-center space-x-2 bg-gradient-to-r ${getEventColor(post.type)} text-white rounded-full px-4 py-2 shadow-lg`}>
                              <EventIcon className="w-4 h-4" />
                              <span className="text-sm font-semibold capitalize">{post.type}</span>
                            </div>
                          </div>

                          {/* Media Type Indicator */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                              <MediaIcon className={`w-5 h-5 ${post.media.type === 'video' ? 'text-red-600' : post.media.type === 'gallery' ? 'text-purple-600' : 'text-blue-600'}`} />
                            </div>
                          </div>

                          {/* Play Button for Videos */}
                          {post.media.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                <Play className="w-10 h-10 text-red-600 fill-current ml-1" />
                              </div>
                            </div>
                          )}

                          {/* Gallery Indicator */}
                          {post.media.type === 'gallery' && (
                            <div className="absolute bottom-4 right-4">
                              <div className="bg-black/70 text-white rounded-full px-3 py-1 text-sm font-medium">
                                +{post.media.images?.length || 0} photos
                              </div>
                            </div>
                          )}

                          {/* Event Details Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center space-x-4 text-sm mb-2">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span className="truncate">{post.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4" />
                                <span>{post.attendees}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag, index) => (
                              <Badge 
                                key={index}
                                variant="secondary"
                                className="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div className="flex items-center space-x-6 text-gray-500">
                              <div className="flex items-center space-x-2">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Heart className="w-4 h-4" />
                                <span className="text-sm font-medium">{post.likes}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-sm font-medium">{post.comments}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-600">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* Workshops Tab */}
            <TabsContent value="workshops">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshops & Training Programs</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Participation in specialized workshops and training programs to enhance research capabilities and academic leadership.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workshops.map((workshop) => (
                    <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-600 text-white">{workshop.role}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(workshop.date)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {workshop.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-blue-600 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{workshop.organization}</span>
                        </div>
                        <Badge variant="outline" className="mb-3">{workshop.type}</Badge>
                        <p className="text-gray-600 text-sm">{workshop.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Conferences Tab */}
            <TabsContent value="conferences">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Conferences & Symposiums</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Active participation in national and international conferences, addressing key scientific gatherings and policy forums.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {conferences.map((conference) => (
                    <Card key={conference.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img 
                          src={conference.image} 
                          alt={conference.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-600 text-white">{conference.role}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(conference.date)}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                          {conference.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-purple-600 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{conference.organization}</span>
                        </div>
                        <Badge variant="outline" className="mb-3">{conference.type}</Badge>
                        <p className="text-gray-600">{conference.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Invited Presentations Tab */}
            <TabsContent value="presentations">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Invited Presentations</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Distinguished invited lectures and presentations at prestigious institutions and conferences worldwide.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {invitedPresentations.map((presentation) => (
                    <Card key={presentation.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img 
                          src={presentation.image} 
                          alt={presentation.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-600 text-white">{presentation.type}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(presentation.date)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                          {presentation.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-orange-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-xs">{presentation.venue}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Show More Button for Presentations */}
                <div className="text-center mt-8">
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                    <Award className="w-4 h-4 mr-2" />
                    View All 31 Presentations
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Events</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to get notified about upcoming ceremonies, meetings, and research events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
