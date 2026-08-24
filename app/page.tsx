import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import ResumeCTA from "@/components/ResumeCTA";
import { site, socialLinks } from "@/data/portfolio";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Business Information Systems Undergraduate",
  url: site.url,
  email: `mailto:${socialLinks.email}`,
  sameAs: [socialLinks.linkedin, socialLinks.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <TechTicker />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Leadership />
      <Contact />
      <ResumeCTA />
    </>
  );
}
