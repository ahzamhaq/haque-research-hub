
import { Calendar, Eye, Heart, MessageCircle, Share2, MapPin, Users, Award, Presentation, BookOpen, Play, Camera, Image, Link, Twitter, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MediaGallery } from "./MediaGallery";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  type: string;
  media: {
    type: 'video' | 'gallery' | 'image';
    url?: string;
    images?: string[];
    videos?: string[];
    videoCover?: string;
    videoCovers?: string[];
    thumbnail?: string;
  };
  location: string;
  attendees: number;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

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

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const BlogCard = ({ post }: BlogCardProps) => {
  const { toast } = useToast();
  const EventIcon = getEventIcon(post.type);
  const MediaIcon = getMediaIcon(post.media.type);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${post.title} - ${post.excerpt}`;
    
    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
        });
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Media Section */}
        <div className="relative">
          <div className="sticky top-8">
            {/* Event Type Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className={`flex items-center space-x-2 bg-gradient-to-r ${getEventColor(post.type)} text-white rounded-full px-4 py-2 shadow-lg`}>
                <EventIcon className="w-4 h-4" />
                <span className="text-sm font-semibold capitalize">{post.type}</span>
              </div>
            </div>

            {/* Media Type Indicator */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                <MediaIcon className={`w-5 h-5 ${post.media.type === 'video' ? 'text-red-600' : post.media.type === 'gallery' ? 'text-purple-600' : 'text-blue-600'}`} />
              </div>
            </div>

            <MediaGallery post={post} />
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 text-sm mb-4 text-gray-500">
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

          <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            {post.excerpt}
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
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
          
          <div className="flex justify-end pt-6 border-t border-gray-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-600">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleShare('copy')}>
                  <Link className="w-4 h-4 mr-2" />
                  Copy Link
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Share on Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4 mr-2" />
                  Share on Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                  <Users className="w-4 h-4 mr-2" />
                  Share on LinkedIn
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
