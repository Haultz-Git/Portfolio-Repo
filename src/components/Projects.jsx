import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  // {
  //   title: 'Merge Explorer',
  //   description: 'Merge Explorer is an educational augmented-reality app that brings science to life by letting users explore over 100 interactive 3D STEM simulations—like planets, volcanoes, and the human body—by holding and interacting with virtual objects (often using a Merge Cube) on their device. It’s designed to make complex science concepts tangible and engaging for students in classroom or home learning.',
  //   image: '/Assets/Images/Projects/Explorer.png',
  //   tags: ['React', 'Node.js', 'Unity', 'Swift', 'IAP'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   links: {iOS : 'https://apps.apple.com/us/app/merge-explorer/id1453098606' , 
  //           Android : 'https://play.google.com/store/apps/details?id=com.MergeCube.EDUExplorer&hl=en_US',
  //           Microsoft : 'https://apps.microsoft.com/detail/9nz3ss7dpkwf?hl=en-US&gl=US'}

  // },
  {
    title: 'Unity-AI Assistant',
    description: 'Built an interactive Unity application featuring a 3D AI-powered NPC capable of natural language conversation.',
    image: '/Assets/Images/Projects/AIAssistant.png',
    tags: ['Unity', 'C#', 'LLM Integration', 'Whisper STT', 'TTS'],
    //github: 'https://github.com',
    //demo: 'https://example.com',
    links: {}
    },
  {
    title: 'Christmas Tower Defense',
    description: 'Defend Santa’s tower from a zombie horde in Christmas Tower Defense! Answer festive trivia to stop the attacks in this fun tower defence 2d Game from ChimpVine. It’s the perfect holiday challenge for the whole family.',
    image: '/Assets/Images/Projects/TowerDefense.png',
    tags: ['Unity', 'C#', 'Game Development', '2D'],
    //github: 'https://github.com',
    //demo: 'https://example.com',
    links: {iOS : 'https://example.com' , Android : 'https://play.google.com/store/apps/details?id=com.Chimpvine.TowerDefense&hl=en'}
    },
  {
    title: 'VR Photo Gallery',
    description: 'Built an interactive VR gallery in Unity where users can walk through a virtual room to view images. Implemented runtime image loading, allowing photos to be uploaded and updated without rebuilding the application.',
    image: '/Assets/Images/Projects/VRGallery.png',
    tags: ['Unity', 'XRToolkit','VR'],
    //github: 'https://github.com',
    //demo: 'https://example.com',
    links: {}
    }
];

export default function Projects() {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(projects.length - itemsPerView, 0);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (maxIndex === 0) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (Math.min(i, maxIndex) + 1) % (maxIndex + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const goPrev = () => setIndex((safeIndex - 1 + maxIndex + 1) % (maxIndex + 1));
  const goNext = () => setIndex((safeIndex + 1) % (maxIndex + 1));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, highlighting my skills in full-stack development and UI/UX design.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${safeIndex * (100 / itemsPerView)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="px-3"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {Object.entries(project.links).map(([name, url]) => (
                        <a
                          key={name}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                        >
                          <Link size={16} />
                          {name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous projects"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next projects"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
