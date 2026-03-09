import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
     return (
          <motion.section id="about" className="about-us-section" >
               <h2 className="text-3xl font-bold mb-4">O nás</h2>
               <p className="text-lg mb-6">
                    Sme Slovenskou spoločnosťou pôsobiacou na Slovenskom a zahraničnom trhu. Naši nadšenci pre ESD začali vnímať a implementovať prvky antistatickej ochrany pred elektrostatickým výbojom ESD v spojení prvkov technickej čistoty podla VDA 19.1-2. Zákazníka berieme, ako svojho partnera, a preto korektnosť, a transparentnosť voči partnerom je pre nás kľúčová</p>
               <p className="text-lg mb-6">
                    ESDtronic si do svojho vzniku doniesol 10rocnu skúsenosť v problematike ESD a od roku 2017 prišlo k poznaniu, ze ESD a prienik na technickú čistotu je cesta pre bezpečne EPA prostredie. Pri riešení problematiky ESD ochrany pracujeme podla štandardov ANSI/ESD S20.20, radu noriem IEC 61340</p>
                    

          </motion.section>
     );
}

export default AboutUs;