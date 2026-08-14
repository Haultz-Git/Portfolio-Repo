import { useState } from 'react';
import { motion } from 'framer-motion';
import info, { fullName } from '../assets/Info.TS';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 pt-[clamp(48px,8vw,104px)] pb-[clamp(40px,6vw,88px)] sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid items-center gap-14 md:grid-cols-2"
      >
        <div>
          <motion.div variants={itemVariants} className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-cyan" style={{ boxShadow: '0 0 12px #2ee6f6' }} />
            <span className="font-mono text-xs uppercase tracking-[3px] text-cyan">Player 1 — Game Developer</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-4.5 font-pixel text-[clamp(13px,1.6vw,16px)] tracking-wide text-yellow"
            style={{ textShadow: '0 0 18px rgba(255,225,77,0.45)' }}
          >
            {fullName.toUpperCase()}
          </motion.p>
 
          <motion.h1
            variants={itemVariants}
            className="animate-flicker-glow mb-6.5 text-balance font-pixel text-[clamp(26px,4.6vw,52px)] leading-[1.42] text-ink"
            style={{
              textShadow:
                '3px 3px 0 rgba(255,46,136,0.55), -2px -2px 0 rgba(46,230,246,0.35), 0 0 40px rgba(255,46,136,0.25)',
            }}
          >
            I build <span className="text-pink text-[50px]">WORLDS</span> and <span className="text-pink  text-[50px]">SYSTEMS</span>
            <br />
            You can <span className="text-pink  text-[50px]">Interact </span>with.
          </motion.h1>

          <motion.p variants={itemVariants} className="mb-4 max-w-[56ch] text-pretty text-[17px] leading-[1.7] text-ink-body">
            {info.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileTap={{ y: 4 }}
              className="inline-flex items-center gap-3 border-b-[5px] border-[#8f0f45] bg-pink px-[30px] py-5 font-pixel text-[13px] tracking-wide text-void transition-colors hover:bg-yellow"
              style={{ boxShadow: '0 0 34px rgba(255,46,136,0.5)' }}
            >
              <span className="animate-blink">▶</span> VIEW WORK
            </motion.a>
            <a
              href="#contact"
              className="inline-flex items-center border-2 border-cyan px-[26px] py-[19px] font-pixel text-[11px] tracking-wide text-cyan transition-colors hover:bg-cyan/12"
            >
              INSERT COIN
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-9.5 flex items-center gap-6.5 border-t border-line pt-6.5">
            <a
              href={info.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] tracking-wide text-ink-muted transition-colors hover:text-pink"
            >
              GITHUB ↗
            </a>
            <a
              href={info.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] tracking-wide text-ink-muted transition-colors hover:text-pink"
            >
              LINKEDIN ↗
            </a>
            <button
              onClick={copyEmail}
              className="font-mono text-[13px] tracking-wide text-ink-muted transition-colors hover:text-pink cursor-pointer bg-none border-none p-0"
            >
              {copied ? 'COPIED!' : 'EMAIL ↗'}
            </button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="animate-bob relative w-full max-w-[380px]">
            <div className="absolute -inset-3.5 border-2 border-line" />
            <div
              className="relative bg-purple p-4"
              style={{
                boxShadow:
                  '0 -6px 0 0 #2ee6f6, 0 6px 0 0 #2ee6f6, -6px 0 0 0 #2ee6f6, 6px 0 0 0 #2ee6f6, 0 0 60px rgba(46,230,246,0.25)',
              }}
            >
              <div className="mb-3 flex items-center justify-between font-pixel text-[9px] tracking-wide text-yellow">
                <span>SELECT CHARACTER</span>
                <span className="text-pink">LV.10</span>
              </div>
              <div
                className="relative flex aspect-square w-full items-center justify-center"
                style={{ background: 'linear-gradient(180deg, #241043 0%, #0d0221 100%)' }}
              >
                <span className="font-pixel text-5xl text-line">{'</>'}</span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-wide text-ink-muted">
                <span>CLASS: ENGINE DEV</span>
                <span className="text-cyan">UNITY / C#</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
