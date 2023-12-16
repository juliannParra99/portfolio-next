import Image from 'next/image'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/project-section/ProjectsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
