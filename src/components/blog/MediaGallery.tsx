
import { useState } from "react";
import { Play, Camera, ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface MediaGalleryProps {
  post: {
    title: string;
    media: {
      type: 'video' | 'gallery' | 'image';
      url?: string;
      images?: string[];
      videos?: string[];
      videoCover?: string;
      videoCovers?: string[];
    };
  };
}

const getVideoThumbnail = (videoUrl: string, index?: number, videoCovers?: string[]) => {
  if (videoCovers && videoCovers[index!]) {
    return videoCovers[index!];
  }
  // Fallback thumbnail
  return "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=450&fit=crop&auto=format&q=80";
};

export const MediaGallery = ({ post }: MediaGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (post.media.type === 'gallery' && post.media.images) {
    return (
      <div className="space-y-4">
        <Carousel className="w-full">
          <CarouselContent>
            {post.media.images.map((image: string, index: number) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img 
                    src={image}
                    alt={`${post.title} - Image ${index + 1}`}
                    className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(image)}
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        
        {post.media.videos && post.media.videos.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Related Videos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.media.videos.map((video: string, index: number) => (
                <div key={index} className="relative group">
                  <div 
                    className="relative bg-gray-900 h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                    onClick={() => window.open(video, '_blank')}
                  >
                    <img 
                      src={getVideoThumbnail(video, index, post.media.videoCovers)}
                      alt={`Video ${index + 1} thumbnail`}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-gray-900 fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-sm font-medium">Video {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (post.media.type === 'video' && post.media.url) {
    return (
      <div className="space-y-4">
        <div 
          className="relative bg-gray-900 h-80 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg group"
          onClick={() => window.open(post.media.url, '_blank')}
        >
          <img 
            src={post.media.videoCover || getVideoThumbnail(post.media.url!)}
            alt={`${post.title} video thumbnail`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-gray-900 fill-current" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-lg font-semibold">Click to watch video</p>
          </div>
        </div>
      </div>
    );
  }

  if (post.media.type === 'image' && post.media.url) {
    return (
      <div className="space-y-4">
        <img 
          src={post.media.url}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-lg"
          onClick={() => setSelectedImage(post.media.url)}
          loading="lazy"
        />
      </div>
    );
  }

  return null;
};
