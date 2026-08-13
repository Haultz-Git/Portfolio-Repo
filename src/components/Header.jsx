import { motion } from 'framer-motion';
import { fullName } from '../assets/Info.TS';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
];

export default function Header() {
  const initials = fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b-2 border-line bg-void/82 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-ink">
          <span
            className="flex h-[34px] w-[34px] items-center justify-center bg-pink font-pixel text-[13px] text-void"
            style={{
              boxShadow:
                '0 -4px 0 0 #ff2e88, 0 4px 0 0 #ff2e88, -4px 0 0 0 #ff2e88, 4px 0 0 0 #ff2e88, 0 0 18px rgba(255,46,136,0.65)',
            }}
          >
            {initials}
          </span>
          <span className="font-pixel text-[15px] tracking-wide" style={{ textShadow: '0 0 14px rgba(46,230,246,0.55)' }}>
            {fullName.split(' ')[0].toUpperCase()}
            <span className="text-cyan">.DEV</span>
          </span>
        </a>
        <nav aria-label="Sections" className="flex flex-wrap items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2.5 font-pixel text-[10px] tracking-wide text-ink-muted transition-colors hover:bg-yellow/10 hover:text-yellow"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3.5 py-2.5 font-pixel text-[10px] tracking-wide text-void transition-colors hover:bg-yellow"
            style={{ background: '#2ee6f6', boxShadow: '0 0 16px rgba(46,230,246,0.45)' }}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
