// app/page.tsx or app/page.jsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Dogs from "@/components/Dogs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import stuff from "@/bigDAWG.json";
import { Bounce } from "react-awesome-reveal";

export default function Home() {
  return (
    <main className="scroll-smooth bg-blue-100">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="dogs">
        <Dogs />
      </section>
      {/* <section id="about"><About /></section> */}
      {/*         {
            "name": "About",
            "href": "#about",
            "icon": "info"
        }, */}
      <section id="contact">
        <Contact />
      </section>

      <a
        href={`https://wa.me/${stuff.contact.whatsappNumber}`} // <-- Replace with your number (use 91 for India)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-4 shadow-lg hover:bg-green-600 transition-colors"
      >
        <Bounce>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-6 w-6"
          >
            <path d="M16.003 3.003c-7.168 0-13 5.832-13 13 0 2.296.606 4.548 1.748 6.526L3 29l6.623-1.712c1.905 1.04 4.053 1.587 6.38 1.587h.001c7.168 0 13-5.832 13-13s-5.832-13-13-13zm0 23.998c-1.936 0-3.841-.514-5.501-1.488l-.393-.23-3.932 1.017 1.05-3.833-.256-.396a10.904 10.904 0 01-1.71-5.886c0-6.075 4.944-11.02 11.02-11.02s11.02 4.944 11.02 11.02-4.944 11.02-11.02 11.02zm6.152-8.136c-.337-.168-1.993-.983-2.303-1.094-.31-.112-.536-.168-.761.169-.225.337-.872 1.094-1.069 1.319-.197.225-.394.253-.731.084-.337-.168-1.423-.525-2.71-1.674-1.001-.892-1.677-1.99-1.874-2.326-.196-.337-.021-.519.147-.687.151-.15.337-.394.505-.59.169-.197.225-.337.337-.562.112-.225.056-.422-.028-.59-.084-.168-.761-1.835-1.042-2.514-.275-.663-.556-.575-.761-.585l-.649-.012c-.225 0-.59.084-.898.394s-1.18 1.152-1.18 2.809 1.208 3.258 1.377 3.486c.169.225 2.38 3.63 5.768 5.088.807.348 1.438.556 1.928.712.81.258 1.547.221 2.13.134.65-.096 1.993-.814 2.276-1.6.281-.787.281-1.461.197-1.6-.084-.14-.309-.225-.646-.393z" />
          </svg>
        </Bounce>
      </a>
    </main>
  );
}
