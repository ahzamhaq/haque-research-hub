
import { useState } from "react";
import Layout from "@/components/Layout";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";

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
        type: "gallery" as const,
        images: [
          "https://i.postimg.cc/yWtJYHsJ/image1.jpg",
          "https://i.postimg.cc/8FzkmKTQ/image2.jpg"
        ],
        videos: [
          "https://1drv.ms/v/c/88f158d94a1c365f/EZ9sJtn1kfVKq6ZKjNszDaoBSbn4luRX6T0hawFiaQRV6g?e=PkEMXS",
          "https://1drv.ms/v/c/88f158d94a1c365f/Eey8oECX9EJCiR532zOdRBwBQkWxN_RHtrEnJvFDV36XMQ?e=egZf4a"
        ],
        thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format&q=80"
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
        type: "video" as const,
        url: "https://1drv.ms/v/c/88f158d94a1c365f/EfSKdyRXp3xBhwnHhw35troB6PNdl94-uoazsFO3rcETEQ?e=N8SOWQ",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&auto=format&q=80"
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
        type: "image" as const,
        url: "https://i.postimg.cc/8jvxxhZF/image.jpg",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format&q=80"
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
        type: "gallery" as const,
        images: [
          "https://i.postimg.cc/2b2BkbTh/image1.jpg",
          "https://i.postimg.cc/v1v4hgJk/image2.jpg",
          "https://i.postimg.cc/rzsDGpQZ/image3.jpg"
        ],
        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80"
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
        type: "video" as const,
        url: "https://1drv.ms/v/c/88f158d94a1c365f/Ebqpm42FAtFIp7ioyzgd7IgBIepH9QX-m0MNYeFPdqIYhQ?e=ckab8r",
        thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&auto=format&q=80"
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
        type: "gallery" as const,
        images: [
          "https://i.postimg.cc/NKRFGJxR/image1.jpg",
          "https://i.postimg.cc/7CD653Bd/image2.jpg",
          "https://i.postimg.cc/yg88PVCT/image3.jpg"
        ],
        videos: [
          "https://1drv.ms/v/c/88f158d94a1c365f/Ebk3--sP3alNpJUOy1qbsZ8B8K1Sh6snOV3I20D765KLAg?e=NIiuje"
        ],
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&auto=format&q=80"
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
        type: "gallery" as const,
        images: [
          "https://i.postimg.cc/S2xcMFZB/image1.jpg",
          "https://i.postimg.cc/5YKL57T6/image2.jpg",
          "https://i.postimg.cc/8s3LjYLY/image3.jpg",
          "https://i.postimg.cc/njW99s9m/image4.jpg"
        ],
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format&q=80"
      },
      location: "IISER Pune",
      attendees: 25,
      views: 167,
      likes: 22,
      comments: 9,
      tags: ["DST-FIST", "IISER Pune", "Research Funding", "Biotechnology"]
    }
  ]);

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

          <div className="grid grid-cols-1 gap-12">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <BlogNewsletter />
    </Layout>
  );
};

export default Blog;
