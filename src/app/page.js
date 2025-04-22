
import Home from "../components/Home";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import ContactSection from "../components/ContactSection";
import Testimonials from "@/components/Testimonials";
import GetStarted from "@/components/GetStarted";
import ShowCase from "@/components/ShowCase";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import Parallax from "@/components/atoms/Parallax";
import BackToTopButton from "@/components/atoms/BackToTopButton";

export default function Page() {
  return (
    <>
      {/* Parallax hero */}
 
      {/* Rest of your site sections */}
      <section id="home"><Home /></section>
      <section id="hero"><HeroSection /></section>
      <section id="features"><Features /></section>
      <section id="contact"><ContactSection /></section>

      <Testimonials />
      <GetStarted />
      <ShowCase />
      <TeamSection />

      <section id="pricing"><PricingSection /></section>
      <Footer />
      <Parallax />
      <BackToTopButton/>

    </>
  );
}
