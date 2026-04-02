
import { useState } from "react";
import Layout from "@/components/Layout";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { Loader2 } from "lucide-react";
import { useBlogPosts } from "@/hooks/useSupabaseData";

const Blog = () => {
  // Fetch posts from Supabase
  const { data: rawPosts, isLoading } = useBlogPosts();

  // Transform Supabase data to match the BlogCard expected shape
  const posts = (rawPosts ?? []).map((post: any, index: number) => ({
    id: post.id ?? index + 1,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    date: post.date,
    author: post.author,
    type: post.type,
    media: post.media ?? { type: "image", thumbnail: "" },
    location: post.location,
    attendees: post.attendees ?? 0,
    views: post.views ?? 0,
    likes: post.likes ?? 0,
    comments: post.comments ?? 0,
    tags: post.tags ?? [],
  }));

  if (isLoading) {
    return (
      <Layout>
        <BlogHero />
        <div className="py-32 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
          <p className="text-gray-500 text-lg">Loading blog posts...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BlogHero />

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Events & Ceremonies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our academic journey through immersive visual documentation of ceremonies, meetings, and milestone events.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg">No blog posts yet. Add some from the admin panel.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
