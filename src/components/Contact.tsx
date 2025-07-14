import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Printer, Clock } from "lucide-react";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });
  const contactItems = [{
    icon: <MapPin className="w-5 h-5" />,
    title: "Adresa",
    details: ["ODRA TRADING spol. s r.o.", "U Parku 10", "702 00 Ostrava", "Česká republika"]
  }, {
    icon: <Phone className="w-5 h-5" />,
    title: "Kontakty",
    details: ["Tel: +420 596 139 267", "Tel: +420 596 139 268", "Fax: +420 596 114 751", "Mobil: +420 602 530 075", "Mobil: +420 602 545 100"]
  }, {
    icon: <Mail className="w-5 h-5" />,
    title: "E-mail a web",
    details: ["E-mail: odra@odra.cz", "E-mail: Petr@odra.cz", "Web: www.odratrading.cz"]
  }];
  return <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-odra-blue/10 text-odra-blue text-sm font-medium mb-4">
            Kontaktujte nás
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-odra-dark-gray mb-4">
            Jak nás můžete kontaktovat
          </h2>
          <p className="text-odra-dark-gray/70 max-w-2xl mx-auto">
            Máte-li jakýkoliv dotaz ohledně našich produktů nebo potřebujete poradit s výběrem, neváhejte nás kontaktovat.
            Náš tým je připraven vám pomoci.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1
        }} className="p-6 rounded-lg bg-odra-light-gray border border-odra-blue/10 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-odra-blue/10 text-odra-blue mr-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-odra-dark-gray">
                  {item.title}
                </h3>
              </div>
              <div className="pl-13">
                {item.details.map((detail, i) => <p key={i} className="text-odra-dark-gray/70 mb-1">
                    {detail}
                  </p>)}
              </div>
            </motion.div>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.9534394434977!2d18.234832115726436!3d49.82986797939516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e315c3faca2b%3A0x1f8f1f8f1f8f1f8f!2sU%20Parku%2010%2C%20702%2000%20Ostrava%2C%20Czech%20Republic!5e0!3m2!1scs!2scz!4v1620928416972!5m2!1scs!2scz" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" title="Mapa sídla společnosti - U Parku 10, Ostrava"></iframe>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;