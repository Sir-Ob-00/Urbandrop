import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import ChinaFlag from '../../assets/images/home/China/Flag_of_the_People\'s_Republic_of_China.svg.png';
import ChinaImg1 from '../../assets/images/home/China/4b346a648a9f1d32ee6f2ab583bd9d33_400x.png';
import ChinaImg2 from '../../assets/images/home/China/AUBERGINE_KATHIRIKKAI_400x.jpg';
import ChinaImg3 from '../../assets/images/home/China/BITTER-GOURD_400x.jpg';
import ChinaImg4 from '../../assets/images/home/China/BOTTLE-GOURD_400x.jpg';
import ChinaImg5 from '../../assets/images/home/China/fresh-sapota-500x500-1_400x.jpg';

import GhanaFlag from '../../assets/images/home/Ghana/Flag_of_Ghana.svg.png';
import GhanaImg1 from '../../assets/images/home/Ghana/GB-ABEMUDRO-CREAM-800g-X-12.jpg';
import GhanaImg2 from '../../assets/images/home/Ghana/Gino-Tomato-Puree-210g.jpg';
import GhanaImg3 from '../../assets/images/home/Ghana/Titus Sardine in Soybean & Chilli Oil.jpg';
import GhanaImg4 from '../../assets/images/home/grocery-1.jpg';
import GhanaImg5 from '../../assets/images/home/grocery-2.jpg';
import GhanaImg6 from '../../assets/images/home/grocery-13.jpg';


import IndiaFlag from '../../assets/images/home/India/Flag_of_India.png';
import IndiaImg1 from '../../assets/images/home/India/NIRU-MILLET_400x.png';
import IndiaImg2 from '../../assets/images/home/India/TRSChieckPeas.jpg';
import IndiaImg3 from '../../assets/images/home/India/TRSUridDal.jpg';
import IndiaImg4 from '../../assets/images/home/grocery-3.jpg';
import IndiaImg5 from '../../assets/images/home/grocery-4.jpg';
import IndiaImg6 from '../../assets/images/home/grocery-14.jpg';

import JamaicaFlag from '../../assets/images/home/Jamaica/Flag_of_Jamaica.svg.png';
import JamaicaImg1 from '../../assets/images/home/Jamaica/BANANA-LEAF_400x.jpg';
import JamaicaImg2 from '../../assets/images/home/Jamaica/De Rica Tomato Paste 400g.jpg';
import JamaicaImg3 from '../../assets/images/home/Jamaica/Gongura-leaves_ced44f2f-8218-464a-b73e-f30992d4994d_400x.jpg';
import JamaicaImg4 from '../../assets/images/home/Jamaica/TROPICWAY-PEANUT-BUTTER-12×500G.jpg';
import JamaicaImg5 from '../../assets/images/home/grocery-5.jpg';
import JamaicaImg6 from '../../assets/images/home/grocery-15.jpg';

import KenyaFlag from '../../assets/images/home/Kenya/Flag_of_Kenya.svg.png';
import KenyaImg1 from '../../assets/images/home/Kenya/JACKFRUITPEALED300G_APPROX5PCS_400x.png';
import KenyaImg2 from '../../assets/images/home/Kenya/RADDISH-_MULLANGI_b4616dfe-fecf-491f-a6bb-55732c41db96_400x.jpg';
import KenyaImg3 from '../../assets/images/home/Kenya/SAMBAR-CUCUMBER-KERALA_5b1509da-d73c-46f9-a086-4116cc9c14de_400x.jpg';
import KenyaImg4 from '../../assets/images/home/Kenya/SNAKE-GAURD-PUDALANKAI_130c7118-4d62-4368-993c-f05d91088a11_400x.jpg';
import KenyaImg5 from '../../assets/images/home/Kenya/Untitleddesign-2022-07-29T180031.464_400x.png';

import MoroccoFlag from '../../assets/images/home/Morocco/Flag_of_Morocco.svg.webp';
import MoroccoImg1 from '../../assets/images/home/Morocco/41YDq-tchUL_280x.png';
import MoroccoImg2 from '../../assets/images/home/Morocco/big_5022496019750_280x.png';
import MoroccoImg3 from '../../assets/images/home/Morocco/IDHAYAM-OIL-1LTR.png';
import MoroccoImg4 from '../../assets/images/home/Morocco/SRIDURGACOLDPRESSEDGINGELLY_SESAME_OIL1LTR_280x.png';
import MoroccoImg5 from '../../assets/images/home/grocery-6.jpg';

