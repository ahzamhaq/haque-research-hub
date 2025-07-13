
import { Button } from "@/components/ui/button";

export const BlogNewsletter = () => {
  return (
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
  );
};
