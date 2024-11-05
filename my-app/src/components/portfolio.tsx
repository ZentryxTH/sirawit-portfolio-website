'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, Code, Server, Users, Award, BookOpen, Youtube} from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary"></h1>
          <nav>
            <ul className="flex space-x-4">
              {["About", "Skills", "Activities", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-foreground hover:text-primary transition-colors relative group"
                  >
                    {item}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-primary">Hi, I&#39;m Sirawit Bunnam</h2>
              <p className="text-xl mb-4 text-foreground/80">An aspiring Full-stack Developer with a passion for learning, contributing to the tech community.</p>
              <div className="flex space-x-4">
                <Button asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />Contact Me
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-pulse"></div>
                <Image 
                  src="/IMG_1198.jpg" 
                  alt="Sirawit Bunnam" 
                  className="absolute inset-2 rounded-full object-cover"
                  width={300} 
                  height={300} 
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Skills & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Web Technologies", icon: Code, items: ["HTML & CSS", "JavaScript", "React Basics", "Responsive Design"] },
              { title: "Backend Exploration", icon: Server, items: ["Node.js Fundamentals", "API Concepts", "Database Basics", "Server-Side Logic"] },
              { title: "Learning", icon: BookOpen, items: ["Online Courses", "Coding Bootcamps", "Tech Workshops", "Self-Study"] },
              { title: "Soft Skills", icon: Users, items: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"] }
            ].map((skill, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="flex items-center text-primary">
                    <skill.icon className="inline-block mr-2 h-5 w-5" />
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc list-inside text-foreground/80">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="activities" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Activities & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Blockathon 2023",
                icon: Award,
                description: "Hackathon from Bitkub Acdemy",
                content: "Between 18 December to 20 December 2023, I had to compete in event call Blockathon, so it was the first hackathon I had done.",
                action: "View Certificate",
                href: "https://app.bitkubnext.com/nft/0xA8dD972066963DAf993D32962eC90d90CA66887E/3276812"
              },
              {
                title: "Microsoft ASEAN AI for Accessibility Hackathon 2024",
                icon: Award,
                description: "Hackathon from Microsoft",
                content: "I have gone to Compete with my team name AI am number one, to compete the hackathon on April 2024 but I didn't won this Competition ;-;. I have learnt a lot of info about AI and machine learning and Accessibility innovation.",
                action: "View Certificate",
                href: "/1720778128946.jpg"
              },
              {
                title: "Tao Kae Noi Event 2023",
                icon: Users,
                description: "Mahidol Startup Community Engagement",
                content: "In November 2023, I had joined in Tao kae noi event at Mahidol University. It's an event about startup. I had learned how to make the startup and business models.",
                action: "View Event",
                href: "https://www.facebook.com/share/p/Akghhfvw3cD7GrSb/"
              }
            ].map((activity, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
                  <CardTitle className="flex items-center text-primary">
                    <activity.icon className="inline-block mr-2 h-5 w-5" />
                    {activity.title}
                  </CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-4 text-foreground/80">{activity.content}</p>
                  <Button variant="outline" asChild>
                    <a href={activity.href} target="_blank" rel="noopener noreferrer">
                      {activity.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
              ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Get in Touch</h2>
          <Card className="overflow-hidden">
            <CardContent className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
              <p className="text-center mb-6 text-foreground/80">I am always learn everything, collaborate on new projects, and connect with fellow developers. Feel free to reach out!</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Mail, label: "Email Me", color: "bg-blue-500 hover:bg-blue-600", href: "mailto:zentryx.official@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", color: "bg-blue-700 hover:bg-blue-800", href: "https://www.linkedin.com/in/sirawit-bunnam-356b6a2a1/" },
                  { icon: Github, label: "GitHub", color: "bg-gray-800 hover:bg-gray-900", href: "https://github.com/ZentryxTH"},
                  { icon: Youtube, label: "YouTube", color: "bg-red-600 hover:bg-red-700", href: "https://www.youtube.com/@zentryx_official" }
                ].map((contact, index) => (
                  <Button key={index} asChild className={`text-white ${contact.color}`}>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <contact.icon className="mr-2 h-4 w-4" /> {contact.label}
                    </a>
                </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sirawit Bunnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}