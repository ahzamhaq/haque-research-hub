
import { useState } from "react";
import { Play, Camera } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface MediaGalleryProps {
  post: {
    title: string;
    media: {
      type: 'video' | 'gallery' | 'image';
      url?: string;
      images?: string[];
      videos?: string[];
    };
  };
}

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
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        
        {post.media.videos && post.media.videos.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Related Videos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.media.videos.map((video: string, index: number) => (
                <div key={index} className="relative">
                  <div 
                    className="bg-gray-100 h-32 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => window.open(video, '_blank')}
                  >
                    <Play className="w-8 h-8 text-gray-600" />
                    <span className="ml-2 text-sm text-gray-600">Video {index + 1}</span>
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
          className="bg-gray-100 h-80 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => window.open(post.media.url, '_blank')}
        >
          <div className="text-center">
            <Play className="w-16 h-16 text-gray-600 mx-auto mb-2" />
            <span className="text-gray-600">Click to watch video</span>
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
          className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setSelectedImage(post.media.url)}
        />
      </div>
    );
  }

  return null;
};
