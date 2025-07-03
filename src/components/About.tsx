
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Award, Users, TrendingUp, FileCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Od roku 1991",
    description: "Více než 30 let zkušeností v oblasti výroby a velkoobchodu"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Kvalitní produkty",
    description: "Dodáváme pouze výrobky nejvyšší kvality od osvědčených výrobců"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Odborné poradenství",
    description: "Naši specialisté vám pomohou s výběrem optimálního řešení pro vaše potřeby"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Komplexní sortiment",
    description: "Úhelníky, ochranné hrany, rámy, dutinky, trubice a EKO palety"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Spolehlivé dodávky",
    description: "Zajišťujeme spolehlivé dodávky našeho sortimentu a vzorky na vyžádání"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Mezinárodní spolupráce",
    description: "Spolupracujeme s partnery ze Slovenska, Polska, Rakouska, Slovinska, Běloruska, Ukrajiny a Ruska"
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
                Jsme specializovaná společnost s více než 30letou tradicí v oblasti distribuce a velkoobchodu obalových materiálů.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-odra-dark-gray/70 mb-4">
                Naše společnost působí na trhu od roku 1991 a specializuje se na distribuci a velkoobchod obalových materiálů. Papírové obalové materiály se řadí mezi prvky fixačních a obalových materiálů vyznačující se vysokou pevností a odolností proti nárazu.
              </p>
              <p className="text-odra-dark-gray/70 mb-4">
                Používaný materiál: recyklovaný papír, kartón, kraftliner, testliner. Dodáváme lepenkové proložky v gramáži 200 - 800 gr/m². Díky široké rozmanitosti vyráběných rozměrů a vysoké pevnosti nacházejí tyto obalové materiály uplatnění při ochraně zboží v logistice i v mnoha dalších průmyslových odvětví.
              </p>
              <p className="text-odra-dark-gray/70">
                Udržujeme dlouhodobé obchodní vztahy s partnery z České republiky, Slovenska, Polska, Rakouska, Slovinska, Běloruska, Ukrajiny a Ruska, což nám umožňuje nabízet rozmanitý sortiment kvalitních obalových materiálů.
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
