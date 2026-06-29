import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import PartnerStrip from "../components/home/PartnerStrip";
import AboutSection from "../components/home/AboutSection";
import ImpactSection from "../components/home/ImpactSection";
import ProjectsSection from "../components/home/ProjectsSection";
import NewsSection from "../components/home/NewsSection";
import GallerySection from "../components/home/GallerySection";
import MembershipCTA from "../components/home/MembershipCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PartnerStrip />
      <AboutSection />
      <ImpactSection />
      <ProjectsSection />
      <NewsSection />
      <GallerySection />
      <MembershipCTA />
      <Footer />
    </>
  );
}