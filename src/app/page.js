"use client";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Team from "@/components/Team";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />      <Services id="services" />

      <AboutUs />
      <Team />      <ContactForm/>

      <Footer />
    </>
  );
}
