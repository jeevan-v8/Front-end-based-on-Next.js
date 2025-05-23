import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MessagingSection from "@/components/messaging-section"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import ProudSection from "@/components/proud"
import FeaturesSection from "@/components/features"
import BlogSection from "@/components/blog"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MessagingSection />
      <FeaturesSection/>
      <Toaster />
      <BlogSection/>
      <ProudSection/>
      <Footer/>
      <SpeedInsights/>
    </main>
  )
}
