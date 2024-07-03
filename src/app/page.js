"use client"
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Team from "@/components/Team";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>      <Services></Services>

      <AboutUs></AboutUs>
      <Team></Team>

      <ContactForm />
    <Footer></Footer>
    </>
  );
}
