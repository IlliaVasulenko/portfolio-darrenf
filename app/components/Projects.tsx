"use client";

import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Conversable",
      description:
        "Conversable is an AI-based chatbot and conversational commerce platform that enables businesses to automate customer interactions through messaging and voice channels. It helps companies streamline customer service, ordering, and engagement by providing intelligent, natural-language conversations across multiple platforms.",
      image: "pic1.png",
      category: "web",
      technologies: ["Firebase", "Stripe", "AWS", "Vercel", "OpenGraph"],
      // video: "https://drive.google.com/file/d/15Q6l2QwNA0jizkqTdnAKALB9FDt9uDOi/view",
      liveUrl: "http://conversable.com/",
      githubUrl: "http://conversable.com/",
    },
    {
      id: 2,
      title: "Live Chat AI",
      description:
        "an AI-powered chatbot platform designed to automate customer support and enhance user engagement.The platform allows businesses to train chatbots using their own data sources, such as websites, PDFs, and Q&A documents, ensuring personalized and context-aware interactions.",
      image: "pic2.png",
      category: "web",
      technologies: ["React.js", "Node.js", "Django", "TensorFlow"],
      // video: "https://drive.google.com/file/d/1Q0eE7dwnpVq9wtqQ0IbcDuVVm0OpAMWd/view",
      liveUrl: "https://livechatai.com/",
      githubUrl: "https://livechatai.com/",
    },
    {
      id: 3,
      title: "Glia",
      description:
        "AI-powered customer service platform enabling seamless voice, video, and messaging interactions with real-time agent support",
      image: "pic3.png",
      category: "web",
      technologies: ["PyTorch", "React.js", "TypeScript", "WebRTC", "Node.js"],
      // video: "https://drive.google.com/file/d/1Q0eE7dwnpVq9wtqQ0IbcDuVVm0OpAMWd/view",
      liveUrl: "https://www.glia.com/",
      githubUrl: "https://www.glia.com/",
    },
    
    {
      id: 4,
      title: "Shop panerabread",
      description:
        "this is Panera Breads online store offering branded merchandise like apparel, kitchenware, and novelty items.",
      image: "pic4.png",
      category: "e-commerce",
      technologies: ["Shopify", "Vue.js", "Express", "Payment Integration"],
      video:
        "https://drive.google.com/file/d/1QBfzxb1HtNLSOqoSx1F93i7MDCKCDAXk/view",
      liveUrl: "https://shop.panerabread.com/",
      githubUrl: "https://shop.panerabread.com/",
    },

    {
      id: 5,
      title: "WeTravel",
      description:
        "WeTravel is a platform for organizing group travel, enabling trip creation, payment collection, and communication with participants.",
      image: "pic5.png",
      category: "travel",
      technologies: ["Vue", "Nuxt", "Python", "Node", "Strip/Paypal API"],
      video:
        "https://drive.google.com/file/d/1qT8_Xa5q-J7RkQOChMLsfLbIPJ2WTuAv/view",
      liveUrl: "https://www.wetravel.com/",
      githubUrl: "https://www.wetravel.com/",
    },
    {
      id: 6,
      title: "E-Commence : Maplin",
      description:
        "Maplin is a UK-based retailer that specializes in electronics and technology products. It has a long history and was originally a chain of high street stores, but it shifted its focus to an online-only presence in recent years.",
      image: "pic6.png",
      category: "e-commerce",
      technologies: ["Vue", "Nuxt", "Python", "Node"],
      // video: "https://drive.google.com/file/d/1TnB6jG0HF5Bx2lMqGsXwXZFlwfU2ukfS/view",
      liveUrl: "https://www.maplin.co.uk/",
      githubUrl: "https://www.maplin.co.uk/",
    },
    {
      id: 7,
      title: "AI : Maplin",
      description:
        "Maplin is a UK-based retailer that specializes in electronics and technology products. It has a long history and was originally a chain of high street stores, but it shifted its focus to an online-only presence in recent years.",
      image: "pic8.png",
      category: "e-commerce",
      technologies: ["Vue", "Nuxt", "Python", "Node"],
      // video: "https://drive.google.com/file/d/1TnB6jG0HF5Bx2lMqGsXwXZFlwfU2ukfS/view",
      liveUrl: "https://www.maplin.co.uk/",
      githubUrl: "https://www.maplin.co.uk/",
    },
    {
      id: 8,
      title: "AI : Netomi",
      description:
        "Netomi is an AI-driven customer experience platform that automates support across chat, email, and voice. It uses generative AI and no-code tools to create smart, brand-safe virtual agents, helping enterprises improve response speed and reduce support costs.",
      image: "pic7.png",
      category: "web",
      technologies: ["Wordpress", "MySQL", "Core.js", "AWS"],
      // video: "https://drive.google.com/file/d/1TnB6jG0HF5Bx2lMqGsXwXZFlwfU2ukfS/view",
      liveUrl: "https://www.netomi.com/",
      githubUrl: "https://www.netomi.com/",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "AI" },
    { id: "e-commerce", label: "E-commerce" },
    { id: "travel", label: "Travel " },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of academic and personal projects demonstrating my
            skills in web and e-commerce development, AI integration, and
            user-focused solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg text-center font-medium hover:border-gray-400 dark:hover:border-gray-400 transition-colors duration-300"
                  >
                    <i className="ri-github-line mr-2"></i>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
