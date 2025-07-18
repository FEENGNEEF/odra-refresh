
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-odra-dark-gray text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="text-2xl font-bold text-white mb-4">ODRA TRADING spol. s r.o.</div>
              <p className="text-white/70 max-w-md">
                Specialista na výrobu a velkoobchod s hygienickými papíry, obalovými materiály, lněnými výrobky, 
                lněným osivem a zemědělskou technikou od roku 1991.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Navigace</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Úvod
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors">
                  Náš sortiment
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  O společnosti
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Kontaktní informace</h3>
            <address className="not-italic text-white/70 space-y-2">
              <p>ODRA TRADING spol. s r.o.</p>
              <p>U Parku 10</p>
              <p>702 00 Ostrava</p>
              <p>Česká republika</p>
              <p className="pt-2">
                <a href="tel:+420596139267" className="hover:text-white transition-colors">
                  Tel: +420 596 139 267
                </a>
              </p>
              <p>
                <a href="tel:+420596139268" className="hover:text-white transition-colors">
                  Tel: +420 596 139 268
                </a>
              </p>
              <p>
                <a href="mailto:odra@odra.cz" className="hover:text-white transition-colors">
                  Email: odra@odra.cz
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ODRA TRADING spol. s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Obchodní podmínky
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Ochrana osobních údajů
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
