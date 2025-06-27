// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Send } from "lucide-react"

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Reset form
//     setFormData({ name: "", email: "", message: "" })
//     setIsSubmitting(false)

//     // Show success message (you can implement a toast notification here)
//     alert("Message sent successfully!")
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email",
//       value: "akassahun2023@gmail.com",
//       href: "mailto:akassahun2023@gmail.com",
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "Phone",
//       value: "+251 962 808 100",
//       href: "tel:+251962808100",
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Location",
//       value: "Ethiopia",
//       href: "#",
//     },
//   ]

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Get In{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">Let's discuss your next project or just say hello</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
//               <p className="text-gray-400 text-lg leading-relaxed mb-8">
//                 I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
//                 question or just want to say hi, I'll try my best to get back to you!
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-center space-x-4">
//                   <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">{info.icon}</div>
//                   <div>
//                     <h4 className="text-white font-medium">{info.title}</h4>
//                     <a href={info.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
//                       {info.value}
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className="bg-slate-800/50 border-purple-500/20">
//             <CardHeader>
//               <CardTitle className="text-2xl text-white">Send Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <Input
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
//                     />
//                   </div>
//                   <div>
//                     <Input
//                       name="email"
//                       type="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Textarea
//                     name="message"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact






"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {toast} from "sonner"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Reset form and show success state
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitted(true)

        // Show success toast
        toast(
           "Message sent successfully! 🎉",
        )

        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      // Show error toast
      toast(
       "Failed to send message, Please try again later.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "akassahun2023@gmail.com",
      href: "mailto:akassahun2023@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+251 962 808 100",
      href: "tel:+251962808100",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "https://maps.google.com/?q=Ethiopia",
    },
  ]

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          {/* <p className="text-xl text-gray-400 max-w-3xl mx-auto">Let's discuss your next project or just say hello</p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Collaborate</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm actively seeking new opportunities to contribute my skills to innovative projects and dynamic teams. Whether you're looking for a dedicated developer, have an exciting project in mind, or want to discuss potential collaboration, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Success indicator */}
            {isSubmitted && (
              <div className="flex items-center space-x-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-green-400 font-medium">Message sent successfully!</p>
                  <p className="text-green-300 text-sm">Check your email for confirmation.</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, ask a question, or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none disabled:opacity-50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By sending this message, you agree to be contacted via email.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
