
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const productCategories = [
  {
    id: "hygienicke-papiry",
    name: "Hygienické papíry",
    description: "Dodáváme široký sortiment hygienických papírů pro různé účely a potřeby.",
    image: "https://images.unsplash.com/photo-1597348989645-46b190ce4918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Toaletní papír", description: "Různé druhy a kvality toaletního papíru" },
      { name: "Ubrousky", description: "Papírové ubrousky pro různé použití" },
      { name: "Utěrky", description: "Papírové utěrky pro domácnost i průmysl" },
      { name: "Kapesníčky", description: "Papírové kapesníčky v různých baleních" },
    ]
  },
  {
    id: "obalove-materialy",
    name: "Obalové materiály",
    description: "Nabízíme komplexní sortiment obalových materiálů včetně lepenkových trubic a různých druhů obalů.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Lepenkové trubice", description: "Spirálově i prostě navíjené, průměr 17-400 mm, síla stěny 1-15 mm, délka 12-6000 mm" },
      { name: "Úhelníky", description: "Běžné i flexibilní úhelníky pro ochranu hran" },
      { name: "Rámy", description: "Obalové rámy různých velikostí a provedení" },
      { name: "EKO palety", description: "Ekologické papírové palety pro skladování a přepravu" },
    ]
  },
  {
    id: "lnene-vyrobky",
    name: "Lněné výrobky",
    description: "Specializujeme se na výrobu a distribuci lněných výrobků vysoké kvality pro textilní a papírenský průmysl.",
    image: "https://images.unsplash.com/photo-1594761046268-310bfabba20f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Třená lnárská koudel", description: "Pro zpracování v textilním a papírenském průmyslu" },
      { name: "Třené lněné vlákno", description: "Kvalitní lněné vlákno pro různé zpracování" },
      { name: "Vochlované koudele", description: "Upravené lněné koudele pro další zpracování" },
      { name: "Česaný len a lněné příze", description: "Vysoce kvalitní len a příze pro textilní průmysl" },
    ]
  },
  {
    id: "zemedelska-technika",
    name: "Zemědělská technika",
    description: "Dodáváme specializovanou zemědělskou techniku pro sběr a zpracování lnu.",
    image: "https://images.unsplash.com/photo-1629214831042-41268e2026f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Technika pro sběr lnu", description: "Specializované stroje pro sklizeň lnu" },
      { name: "Zařízení pro zpracování lnu", description: "Technologie pro počáteční zpracování lnu" },
      { name: "Osivo lnu", description: "Kvalitní lněné osivo pro pěstování" },
      { name: "Příslušenství", description: "Doplňky a náhradní díly pro zemědělskou techniku" },
    ]
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="products" className="py-24 bg-white" ref={ref}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-odra-blue/10 text-odra-blue text-sm font-medium mb-4">
            Náš sortiment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-odra-dark-gray mb-4">
            Komplexní nabídka produktů
          </h2>
          <p className="text-odra-dark-gray/70 max-w-2xl mx-auto">
            Nabízíme široký sortiment hygienických papírů, obalových materiálů, lněných výrobků a zemědělské techniky od renomovaných výrobců i z vlastní produkce.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {productCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-odra-blue text-white"
                  : "bg-odra-light-gray text-odra-dark-gray hover:bg-odra-light-blue/20"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {productCategories.map((category) => (
          <div
            key={category.id}
            className={activeCategory === category.id ? "block" : "hidden"}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-odra-dark-gray mb-4">
                    {category.name}
                  </h3>
                  <p className="text-odra-dark-gray/70">
                    {category.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={isInView ? "show" : ""}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {category.products.map((product, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="p-5 rounded-lg border border-odra-light-gray bg-white hover:border-odra-blue/20 hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-semibold text-odra-blue mb-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-odra-dark-gray/70">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center text-odra-blue hover:underline"
                  >
                    Máte zájem o cenovou nabídku? <span className="ml-1">→</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