import NigeriaFlag from '../../assets/images/home/Nigeria/Flag_of_Nigeria.svg.webp';
import NigeriaImg1 from '../../assets/images/home/Nigeria/elex Nigerian Roasted peanuts.jpg';
import NigeriaImg2 from '../../assets/images/home/Nigeria/Niyis Peeled Beans 2kg.jpg';
import NigeriaImg3 from '../../assets/images/home/Nigeria/Olu Olu Plantain chips Green.jpg';
import NigeriaImg4 from '../../assets/images/home/Nigeria/Olu-Olu-Poundo-Iyan-1.2kg--460x575.jpg';
import NigeriaImg5 from '../../assets/images/home/grocery-7.jpg';

import PakistanFlag from '../../assets/images/home/Pakistan/Flag_of_Pakistan.svg.png';
import PakistanImg1 from '../../assets/images/home/Pakistan/BRAHMINS_PUTTU_PODI_1KG_-_WHITE_280x.png';
import PakistanImg2 from '../../assets/images/home/Pakistan/HEERAGRAMFLOUR1KG_280x.png';
import PakistanImg3 from '../../assets/images/home/Pakistan/NAGAIDIYAPPAMFLOUR500G_280x.png';
import PakistanImg4 from '../../assets/images/home/grocery-8.jpg';
import PakistanImg5 from '../../assets/images/home/grocery-9.jpg';

import SenegalFlag from '../../assets/images/home/Senegal/Flag_of_Senegal.svg.webp';
import SenegalImg1 from '../../assets/images/home/Senegal/819D8piBVKL._UF1000_1000_QL80.jpg';
import SenegalImg2 from '../../assets/images/home/Senegal/287151834__65385.1494834929.jpg';
import SenegalImg3 from '../../assets/images/home/Senegal/chings-dark-soy-sauce-e1621806496810.jpg';
import SenegalImg4 from '../../assets/images/home/Senegal/laddu_350g-removebg-preview.png';
import SenegalImg5 from '../../assets/images/home/Senegal/NATIVEFOODSTOREMILLETFLOUR500G-FINGERMILLET_RAGI_1_400x.png';

import SomaliaFlag from '../../assets/images/home/Somalia/Flag_of_Somalia.svg.png';
import SomaliaImg1 from '../../assets/images/home/Somalia/Africas-finest-plantain-fufu-680g-460x460.jpg';
import SomaliaImg2 from '../../assets/images/home/Somalia/Blackeye Beans 25kg.jpg';
import SomaliaImg3 from '../../assets/images/home/Somalia/Carnation Evaporated Milk.jpg';
import SomaliaImg4 from '../../assets/images/home/Somalia/MTR-VADA-MIX-500G_211106e3-4572-4cdc-aeec-6b0b67b58f14.jpg';
import SomaliaImg5 from '../../assets/images/home/Somalia/SAKTHI-FISH-FRY-MASALA-200G.png';

import SouthAfricaFlag from '../../assets/images/home/South_Africa/Flag_of_South_Africa.svg.png';
import SouthAfricaImg1 from '../../assets/images/home/South_Africa/Copy of nestle-milo-singapore-1.8kgs.jpg';
import SouthAfricaImg2 from '../../assets/images/home/South_Africa/HALDIRAMSFROZENMIXVEGPARATHA400G_400x.png';
import SouthAfricaImg3 from '../../assets/images/home/South_Africa/Uncle-Johns-Bread-800g.jpg';
import SouthAfricaImg4 from '../../assets/images/home/grocery-9.jpg';
import SouthAfricaImg5 from '../../assets/images/home/grocery-10.jpg';

