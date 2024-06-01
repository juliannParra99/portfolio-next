import Image from 'next/image'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/project-section/ProjectsSection';
import EmailSection from  '@/components/contact-section/EmailSection';
import Footer from '@/components/Footer'
import Experience from "@/components/experience-section/Experience"
import ChatPage from './@chat/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <EmailSection />
        <ChatPage />
      </div>
      <Footer />
    </main>
  )
}
