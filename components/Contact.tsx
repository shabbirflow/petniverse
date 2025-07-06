"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import siteContent from "@/bigDAWG.json";
import { Fade, Slide } from "react-awesome-reveal";

const iconMap = {
  Email: Mail,
  "Call Us": Phone,
  "Visit Us": MapPin,
};

const contactArray = [
  {
    ...siteContent.contact.email,
    icon: iconMap["Email"],
  },
  {
    ...siteContent.contact.phone,
    icon: iconMap["Call Us"],
  },
  {
    ...siteContent.contact.location,
    icon: iconMap["Visit Us"],
  },
];

const socialLinks = [
  {
    icon: Facebook,
    url: siteContent.contact.facebookURL,
  },
  {
    icon: Instagram,
    url: siteContent.contact.instaURL,
  },
  {
    icon: Youtube,
    url: siteContent.contact.youtubeURL,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-200 via-white to-purple-600 py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-lg text-orange-400 font-extrabold mb-2 cursor-pointer transition-transform transform hover:scale-105">
          Contact Us
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-shadow-yellow-500 text-shadow-sm">
          Get in <span className="text-orange-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <Slide cascade damping={0.05} triggerOnce>
          {contactArray.map((info, index) => (
            <div
              key={index}
              className="card bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <info.icon className="text-primary w-6 h-6" />
                <h4 className="text-xl font-semibold text-black">{info.title}</h4>
              </div>
              <p className="text-gray-600 mb-2">{info.subtitle}</p>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                {info.linkText}
              </a>
            </div>
          ))}
          </Slide>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-6 rounded-xl bg-green-300 p-5">
          <Fade cascade damping={0.1} triggerOnce>
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <Icon className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110" />
            </a>
          ))}
          </Fade> 
        </div>
      </div>

      {/* Map + FAQ layout */}
      <div className="mt-16 max-w-6xl mx-auto md:flex md:gap-8">
        {/* FAQ Section */}
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left text-shadow-yellow-500 text-shadow-xs">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <Slide cascade damping={0.05} triggerOnce>
            {siteContent.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition cursor-pointer hover:scale-102"
              >
                <summary className="font-medium text-lg text-black">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
            </Slide>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 md:mt-0 md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left text-black text-shadow-yellow-500 text-shadow-xs">
            We're on the Map!
          </h3>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer hover:scale-105">
            <Fade triggerOnce>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.323173153776!2d73.85674211529104!3d18.520430987392246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08940b4a1b5%3A0x84d847b0f021d676!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681122444980!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </Fade>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
