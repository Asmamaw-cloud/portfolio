"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Code, Shield, Zap } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and Next.js",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Focus",
      description: "Passionate about ethical hacking and building secure applications",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Creating fast, efficient, and user-friendly web experiences",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer dedicated to creating innovative solutions and secure digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science graduated with a deep passion for technology and innovation. My journey in software
              development has led me to explore various aspects of web development, from creating intuitive user
              interfaces to building robust backend systems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              What sets me apart is my dual focus on development and security. I believe that great applications should
              not only function well but also be secure and reliable. This perspective drives me to continuously learn
              about ethical hacking and cybersecurity best practices.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing
              knowledge with the developer community. I'm always excited to take on new challenges and collaborate on
              innovative projects.
            </p>

         <a href="/resume.pdf" download>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            </a>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">{highlight.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                      <p className="text-gray-400">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
