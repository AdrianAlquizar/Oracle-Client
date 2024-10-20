
import { motion } from 'framer-motion';
import StakkWork from '../components/HowStakkWork.png'
import Mobile from '../components/mobille.png'

const Hero = () => {
  return (
    <div className="bg-[#1C1C1C] text-white flex flex-col items-center justify-center">
      <motion.h1
            className="text-3xl font-extrabold mb-4 text-[#ffffff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            How Stakk works?
          </motion.h1>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <picture>
        <source media="(max-width: 640px)" srcSet={Mobile} />
          <img
            src={StakkWork}
            alt="Stakk Finance Hero"
            width={1920} // Set width for the desktop image
            height={1080} // Set height for the desktop image
            className="mx-auto"
          />
        </picture>
      </motion.div>
    </div>
  );
};

export default Hero;
