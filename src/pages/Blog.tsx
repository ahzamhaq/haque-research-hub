
import { useState } from "react";
import { Calendar, Eye, Heart, MessageCircle, Share2, Play, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Annual Biotechnology Research Symposium 2024",
      excerpt: "Highlights from our recent symposium featuring groundbreaking research presentations and collaborative discussions.",
      date: "2024-06-15",
      author: "Prof. Rizwanul Haque",
      type: "photo",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      views: 245,
      likes: 32,
      comments: 8,
      tags: ["Research", "Symposium", "Biotechnology"]
    },
    {
      id: 2,
      title: "ICMR Funded Project Meeting - iPSC Research Update",
      excerpt: "Progress review meeting for our ICMR funded project on iPSC-derived T cells for hepatocellular carcinoma treatment.",
      date: "2024-06-10",
      author: "Prof. Rizwanul Haque",
      type: "video",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      views: 189,
      likes: 24,
      comments: 5,
      tags: ["ICMR", "iPSC", "Cancer Research"]
    },
    {
      id: 3,
      title: "International Collaboration Meeting - Penn State Alumni Network",
      excerpt: "Reconnecting with colleagues from Penn State College of Medicine to discuss future collaborative opportunities.",
      date: "2024-06-05",
      author: "Prof. Rizwanul Haque",
      type: "photo",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      views: 156,
      likes: 18,
      comments: 12,
      tags: ["Collaboration", "Penn State", "Alumni"]
    },
    {
      id: 4,
      title: "PhD Students Research Presentation Session",
      excerpt: "Monthly research presentation session where our PhD students share their latest findings and methodologies.",
      date: "2024-05-28",
      author: "Prof. Rizwanul Haque",
      type: "video",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      views: 298,
      likes: 41,
      comments: 15,
      tags: ["PhD Students", "Presentations", "Research"]
    }
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Research Blog
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Stay updated with our latest meetings, research progress, and collaborative endeavors in biotechnology and stem cell research.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border-0 bg-white">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      {post.type === 'video' ? (
                        <Play className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Image className="w-4 h-4 text-green-600" />
                      )}
                      <span className="text-sm font-medium capitalize">{post.type}</span>
                    </div>
                  </div>
                  {post.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-blue-600 fill-current" />
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-600">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to get notified about new blog posts and research updates.
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
