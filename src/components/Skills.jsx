import { motion } from 'framer-motion';
import { Code2, Layout, Server, Smartphone } from 'lucide-react';

const accents = {
  pink: { text: 'text-pink', bg: 'bg-pink/14', border: 'border-pink', hoverBorder: 'hover:border-pink', hex: '#ff2e88' },
  cyan: { text: 'text-cyan', bg: 'bg-cyan/14', border: 'border-cyan', hoverBorder: 'hover:border-cyan', hex: '#2ee6f6' },
  yellow: { text: 'text-yellow', bg: 'bg-yellow/14', border: 'border-yellow', hoverBorder: 'hover:border-yellow', hex: '#ffe14d' },
};

const skills = [
  {
    name: 'Game Development',
    icon: Layout,
    accent: 'pink',
    label: 'PRIMARY CLASS',
    items: ['Unity', 'C#', 'In-App Purchases', 'Store Deployment'],
  },
  {
    name: 'Web Development',
    icon: Server,
    accent: 'cyan',
    label: 'SUPPORT SKILL',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    name: 'Mobile App Development',
    icon: Smartphone,
    accent: 'yellow',
    label: 'CROSS-PLATFORM',
    items: ['Unity', 'React Native', '.NET'],
  },
  {
    name: 'Languages',
    icon: Code2,
    accent: 'pink',
    label: 'FLUENT IN',
    items: ['C#', 'JavaScript', 'TypeScript'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-[clamp(40px,6vw,88px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-baseline gap-4">
          <h2
            className="font-pixel text-[clamp(18px,2.6vw,28px)] text-ink"
            style={{ textShadow: '0 0 24px rgba(46,230,246,0.4)' }}
          >
            SKILL TREE
          </h2>
          <span className="font-mono text-xs tracking-[2px] text-pink">0{skills.length} UNLOCKED</span>
        </div>
        <p className="mb-10 max-w-[60ch] text-ink-muted">The kit I bring to a project, and what I reach for first.</p>

        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const accent = accents[skill.accent];
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`border-2 border-line bg-purple px-5.5 pt-6.5 pb-6 transition-colors hover:bg-purple-lift ${accent.hoverBorder}`}
                style={{ borderTop: `5px solid ${accent.hex}` }}
              >
                <div className={`mb-5 inline-flex h-[46px] w-[46px] items-center justify-center border-2 ${accent.border} ${accent.bg}`}>
                  <Icon className={`h-6 w-6 ${accent.text}`} />
                </div>
                <h3 className="mb-1.5 font-pixel text-xs leading-[1.6] text-ink">{skill.name}</h3>
                <p className="mb-4.5 font-mono text-[11px] tracking-wide text-yellow">{skill.label}</p>
                <ul className="flex flex-col gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className={`flex gap-2.5 text-sm text-ink-body`}>
                      <span className={accent.text}>▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
