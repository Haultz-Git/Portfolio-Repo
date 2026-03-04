import { Github, Linkedin, Mail } from 'lucide-react';
import info, { fullName } from '../assets/Info.TS';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {info.brandName}
            </a>
            <p className="mt-2 text-slate-400 text-sm max-w-xs">
              {info.bio}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={info.socialLinks.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={info.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <button type="button"
              onClick={() => navigator.clipboard.writeText(info.email)}
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Copy email"
              title="Copy email"><Mail size={20} />
            </button>
            {/* <a href={`mailto:${info.email}`} className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a> */}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left text-slate-500 text-sm" >
          <p>&copy; {currentYear} {fullName}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            {/* <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
