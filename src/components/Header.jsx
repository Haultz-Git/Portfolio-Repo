import { motion } from 'framer-motion';
import info from '../assets/Info.TS';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {info.brandName}
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </nav>
          <div>
            <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
