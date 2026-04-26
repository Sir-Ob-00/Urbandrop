import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ChinaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219862/Flag_of_the_People_s_Republic_of_China.svg_tvfl5b.png';
const ChinaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219858/4b346a648a9f1d32ee6f2ab583bd9d33_400x_rfhvgg.png';
const ChinaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219859/AUBERGINE_KATHIRIKKAI_400x_c2n8cw.jpg';
const ChinaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219860/BITTER-GOURD_400x_mvgcf1.jpg';
const ChinaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219862/BOTTLE-GOURD_400x_ertttl.jpg';
const ChinaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219863/fresh-sapota-500x500-1_400x_etlukj.jpg';

const GhanaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219863/Flag_of_Ghana.svg_hwrdfp.png';
const GhanaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219865/GB-ABEMUDRO-CREAM-800g-X-12_t82cjk.jpg';
const GhanaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219866/Gino-Tomato-Puree-210g_txyj7c.jpg';
const GhanaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219867/Titus_Sardine_in_Soybean_Chilli_Oil_plitoy.jpg';
const GhanaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777225960/grocery-1_vto9e2.jpg';
const GhanaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777225961/grocery-2_boxji1.jpg';
const GhanaImg6 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777225961/grocery-13_iqfp4p.jpg';


const IndiaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219867/Flag_of_India_ivkgg3.png';
const IndiaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219869/NIRU-MILLET_400x_dnbpnh.png';
const IndiaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219870/TRSChieckPeas_fudvxp.jpg';
const IndiaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219871/TRSUridDal_bqu4ug.jpg';
const IndiaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226151/grocery-3_tzy072.jpg';
const IndiaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226153/grocery-4_mxdxmr.jpg';
const IndiaImg6 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226151/grocery-14_wc82hd.jpg';

const JamaicaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219874/Flag_of_Jamaica.svg_zykjny.png';
const JamaicaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219872/BANANA-LEAF_400x_evshva.jpg';
const JamaicaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219873/De_Rica_Tomato_Paste_400g_mxi1p0.jpg';
const JamaicaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219875/Gongura-leaves_ced44f2f-8218-464a-b73e-f30992d4994d_400x_aqvuwj.jpg';
const JamaicaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219876/TROPICWAY-PEANUT-BUTTER-12_500G_pkgmqk.jpg';
const JamaicaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226284/grocery-5_sjlkot.jpg';
const JamaicaImg6 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226283/grocery-15_hozlit.jpg';

const KenyaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219877/Flag_of_Kenya.svg_oviypo.png';
const KenyaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219878/JACKFRUITPEALED300G_APPROX5PCS_400x_egpebf.png';
const KenyaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219879/RADDISH-_MULLANGI_b4616dfe-fecf-491f-a6bb-55732c41db96_400x_osk3qi.jpg';
const KenyaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219881/SAMBAR-CUCUMBER-KERALA_5b1509da-d73c-46f9-a086-4116cc9c14de_400x_urshgv.jpg';
const KenyaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219881/SNAKE-GAURD-PUDALANKAI_130c7118-4d62-4368-993c-f05d91088a11_400x_q1tvkb.jpg';
const KenyaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219882/Untitleddesign-2022-07-29T180031.464_400x_mpkcgv.png';

const MoroccoFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219886/Flag_of_Morocco.svg_tio7sy.webp';
const MoroccoImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219884/41YDq-tchUL_280x_wekgl1.avif';
const MoroccoImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219884/big_5022496019750_280x_bykg0s.avif';
const MoroccoImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219887/IDHAYAM-OIL-1LTR_kour7f.avif';
const MoroccoImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219888/SRIDURGACOLDPRESSEDGINGELLY_SESAME_OIL1LTR_280x_b8c6go.avif';
const MoroccoImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226504/grocery-6_hupfbh.jpg';

const NigeriaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219890/Flag_of_Nigeria.svg_tnwtbx.webp';
const NigeriaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219889/elex_Nigerian_Roasted_peanuts_ncui35.jpg';
const NigeriaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219891/Niyis_Peeled_Beans_2kg_kbtrnv.jpg';
const NigeriaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219892/Olu_Olu_Plantain_chips_Green_c9mp7p.jpg';
const NigeriaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219894/Olu-Olu-Poundo-Iyan-1.2kg--460x575_im1gzr.jpg';
const NigeriaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226627/grocery-7_n1doh0.jpg';

const PakistanFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219895/Flag_of_Pakistan.svg_trvtoj.png';
const PakistanImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219895/BRAHMINS_PUTTU_PODI_1KG_-_WHITE_280x_ijjliv.avif';
const PakistanImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219897/HEERAGRAMFLOUR1KG_280x_y4ipqw.avif';
const PakistanImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219898/NAGAIDIYAPPAMFLOUR500G_280x_iomq2j.avif';
const PakistanImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226725/grocery-8_fcobac.jpg';
const PakistanImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777226724/grocery-9_eni3gi.jpg';

const SenegalFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219902/Flag_of_Senegal.svg_hwa4z4.webp';
const SenegalImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219900/819D8piBVKL._UF1000_1000_QL80_zoqgo0.jpg';
const SenegalImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219899/287151834__65385.1494834929_e1e412.jpg';
const SenegalImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219902/chings-dark-soy-sauce-e1621806496810_ae4r3w.jpg';
const SenegalImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219903/laddu_350g-removebg-preview_akckfk.png';
const SenegalImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219904/NATIVEFOODSTOREMILLETFLOUR500G-FINGERMILLET_RAGI_1_400x_mybfvl.png';

const SomaliaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219909/Flag_of_Somalia.svg_qizaem.png';
const SomaliaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219905/Africas-finest-plantain-fufu-680g-460x460_qoc2zf.jpg';
const SomaliaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219906/Blackeye_Beans_25kg_x9ajdt.jpg';
const SomaliaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219908/Carnation_Evaporated_Milk_e4omse.jpg';
const SomaliaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219910/MTR-VADA-MIX-500G_211106e3-4572-4cdc-aeec-6b0b67b58f14_ciwsho.jpg';
const SomaliaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219911/SAKTHI-FISH-FRY-MASALA-200G_trzeip.png';

const SouthAfricaFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219913/Flag_of_South_Africa.svg_ht1pok.png';
const SouthAfricaImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219912/Copy_of_nestle-milo-singapore-1.8kgs_nwomoz.jpg';
const SouthAfricaImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219914/HALDIRAMSFROZENMIXVEGPARATHA400G_400x_i2ebr4.png';
const SouthAfricaImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219914/Uncle-Johns-Bread-800g_gu8fz3.jpg';
const SouthAfricaImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777227102/grocery-9_epsq5a.jpg';
const SouthAfricaImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777227100/grocery-10_vv4mn5.jpg';

const ZimbabweFlag = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219916/Flag_of_Zimbabwe.svg_ivs6yn.png';
const ZimbabweImg1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219917/GB-PEANUT-BUTTER-NO-SUGAR-400G-X-12_lmow6c.jpg';
const ZimbabweImg2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219919/golden-morn-maize-cereal-with-soya-protein-300g_fpjlvv.jpg';
const ZimbabweImg3 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219920/SRIDURGARAGIFLOUR1KG_400x_hj8esg.png';
const ZimbabweImg4 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777227366/grocery-11_s08wlt.jpg';
const ZimbabweImg5 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777227365/grocery-12_jry7fp.jpg';

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
            className="text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('home.mosaic.title')}
          </motion.h2>
          <motion.p
            className="text-gray-600"
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