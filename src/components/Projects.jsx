import { motion } from 'framer-motion';

const stripColors = ['#ff2e88', '#2ee6f6', '#ffe14d'];

const projects = [
  {
    title: 'Unity-AI Assistant',
    description:
      'Built an interactive Unity application featuring a 3D AI-powered NPC capable of natural language conversation.',
    image: '/Assets/Images/Projects/AIAssistant.png',
    tags: ['Unity', 'C#', 'LLM Integration', 'Whisper STT', 'TTS'],
    links: {},
  },
  {
    title: 'Christmas Tower Defense',
    description:
      'Defend Santa’s tower from a zombie horde in Christmas Tower Defense! Answer festive trivia to stop the attacks in this fun tower defence 2d Game from ChimpVine. It’s the perfect holiday challenge for the whole family.',
    image: '/Assets/Images/Projects/TowerDefense.png',
    tags: ['Unity', 'C#', 'Game Development', '2D'],
    links: {
      iOS: 'https://example.com',
      Android: 'https://play.google.com/store/apps/details?id=com.Chimpvine.TowerDefense&hl=en',
    },
  },
  {
    title: 'VR Photo Gallery',
    description:
      'Built an interactive VR gallery in Unity where users can walk through a virtual room to view images. Implemented runtime image loading, allowing photos to be uploaded and updated without rebuilding the application.',
    image: '/Assets/Images/Projects/VRGallery.png',
    tags: ['Unity', 'XRToolkit', 'VR'],
    links: {},
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-[clamp(40px,6vw,88px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-baseline gap-4">
          <h2
            className="font-pixel text-[clamp(18px,2.6vw,28px)] text-ink"
            style={{ textShadow: '0 0 24px rgba(255,225,77,0.35)' }}
          >
            GAME LIBRARY
          </h2>
          <span className="font-mono text-xs tracking-[2px] text-pink">0{projects.length} CARTRIDGES</span>
        </div>
        <p className="mb-10 max-w-[60ch] text-ink-muted">
          Shipped work — engines, mechanics, and the things I learned building them.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const strip = stripColors[index % stripColors.length];
            const linkEntries = Object.entries(project.links);
            const isAppPair = linkEntries.length === 2 && linkEntries.every(([name]) => name === 'iOS' || name === 'Android');

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col border-2 border-line bg-purple transition-colors hover:border-[var(--card-accent)]"
                style={{ '--card-accent': strip }}
              >
                <div
                  className="flex h-6.5 items-center gap-1.5 px-3.5"
                  style={{ background: strip }}
                >
                  <span className="h-2 w-8.5 bg-void" />
                  <span className="h-2 w-8.5 bg-void" />
                  <span className="h-2 w-8.5 bg-void" />
                  <span className="ml-auto font-pixel text-[8px] text-void">CART 0{index + 1}</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 px-5.5 pt-6.5 pb-6">
                  <div
                    className="aspect-video border border-line"
                    style={{ background: 'linear-gradient(180deg, #241043 0%, #0d0221 100%)' }}
                  >
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-pixel text-[13px] leading-[1.6] text-yellow">{project.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-ink-body">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-cyan px-2.5 py-1.5 font-mono text-[11px] text-cyan">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isAppPair ? (
                    <div className="grid grid-cols-2 gap-2.5">
                      {linkEntries.map(([name, url]) => (
                        <a
                          key={name}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            name === 'iOS'
                              ? 'border-b-4 border-[#a68d0f] bg-yellow px-2 py-3.5 text-center font-pixel text-[10px] text-void transition-colors hover:bg-pink'
                              : 'border-2 border-yellow px-2 py-3 text-center font-pixel text-[10px] text-yellow transition-colors hover:bg-yellow/14'
                          }
                        >
                          {name.toUpperCase()}
                        </a>
                      ))}
                    </div>
                  ) : (
                    linkEntries.length > 0 && (
                      <div className="flex flex-col gap-2.5">
                        {linkEntries.map(([name, url]) => (
                          <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="border-2 border-yellow px-4 py-3 text-center font-pixel text-[10px] tracking-wide text-yellow transition-colors hover:bg-yellow/14"
                          >
                            ▶ {name.toUpperCase()}
                          </a>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
