import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import info, { fullName } from '../assets/Info.TS';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left md:flex items-center justify-between gap-12"
      >
        <div className="md:w-3/5">
          <motion.h2 variants={itemVariants} className="text-indigo-400 font-semibold tracking-wide uppercase mb-3">
            Hi, I am {fullName}
          </motion.h2>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            I Build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital Experiences.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0">
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors w-full sm:w-auto justify-center">
              View Work <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a href={info.socialLinks.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={info.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${info.email}`} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="hidden md:block md:w-2/5">
          <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-slate-800 bg-slate-900 flex items-center justify-center overflow-hidden">
              {/* Replace with your image */}
              <div className="text-slate-600 text-6xl font-bold">{'</>'}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
