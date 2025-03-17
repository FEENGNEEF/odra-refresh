
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Award, Users, TrendingUp, FileCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Od roku 1994",
    description: "Více než 25 let zkušeností v oblasti průmyslových armatur a čerpadel"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certifikované produkty",
    description: "Dodáváme pouze certifikované výrobky dle EN, API, ANSI a dalších standardů"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Odborné poradenství",
    description: "Naši specialisté vám pomohou s výběrem optimálního řešení pro vaši aplikaci"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Komplexní řešení",
    description: "Od návrhu až po dodávku kompletních armaturních sestav na klíč"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Záruční i pozáruční servis",
    description: "Zajišťujeme kompletní servis a dodávky náhradních dílů"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Mezinárodní spolupráce",
    description: "Spolupracujeme s předními světovými výrobci a dodáváme po celé Evropě"
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-24 bg-odra-light-gray" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-odra-blue/10 text-odra-blue text-sm font-medium mb-4">
                O společnosti
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-odra-dark-gray mb-4">
                ODRA TRADING
              </h2>
              <p className="text-odra-dark-gray/70">
                Jsme specializovaná společnost s více než 25letou tradicí v oblasti dodávek průmyslových armatur a čerpadel pro různá průmyslová odvětví.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-odra-dark-gray/70 mb-4">
                Naše společnost vznikla v roce 1994 jako specializovaná firma na dodávky průmyslových armatur. Od té doby jsme rozšířili náš sortiment o čerpadla a příslušenství a stali jsme se spolehlivým partnerem pro mnoho průmyslových podniků v České republice i v zahraničí.
              </p>
              <p className="text-odra-dark-gray/70 mb-4">
                Zaměřujeme se na dodávky armatur, čerpadel a jejich příslušenství pro energetiku, teplárenství, plynárenství, vodárenství, chemii a petrochemii, papírenský, farmaceutický, potravinářský a další průmysl.
              </p>
              <p className="text-odra-dark-gray/70">
                Při plnění požadavků zákazníků klademe důraz na vysokou kvalitu produktů, dodržování termínů a příznivou cenu. Díky tomu se nám daří udržovat dlouhodobé vztahy s našimi zákazníky.
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-6 py-3 bg-odra-blue text-white rounded-md font-medium transition-all hover:shadow-lg hover:shadow-odra-blue/20"
            >
              Kontaktujte nás
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-lg bg-white shadow-md border border-odra-blue/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-odra-blue/10 text-odra-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-odra-dark-gray mb-2">
                  {feature.title}
                </h3>
                <p className="text-odra-dark-gray/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
