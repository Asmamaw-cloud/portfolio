"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 100 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 100 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Python", level: 70 },
        { name: "Java", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Database Design", level: 90 },
      ],
    },
    {
      title: "Networking & Security",
      skills: [
        { name: "Cisco Packet Tracer", level: 88 },
        { name: "Network Design", level: 85 },
        { name: "DHCP/DNS/SMTP", level: 82 },
        { name: "Subnetting & VLANs", level: 80 },
        { name: "Router Configuration", level: 78 },
        { name: "Cybersecurity", level: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Linux/CLI", level: 80 },
        { name: "CI/CD", level: 68 },
        { name: "Monitoring", level: 65 },
      ],
    },
  ]

  const certifications = [
    "Network Simulation & Design",
    "Full-Stack Development",
    "Modern Web Technologies",
    "Security Best Practices",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, network engineering, and cybersecurity
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center border-b border-purple-500/20 pb-3">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-1000 ease-out hover:from-purple-500 hover:to-pink-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Areas of Specialization</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-200 hover:border-purple-400 hover:bg-purple-600/30 transition-all duration-300 px-4 py-2 text-sm"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300">Project Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
