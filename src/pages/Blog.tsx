
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
      title: "Celebrating the MSc 2023–25 Convocation – SEBES, CUSB",
      excerpt: "A proud moment attending the convocation ceremony for MSc students of the School of Earth, Biological and Environmental Sciences at Central University of South Bihar.",
      content: "I had the honour of attending the convocation ceremony for the MSc students (2023–25) of the School of Earth, Biological and Environmental Sciences (SEBES) at the Central University of South Bihar. It was a proud moment to see our students receive recognition for their hard work and dedication. I addressed the gathering with a short speech, congratulating them on their achievements and encouraging them to carry forward the values and knowledge they gained here. This convocation was not just a ceremony, but a celebration of growth, perseverance, and new beginnings.",
      date: "2025-03-15",
      author: "Prof. Rizwanul Haque",
      type: "ceremony",
      media: {
        type: "gallery",
        images: [
          "https://i.postimg.cc/yWtJYHsJ/image1.jpg",
          "https://i.postimg.cc/8FzkmKTQ/image2.jpg"
        ],
        videos: [
          "https://screenapp.io/app/#/shared/WrGs7JyIlH",
          "https://screenapp.io/app/#/shared/aMWL4a6n82"
        ],
        thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
      },
      location: "SEBES, Central University of South Bihar",
      attendees: 80,
      views: 245,
      likes: 32,
      comments: 8,
      tags: ["Convocation", "MSc Graduation", "SEBES", "Academic Achievement"]
    },
    {
      id: 2,
      title: "Science Day PURSE Grant Felicitation Ceremony",
      excerpt: "Attended as delegates in Science Day for Felicitation Ceremony of PURSE grant with special lectures on 'Empowering Indian Youth for Global Leadership in Science and Innovation for Viksit Bharat.'",
      content: "Attended as delegates in Science Day for Felicitation Ceremony of PURSE grant and attended special lectures on the theme for NSD 2025: 'Empowering Indian Youth for Global Leadership in Science and Innovation for Viksit Bharat.' Organized by DST at Vigyan Bhawan, New Delhi, India on 28th February 2025. Gathering was addressed by Dr. Jitendra Singh, Hon'ble Minister of Science & Technology, Government of India.",
      date: "2025-02-28",
      author: "Prof. Rizwanul Haque",
      type: "event",
      media: {
        type: "video",
        url: "https://screenapp.io/app/#/shared/idmpZziikx",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
      },
      location: "Vigyan Bhawan, New Delhi",
      attendees: 200,
      views: 189,
      likes: 24,
      comments: 5,
      tags: ["Science Day", "PURSE Grant", "DST", "National Event"]
    },
    {
      id: 3,
      title: "Visit to Hamdard Laboratories (India), Ghaziabad",
      excerpt: "Exploring the manufacturing processes and rich heritage of Hamdard Laboratories, a pioneer in Unani medicine with a legacy dating back to 1906.",
      content: "I recently had the opportunity to visit Hamdard Laboratories (India) at their facility in Ghaziabad. With a legacy dating back to 1906, Hamdard has been a pioneer in the field of Unani medicine and natural health products. During my visit, I explored their manufacturing units and observed firsthand the meticulous processes involved in producing their formulations. From sourcing raw materials to quality control and packaging, every step reflected a blend of traditional knowledge and modern scientific practices. It was a valuable learning experience, offering insights into how a century-old institution maintains its standards and adapts to evolving technologies while staying true to its roots.",
      date: "2025-02-20",
      author: "Prof. Rizwanul Haque",
      type: "visit",
      media: {
        type: "image",
        url: "https://i.postimg.cc/8jvxxhZF/image.jpg",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
      },
      location: "Hamdard Laboratories, Ghaziabad",
      attendees: 15,
      views: 156,
      likes: 18,
      comments: 12,
      tags: ["Industry Visit", "Hamdard", "Unani Medicine", "Manufacturing"]
    },
    {
      id: 4,
      title: "Unani Day 2025 and International Conference",
      excerpt: "Attended International conference on Innovation in Unani Medicine for Integrative Health Solutions, addressed by Hon'ble President of India.",
      content: "Attended as delegates in Unani Day 2025 and International conference on Innovation in Unani Medicine for Integrative Health Solutions: A way forward, at Vigyan Bhawan, New Delhi, India on 11th-12th February 2025. Gathering was addressed by Smt Droupdi Murmu, Honorable President of India and Honorable Minister of Ayush, and Honorable Minister of Science & Technology, Government of India.",
      date: "2025-02-11",
      author: "Prof. Rizwanul Haque",
      type: "conference",
      media: {
        type: "gallery",
        images: [
          "https://i.postimg.cc/2b2BkbTh/image1.jpg",
          "https://i.postimg.cc/v1v4hgJk/image2.jpg",
          "https://i.postimg.cc/rzsDGpQZ/image3.jpg"
        ],
        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
      },
      location: "Vigyan Bhawan, New Delhi",
      attendees: 300,
      views: 298,
      likes: 41,
      comments: 15,
      tags: ["Unani Day", "International Conference", "Traditional Medicine", "Presidential Address"]
    },
    {
      id: 5,
      title: "MSc Students Farewell Ceremony 2023-25 Batch",
      excerpt: "An emotional farewell to the MSc students of 2023–25 batch from SEBES, celebrating their journey and achievements.",
      content: "It was a proud and emotional moment to bid farewell to the MSc students of the 2023–25 batch from the School of Earth, Biological and Environmental Sciences (SEBES), Central University of South Bihar. The farewell was a time to reflect on their journey—from their first day on campus to the confident and capable individuals they've become. During the speech, heartfelt congratulations were shared for their achievements, along with warm wishes for their future endeavors. They were encouraged to continue their journey with integrity, curiosity, and purpose, carrying with them the knowledge and values nurtured during their time at CUSB.",
      date: "2025-02-05",
      author: "Prof. Rizwanul Haque",
      type: "ceremony",
      media: {
        type: "video",
        url: "https://1drv.ms/v/c/88f158d94a1c365f/Ebqpm42FAtFIp7ioyzgd7IgBIepH9QX-m0MNYeFPdqIYhQ?e=ckab8r",
        thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
      },
      location: "SEBES, Central University of South Bihar",
      attendees: 120,
      views: 278,
      likes: 35,
      comments: 18,
      tags: ["Farewell", "MSc Students", "SEBES", "Graduation"]
    },
    {
      id: 6,
      title: "Visit by Dr. Jianxun (Jim) Song from Texas A&M University",
      excerpt: "Honoured to host Dr. Jianxun Song, R.L. Bricker Endowed Professor from Texas A&M University, strengthening international academic collaborations.",
      content: "We were honoured to host Dr. Jianxun (Jim) Song, PhD, R.L. Bricker Endowed Professor from Texas A&M University, during his recent visit to the Central University of South Bihar (CUSB). Having worked together during my time in the U.S., it was a privilege to reconnect and reflect on our shared research experiences and collaborative projects. Dr. Song's visit was not only a reunion of academic minds but also a celebration of cross-cultural exchange. During his time at CUSB, I had the pleasure of giving him a tour of our campus and introducing him to the vibrant and diverse culture of India.",
      date: "2025-01-28",
      author: "Prof. Rizwanul Haque",
      type: "visit",
      media: {
        type: "gallery",
        images: [
          "https://i.postimg.cc/NKRFGJxR/image1.jpg",
          "https://i.postimg.cc/7CD653Bd/image2.jpg",
          "https://i.postimg.cc/yg88PVCT/image3.jpg"
        ],
        videos: [
          "https://1drv.ms/v/c/88f158d94a1c365f/Ebk3--sP3alNpJUOy1qbsZ8B8K1Sh6snOV3I20D765KLAg?e=NIiuje"
        ],
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
      },
      location: "Central University of South Bihar",
      attendees: 50,
      views: 195,
      likes: 28,
      comments: 14,
      tags: ["International Collaboration", "Texas A&M", "Campus Visit", "Academic Exchange"]
    },
    {
      id: 7,
      title: "DST-FIST Project Presentation at IISER Pune",
      excerpt: "Historic milestone as CUSB Biotechnology Department becomes the first to receive DST-FIST funding, presented and defended at IISER Pune.",
      content: "I recently visited IISER, Pune to present and defend the DST-FIST project on behalf of the Department of Biotechnology, Central University of South Bihar (CUSB). This visit marked a significant milestone, as our department is the first at CUSB to receive DST-FIST funding. It was a proud moment to represent our institution and highlight the progress, research potential, and vision of the department. The experience at IISER was both professionally rewarding and inspiring, with insightful discussions on infrastructure development, research strengthening, and the future roadmap for biotechnology education.",
      date: "2025-01-15",
      author: "Prof. Rizwanul Haque",
      type: "presentation",
      media: {
        type: "gallery",
        images: [
          "https://i.postimg.cc/S2xcMFZB/image1.jpg",
          "https://i.postimg.cc/5YKL57T6/image2.jpg",
          "https://i.postimg.cc/8s3LjYLY/image3.jpg",
          "https://i.postimg.cc/njW99s9m/image4.jpg"
        ],
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
      },
      location: "IISER Pune",
      attendees: 25,
      views: 167,
      likes: 22,
      comments: 9,
      tags: ["DST-FIST", "IISER Pune", "Research Funding", "Biotechnology"]
    }
  ]);

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
      case 'conference': return Users;
      case 'event': return Presentation;
      case 'visit': return MapPin;
      case 'presentation': return BookOpen;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'ceremony': return 'from-purple-500 to-pink-500';
      case 'conference': return 'from-blue-500 to-indigo-500';
      case 'event': return 'from-green-500 to-teal-500';
      case 'visit': return 'from-orange-500 to-red-500';
      case 'presentation': return 'from-cyan-500 to-blue-500';
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

  const handleMediaClick = (post: any) => {
    if (post.media.type === 'video' && post.media.url) {
      window.open(post.media.url, '_blank');
    } else if (post.media.type === 'gallery' && post.media.videos && post.media.videos.length > 0) {
      window.open(post.media.videos[0], '_blank');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Academic <span className="text-blue-300">Chronicles</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Journey through our academic milestones, ceremonies, and collaborative experiences through rich visual storytelling.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Video className="w-5 h-5 text-red-400" />
              <span>Video Documentation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5 text-green-400" />
              <span>Photo Galleries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Live Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    {(post.media.type === 'video' || (post.media.type === 'gallery' && post.media.videos)) && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handleMediaClick(post)}
                      >
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
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      {post.content}
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
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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
