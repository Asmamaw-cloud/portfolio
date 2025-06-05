"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiUpwork } from "react-icons/si"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Asmamaw Kassahun
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-medium">Full-Stack Developer</p>
            <p className="text-lg text-gray-400 max-w-2xl">
              Computer Science graduated passionate about building secure, scalable web applications and exploring
              cybersecurity. I create digital solutions that make a difference.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/Asmamaw-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/asmamawkassahun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="https://x.com/AsmamawKassahu4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Twitter size={24} className="text-white" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0175e884586c28ac2d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <SiUpwork size={24} className="text-white" />
          
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 p-2">
                <Image
                  src={"/asmamaw.jpg"}
                  alt="Asmamaw Kassahun"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
