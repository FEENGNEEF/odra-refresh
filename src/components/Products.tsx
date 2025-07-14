
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const productCategories = [
  {
    id: "uhelniky-ochranne-hrany",
    name: "Úhelníky a ochranné hrany",
    description: "Dodáváme hrany dle přání zákazníka až do celkové délky 6 m. Běžné i flexibilní úhelníky pro ochranu hran při přepravě.",
    image: "/Odratrading auto.png",
    products: [
      { 
        name: "Běžné úhelníky", 
        description: "Výška hrany: 30-100 mm, síla hrany: 1-8 mm, délka: max 6 m" 
      },
      { 
        name: "Flexibilní úhelníky", 
        description: "Výška hrany: 35-60 mm, síla hrany: 1-3 mm, délka modulu: 40-60 mm, délka: 800-4000 mm" 
      },
    ]
  },
  {
    id: "ramy",
    name: "Rámy",
    description: "Obalové rámy pro ochranu a fixaci zboží při přepravě a skladování.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { 
        name: "Ochranné rámy", 
        description: "Výška hrany: 35-60 mm, síla hrany: 2-4 mm" 
      },
    ]
  },
  {
    id: "dutinky-trubice",
    name: "Dutinky a trubice",
    description: "Dodáváme lepenkové trubice spirálově i prostě navíjené v široké škále rozměrů.",
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { 
        name: "Lepenkové trubice", 
        description: "Průměr: 17-400 mm, síla stěny: 1-15 mm, délka: 12-6000 mm" 
      },
      { 
        name: "Spirálově navíjené", 
        description: "Vyšší pevnost, vhodné pro náročnější aplikace" 
      },
      { 
        name: "Prostě navíjené", 
        description: "Ekonomická varianta pro standardní použití" 
      },
    ]
  },
  {
    id: "eko-palety",
    name: "EKO palety",
    description: "Ekologické papírové palety jako alternativa k dřevěným paletám. Šetrné k životnímu prostředí.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    products: [
      { 
        name: "Papírové palety", 
        description: "Ekologická alternativa k dřevěným paletám" 
      },
      { 
        name: "Lehké palety", 
        description: "Nižší hmotnost při zachování nosnosti" 
      },
      { 
        name: "Jednorázové palety", 
        description: "Ideální pro export bez nutnosti vrácení" 
      },
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
            V souladu s přírodou
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-odra-dark-gray mb-4">
            Obalové materiály
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-odra-dark-gray/70 mb-4">
              Papírové obalové materiály se řadí mezi prvky fixačních a obalových materiálů. Vyznačují se vysokou pevností a odolností proti nárazu. Jsou šetrné vzhledem k životnímu prostředí a cenově velmi výhodné.
            </p>
            <p className="text-odra-dark-gray/70 mb-4">
              Díky široké rozmanitosti vyráběných rozměrů a už vzpomínané pevnosti nacházejí tyto obalové materiály uplatnění při ochraně zboží v logistice i v mnoha dalších průmyslových odvětví.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="font-semibold text-odra-dark-gray mb-2">Použitý materiál:</h3>
                <p className="text-odra-dark-gray/70">recyklovaný papír, kartón, kraftliner, testliner</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-odra-dark-gray mb-2">Dodáváme:</h3>
                <p className="text-odra-dark-gray/70">lepenkové proložky v gramáži 200 - 800 gr/m²</p>
              </div>
            </div>
            <p className="text-odra-dark-gray/70 text-center">
              Máte-li zájem, případně dotaz, kontaktujte nás prosím na{" "}
              <a href="mailto:odra@odratrading.cz" className="text-odra-blue hover:underline">odra@odratrading.cz</a>
              {" "}nebo{" "}
              <a href="mailto:petr@odra.cz" className="text-odra-blue hover:underline">petr@odra.cz</a>
            </p>
          </div>
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
