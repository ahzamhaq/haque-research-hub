
import { Video, Camera, Award } from "lucide-react";

export const BlogHero = () => {
  return (
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
  );
};
