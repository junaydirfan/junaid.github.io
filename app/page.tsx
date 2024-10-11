'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

// Define the Project interface
interface Project {
  title: string;
  description: string;
  image: string;
}

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/junaid.github.io' : '';

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const { scrollY } = useScroll()

  // Create transform values for each background element
  const yBg1 = useTransform(scrollY, [0, 1000], [0, -100])
  const yBg2 = useTransform(scrollY, [0, 1000], [0, -150])

  const projects: Project[] = [
    {
      image: "https://techvify-software.com/wp-content/uploads/2023/06/bockchain.jpg",
      title: "Blockchain Project",
      description: "A decentralized application leveraging blockchain technology.",
    },
    {
      image: "https://cdn.britannica.com/61/214561-050-1C1E4A57/fiber-optic-cables-connected-to-computer-network-server.jpg",
      title: "Networking Project",
      description: "Advanced networking solution for improved connectivity.",
    },
    {
      image: "https://www.verizon.com/about/sites/default/files/styles/webp_style/public/2023-06/vr-for-kids-1230x690.webp",
      title: "VR Experience",
      description: "Immersive virtual reality application for education and entertainment.",
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor') as HTMLElement
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden ${inter.className}`}>
      <div className="cursor"></div>
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ y: yBg1 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -70, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ y: yBg2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, -50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 70, 30, 0],
            y: [0, -100, -50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <header className="relative z-10 p-6 md:p-12">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Junaid Irfan</h1>
          <div className="flex space-x-4">
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-gray-300 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">Contact</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 md:px-12 relative z-10">
        <section id="hero" className="py-20 md:py-32 text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Software Developer
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate about creating elegant solutions through code and design
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="inline-block bg-white text-black py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              View My Work
            </button>
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-4">
                I&apos;m a passionate software developer based in Sherbrooke, QC, currently pursuing my Master&apos;s in Computer Science at Bishop&apos;s University. With a strong foundation in web development, data science, and UI/UX design, I strive to create innovative and user-friendly solutions.
              </p>
              <p className="text-lg">
                My technical skills span across various programming languages and frameworks, allowing me to tackle diverse projects and challenges. I&apos;m particularly enthusiastic about the intersection of technology and design, always aiming to deliver visually appealing and functionally robust applications.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Skills</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">Web Development</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">Data Science</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">UI/UX Design</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">Typescript</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">Python</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">NextJS</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">NestJS</li>
                <li className="bg-gray-800 rounded-full px-4 py-2 text-center hover:bg-gray-700 transition-colors">PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveProject(project)}
              >
                <div className="relative w-full h-48">
                  <Image 
                    src={project.image}
                    alt={project.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <p className="text-xl mb-8">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:JUNAID.IRFAN@HOTMAIL.COM" className="text-white hover:text-gray-300 transition-colors">
              <MailIcon size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-400 relative z-10">
        <p>&copy; 2023 Junaid Irfan. All rights reserved.</p>
      </footer>

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={() => setActiveProject(null)}>
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">{activeProject?.title}</h3>
            <div className="relative w-full h-64 mb-4">
              <Image 
                src={activeProject?.image} 
                alt={activeProject?.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded"
              />
            </div>
            <p className="text-gray-300 mb-4">{activeProject?.description}</p>
            <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors" onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 z-20">
        <button 
          onClick={() => scrollToSection('hero')}
          className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <ChevronDownIcon className="transform rotate-180" />
        </button>
      </div>
    </div>
  )
}