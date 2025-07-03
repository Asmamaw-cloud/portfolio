"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, Network, Shield, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { SiUpwork } from "react-icons/si"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const specialties = [
    { icon: <Code className="w-4 h-4" />, label: "Full-Stack Dev" },
    { icon: <Network className="w-4 h-4" />, label: "Network Engineer" },
    { icon: <Shield className="w-4 h-4" />, label: "Cybersecurity" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-purple-400 font-medium text-lg">👋 Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Asmamaw Kassahun
                </span>
              </h1>
            </div>

            {/* Specialty Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-slate-800/50 border-purple-500/30 text-purple-300 hover:border-purple-400 hover:bg-purple-600/20 transition-all duration-300 px-4 py-2 text-sm"
                >
                  {specialty.icon}
                  <span className="ml-2">{specialty.label}</span>
                </Badge>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl text-gray-200 font-semibold">
                Full-Stack Developer & Network Engineer
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Computer Science graduate specializing in building secure, scalable web applications and designing
                robust network infrastructures. I bridge the gap between software development, network engineering, and
                cybersecurity to create comprehensive digital solutions.
              </p>
            </div>

            {/* Key Skills Highlight */}
            <div className="bg-slate-800/30 rounded-lg p-4 border border-purple-500/20">
              <p className="text-sm text-gray-400 mb-2">Core Expertise:</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-purple-300">React & Next.js</span>
                <span className="text-gray-500">•</span>
                <span className="text-purple-300">Node.js & TypeScript</span>
                <span className="text-gray-500">•</span>
                <span className="text-purple-300">Cisco Networking</span>
                <span className="text-gray-500">•</span>
                <span className="text-purple-300">Network Security</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://github.com/Asmamaw-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-purple-500"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/asmamawkassahun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-purple-500"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="https://x.com/AsmamawKassahu4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-purple-500"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} className="text-white" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0175e884586c28ac2d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-purple-500"
              aria-label="Upwork Profile"
            >
              <SiUpwork size={20} className="text-white" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent hover:border-purple-500"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Connect
            </Button>
          </div>

          {/* Availability Status */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 p-2">
                <Image
                  src="/asmamaw.jpg"
                  alt="Asmamaw Kassahun - Full-Stack Developer & Network Engineer"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl animate-pulse"></div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-slate-800/80 backdrop-blur-sm rounded-full p-3 border border-purple-500/30">
              <Network className="w-6 h-6 text-purple-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-800/80 backdrop-blur-sm rounded-full p-3 border border-purple-500/30">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