import ZimbabweFlag from '../../assets/images/home/Zimbabwe/Flag_of_Zimbabwe.svg.png';
import ZimbabweImg1 from '../../assets/images/home/Zimbabwe/GB-PEANUT-BUTTER-NO-SUGAR-400G-X-12.jpg';
import ZimbabweImg2 from '../../assets/images/home/Zimbabwe/golden-morn-maize-cereal-with-soya-protein-300g.jpg';
import ZimbabweImg3 from '../../assets/images/home/Zimbabwe/SRIDURGARAGIFLOUR1KG_400x.png';
import ZimbabweImg4 from '../../assets/images/home/grocery-11.jpg';
import ZimbabweImg5 from '../../assets/images/home/grocery-12.jpg';

const countries = [
  {
    name: 'China',
    flag: ChinaFlag,
    groceries: [ChinaImg1, ChinaImg2, ChinaImg3, ChinaImg4, ChinaImg5]
  },
  {
    name: 'Ghana',
    flag: GhanaFlag,
    groceries: [GhanaImg1, GhanaImg2, GhanaImg3, GhanaImg4, GhanaImg5, GhanaImg6]
  },
  {
    name: 'India',
    flag: IndiaFlag,
    groceries: [IndiaImg1, IndiaImg2, IndiaImg3, IndiaImg4, IndiaImg5, IndiaImg6]
  },
  {
    name: 'Jamaica',
    flag: JamaicaFlag,
    groceries: [JamaicaImg1, JamaicaImg2, JamaicaImg3, JamaicaImg4, JamaicaImg5, JamaicaImg6]
  },
  {
    name: 'Kenya',
    flag: KenyaFlag,
    groceries: [KenyaImg1, KenyaImg2, KenyaImg3, KenyaImg4, KenyaImg5]
  },
  {
    name: 'Morocco',
    flag: MoroccoFlag,
    groceries: [MoroccoImg1, MoroccoImg2, MoroccoImg3, MoroccoImg4, MoroccoImg5]
  },
  {
    name: 'Nigeria',
    flag: NigeriaFlag,
    groceries: [NigeriaImg1, NigeriaImg2, NigeriaImg3, NigeriaImg4, NigeriaImg5]
  },
  {
    name: 'Pakistan',
    flag: PakistanFlag,
    groceries: [PakistanImg1, PakistanImg2, PakistanImg3, PakistanImg4, PakistanImg5]
  },
  {
    name: 'Senegal',
    flag: SenegalFlag,
    groceries: [SenegalImg1, SenegalImg2, SenegalImg3, SenegalImg4, SenegalImg5]
  },
  {
    name: 'Somalia',
    flag: SomaliaFlag,
    groceries: [SomaliaImg1, SomaliaImg2, SomaliaImg3, SomaliaImg4, SomaliaImg5]
  },
  {
    name: 'South Africa',
    flag: SouthAfricaFlag,
    groceries: [SouthAfricaImg1, SouthAfricaImg2, SouthAfricaImg3, SouthAfricaImg4, SouthAfricaImg5]
  },
  {
    name: 'Zimbabwe',
    flag: ZimbabweFlag,
    groceries: [ZimbabweImg1, ZimbabweImg2, ZimbabweImg3, ZimbabweImg4, ZimbabweImg5]
  }
];

const EthnicMosaic = () => {
  const [gridItems, setGridItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const initializeGrid = () => {
      const items = [];
      for (let i = 0; i < 25; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        const isFlag = Math.random() > 0.5;
        items.push({
          id: i,
          country: country.name,
          image: isFlag ? country.flag : country.groceries[Math.floor(Math.random() * country.groceries.length)],
          isFlag
        });
      }
      setGridItems(items);
    };

    initializeGrid();

    const interval = setInterval(() => {
      setGridItems(prevItems =>
        prevItems.map((item) => {
          // Create a wave effect by staggering the changes
          const shouldChange = Math.random() > 0.7; // 30% chance to change each item
          if (!shouldChange) return item;

          const country = countries[Math.floor(Math.random() * countries.length)];
          const isFlag = Math.random() > 0.5;
          return {
            ...item,
            country: country.name,
            image: isFlag ? country.flag : country.groceries[Math.floor(Math.random() * country.groceries.length)],
            isFlag
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-0">
        <motion.div
          className="text-center mb-12 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('home.mosaic.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('home.mosaic.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-5 gap-5 w-full max-w-screen-xl mx-auto px-4">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="aspect-square overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.img
                src={item.image}
                alt={`${item.country} ${item.isFlag ? 'flag' : 'grocery'}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthnicMosaic;