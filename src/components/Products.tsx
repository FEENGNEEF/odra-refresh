
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const productCategories = [
  {
    id: "armatury",
    name: "Průmyslové armatury",
    description: "Široká nabídka armatur pro různé průmyslové aplikace",
    image: "https://images.unsplash.com/photo-1523242942811-8a2bdb077ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Kulové kohouty", description: "Pro efektivní regulaci průtoku" },
      { name: "Šoupátka", description: "Ideální pro úplné uzavření potrubí" },
      { name: "Klapky", description: "Kompaktní řešení pro různé aplikace" },
      { name: "Ventily", description: "Přesná regulace médií v potrubních systémech" },
    ]
  },
  {
    id: "cerpadla",
    name: "Čerpadla",
    description: "Kvalitní čerpadla pro přepravu kapalin v průmyslu",
    image: "https://images.unsplash.com/photo-1596731498067-846ee9d6b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Odstředivá čerpadla", description: "Pro vysoké průtoky a nižší tlaky" },
      { name: "Objemová čerpadla", description: "Ideální pro viskózní kapaliny" },
      { name: "Ponorná čerpadla", description: "Pro čerpání z hlubokých zdrojů" },
      { name: "Dávkovací čerpadla", description: "Přesné dávkování chemikálií" },
    ]
  },
  {
    id: "prislusenstvi",
    name: "Příslušenství",
    description: "Doplňkové vybavení pro komplexní řešení",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { name: "Pohony", description: "Elektrické a pneumatické pohony pro armatury" },
      { name: "Filtry", description: "Pro ochranu před nečistotami" },
      { name: "Těsnění", description: "Kvalitní těsnící materiály" },
      { name: "Měřící technika", description: "Přesné měření průtoku a tlaku" },
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
            Naše produkty
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-odra-dark-gray mb-4">
            Komplexní řešení pro průmysl
          </h2>
          <p className="text-odra-dark-gray/70 max-w-2xl mx-auto">
            Nabízíme široký sortiment kvalitních produktů od renomovaných výrobců
            pro různá průmyslová odvětví.
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
