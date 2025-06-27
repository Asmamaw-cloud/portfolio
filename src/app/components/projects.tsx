"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Equilex Platform",
      description:
        "A modern web platform for legal services with user authentication, document management, and real-time communication features.",
      image: "/equilex.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/Asmamaw-cloud/equilex",
      liveUrl: "https://equilex.vercel.app/",
      featured: true,
    },
    {
  title: "Library Management System",
  description:
    "A desktop-based library management system developed using Java Swing and MySQL. It supports book cataloging, member registration, borrowing/return tracking, and admin controls through a user-friendly GUI.",
  image: "/library.jpeg", // Make sure this image exists in /public
  technologies: ["Java", "Swing", "MySQL", "JDBC"],
  githubUrl:
    "https://github.com/Asmamaw-cloud/A-complete-mini-library-management-system",
  liveUrl: "#", // Desktop app – no live URL needed
  featured: true,
},

    
    {
      title: "Number Guessing Game",
      description:
        "An interactive web-based guessing game with multiple difficulty levels, score tracking, and responsive design.",
      image: "/guess.webp",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      githubUrl: "https://github.com/Asmamaw-cloud/Guess-a-number",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "video-chat",
      description:
        "A real-time video chat application enabling peer-to-peer communication using WebRTC, with signaling handled via Socket.IO and a responsive frontend built with HTML, CSS, and JavaScript.",
      image: "/friends-video-calling.avif", // Make sure this image exists in your public folder
      technologies: [
        "WebRTC",
        "Socket.IO",
        "Node.js",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      githubUrl: "https://github.com/Asmamaw-cloud/video-chat",
      liveUrl: "#", // Replace with actual deployed link if available
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-700 text-purple-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work or discuss a project?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
