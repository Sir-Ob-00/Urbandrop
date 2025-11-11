import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const countries = [
  {
    name: 'China',
    flag: '/src/assets/images/home/China/Flag_of_the_People\'s_Republic_of_China.svg.png',
    groceries: [
      '/src/assets/images/home/China/4b346a648a9f1d32ee6f2ab583bd9d33_400x.png',
      '/src/assets/images/home/China/AUBERGINE_KATHIRIKKAI_400x.jpg',
      '/src/assets/images/home/China/BITTER-GOURD_400x.jpg',
      '/src/assets/images/home/China/BOTTLE-GOURD_400x.jpg',
      '/src/assets/images/home/China/fresh-sapota-500x500-1_400x.jpg'
    ]
  },
  {
    name: 'Ghana',
    flag: '/src/assets/images/home/Ghana/Flag_of_Ghana.svg.png',
    groceries: [
      '/src/assets/images/home/Ghana/GB-ABEMUDRO-CREAM-800g-X-12.jpg',
      '/src/assets/images/home/Ghana/Gino-Tomato-Puree-210g.jpg',
      '/src/assets/images/home/Ghana/Titus Sardine in Soybean & Chilli Oil.jpg'
    ]
  },
  {
    name: 'India',
    flag: '/src/assets/images/home/India/Flag_of_India.png',
    groceries: [
      '/src/assets/images/home/India/NIRU-MILLET_400x.png',
      '/src/assets/images/home/India/TRSChieckPeas.jpg',
      '/src/assets/images/home/India/TRSUridDal.jpg'
    ]
  },
  {
    name: 'Jamaica',
    flag: '/src/assets/images/home/Jamaica/Flag_of_Jamaica.svg.png',
    groceries: [
      '/src/assets/images/home/Jamaica/BANANA-LEAF_400x.jpg',
      '/src/assets/images/home/Jamaica/De Rica Tomato Paste 400g.jpg',
      '/src/assets/images/home/Jamaica/Gongura-leaves_ced44f2f-8218-464a-b73e-f30992d4994d_400x.jpg',
      '/src/assets/images/home/Jamaica/TROPICWAY-PEANUT-BUTTER-12×500G.jpg'
    ]
  },
  {
    name: 'Kenya',
    flag: '/src/assets/images/home/Kenya/Flag_of_Kenya.svg.png',
    groceries: [
      '/src/assets/images/home/Kenya/JACKFRUITPEALED300G_APPROX5PCS_400x.png',
      '/src/assets/images/home/Kenya/RADDISH-_MULLANGI_b4616dfe-fecf-491f-a6bb-55732c41db96_400x.jpg',
      '/src/assets/images/home/Kenya/SAMBAR-CUCUMBER-KERALA_5b1509da-d73c-46f9-a086-4116cc9c14de_400x.jpg',
      '/src/assets/images/home/Kenya/SNAKE-GAURD-PUDALANKAI_130c7118-4d62-4368-993c-f05d91088a11_400x.jpg',
      '/src/assets/images/home/Kenya/Untitleddesign-2022-07-29T180031.464_400x.png'
    ]
  },
  {
    name: 'Morocco',
    flag: '/src/assets/images/home/Morocco/Flag_of_Morocco.svg.webp',
    groceries: [
      '/src/assets/images/home/Morocco/41YDq-tchUL_280x.png',
      '/src/assets/images/home/Morocco/big_5022496019750_280x.png',
      '/src/assets/images/home/Morocco/IDHAYAM-OIL-1LTR.png',
      '/src/assets/images/home/Morocco/SRIDURGACOLDPRESSEDGINGELLY_SESAME_OIL1LTR_280x.png'
    ]
  },
  {
    name: 'Nigeria',
    flag: '/src/assets/images/home/Nigeria/Flag_of_Nigeria.svg.webp',
    groceries: [
      '/src/assets/images/home/Nigeria/elex Nigerian Roasted peanuts.jpg',
      '/src/assets/images/home/Nigeria/Niyis Peeled Beans 2kg.jpg',
      '/src/assets/images/home/Nigeria/Olu Olu Plantain chips Green.jpg',
      '/src/assets/images/home/Nigeria/Olu-Olu-Poundo-Iyan-1.2kg--460x575.jpg'
    ]
  },
  {
    name: 'Pakistan',
    flag: '/src/assets/images/home/Pakistan/Flag_of_Pakistan.svg.png',
    groceries: [
      '/src/assets/images/home/Pakistan/BRAHMINS_PUTTU_PODI_1KG_-_WHITE_280x.png',
      '/src/assets/images/home/Pakistan/HEERAGRAMFLOUR1KG_280x.png',
      '/src/assets/images/home/Pakistan/NAGAIDIYAPPAMFLOUR500G_280x.png'
    ]
  },
  {
    name: 'Senegal',
    flag: '/src/assets/images/home/Senegal/Flag_of_Senegal.svg.webp',
    groceries: [
      '/src/assets/images/home/Senegal/819D8piBVKL._UF1000_1000_QL80.jpg',
      '/src/assets/images/home/Senegal/287151834__65385.1494834929.jpg',
      '/src/assets/images/home/Senegal/chings-dark-soy-sauce-e1621806496810.jpg',
      '/src/assets/images/home/Senegal/laddu_350g-removebg-preview.png',
      '/src/assets/images/home/Senegal/NATIVEFOODSTOREMILLETFLOUR500G-FINGERMILLET_RAGI_1_400x.png'
    ]
  },
  {
    name: 'Somalia',
    flag: '/src/assets/images/home/Somalia/Flag_of_Somalia.svg.png',
    groceries: [
      '/src/assets/images/home/Somalia/Africas-finest-plantain-fufu-680g-460x460.jpg',
      '/src/assets/images/home/Somalia/Blackeye Beans 25kg.jpg',
      '/src/assets/images/home/Somalia/Carnation Evaporated Milk.jpg',
      '/src/assets/images/home/Somalia/MTR-VADA-MIX-500G_211106e3-4572-4cdc-aeec-6b0b67b58f14.jpg',
      '/src/assets/images/home/Somalia/SAKTHI-FISH-FRY-MASALA-200G.png'
    ]
  },
  {
    name: 'South Africa',
    flag: '/src/assets/images/home/South_Africa/Flag_of_South_Africa.svg.png',
    groceries: [
      '/src/assets/images/home/South_Africa/Copy of nestle-milo-singapore-1.8kgs.jpg',
      '/src/assets/images/home/South_Africa/HALDIRAMSFROZENMIXVEGPARATHA400G_400x.png',
      '/src/assets/images/home/South_Africa/Uncle-Johns-Bread-800g.jpg'
    ]
  },
  {
    name: 'Zimbabwe',
    flag: '/src/assets/images/home/Zimbabwe/Flag_of_Zimbabwe.svg.png',
    groceries: [
      '/src/assets/images/home/Zimbabwe/GB-PEANUT-BUTTER-NO-SUGAR-400G-X-12.jpg',
      '/src/assets/images/home/Zimbabwe/golden-morn-maize-cereal-with-soya-protein-300g.jpg',
      '/src/assets/images/home/Zimbabwe/SRIDURGARAGIFLOUR1KG_400x.png'
    ]
  }
];

const EthnicMosaic = () => {
  const [gridItems, setGridItems] = useState([]);

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
        prevItems.map((item, index) => {
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
            Every Culture, One Marketplace
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover ingredients from Africa, Asia, and beyond.
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