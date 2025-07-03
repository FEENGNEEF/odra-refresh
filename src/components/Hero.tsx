
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-odra-light-gray to-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-odra-blue/5 rounded-bl-[100px] md:rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-odra-light-blue/5 rounded-tr-[100px] md:rounded-tr-[200px]"></div>
      </div>
      
      <div className="container relative z-10 pt-16 pb-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-3 py-1 rounded-full bg-odra-blue/10 text-odra-blue text-sm font-medium"
            >
              Od roku 1991 na trhu
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-odra-dark-gray"
            >
              ODRA TRADING <br />
              <span className="text-odra-blue">Váš partner pro obchod</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-odra-dark-gray/70 max-w-lg"
            >
              Společnost ODRA TRADING spol. s r.o. působí na trhu od roku 1991. Specializujeme se na distribuci a velkoobchod obalových materiálů s mezinárodními partnery ze Slovenska, Polska, Rakouska, Slovinska, Běloruska, Ukrajiny a Ruska.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#products"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-odra-blue text-white rounded-md font-medium transition-all hover:shadow-lg hover:shadow-odra-blue/20 text-center"
              >
                Náš sortiment
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border border-odra-blue text-odra-blue rounded-md font-medium transition-all hover:bg-odra-blue/5 text-center"
              >
                Kontaktujte nás
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-odra-blue/90 to-odra-light-blue/90 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Obalové materiály" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-odra-blue"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
