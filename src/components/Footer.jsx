import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import info, { fullName } from '../assets/Info.TS';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const initials = fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  const copyEmail = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <footer
      id="contact"
      className="relative mt-[clamp(30px,5vw,60px)] border-t-2 border-line"
      style={{ background: 'linear-gradient(180deg, #150829 0%, #0d0221 100%)' }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-[clamp(44px,6vw,76px)] pb-8 sm:px-6 lg:px-8">
        <h2
          className="mb-4.5 font-pixel text-[clamp(15px,2.4vw,24px)] leading-[1.5] text-ink"
          style={{ textShadow: '0 0 26px rgba(255,46,136,0.4)' }}
        >
          GOT A WORLD
          <br />
          THAT NEEDS BUILDING?
        </h2>
        <p className="mb-7.5 max-w-[52ch] text-[17px] leading-[1.7] text-ink-body">
          I'm open to game dev roles, contract Unity work, and interactive experiments. Say hello — I reply fast.
        </p>
        <a
          href={`mailto:${info.email}`}
          className="inline-flex items-center gap-3 border-b-[5px] border-[#0f7f8a] bg-cyan px-7 py-4.5 font-pixel text-xs text-void transition-colors hover:bg-yellow"
          style={{ boxShadow: '0 0 32px rgba(46,230,246,0.45)' }}
        >
          <span className="animate-blink">▶</span> PRESS START
        </a>

        <div className="mt-13 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center bg-pink font-pixel text-[11px] text-void">
              {initials}
            </span>
            <span className="font-mono text-xs tracking-wide text-ink-muted">
              © {currentYear} {fullName.toUpperCase()} — ALL RIGHTS RESERVED
            </span>
          </div>
          <div className="flex gap-2.5">
            <a
              href={info.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="border-2 border-line px-3.5 py-3 text-ink-muted transition-colors hover:border-pink hover:text-pink"
            >
              <Github size={16} />
            </a>
            <a
              href={info.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="border-2 border-line px-3.5 py-3 text-ink-muted transition-colors hover:border-cyan hover:text-cyan"
            >
              <Linkedin size={16} />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="border-2 border-line px-3.5 py-3 font-pixel text-[10px] text-ink-muted transition-colors hover:border-yellow hover:text-yellow"
              aria-label="Copy email"
            >
              <span aria-live="polite">{copied ? 'COPIED' : 'COPY EMAIL'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
