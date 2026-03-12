import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

const projects = [
  {
    title: 'Merge Explorer',
    description: 'Merge Explorer is an educational augmented-reality app that brings science to life by letting users explore over 100 interactive 3D STEM simulations—like planets, volcanoes, and the human body—by holding and interacting with virtual objects (often using a Merge Cube) on their device. It’s designed to make complex science concepts tangible and engaging for students in classroom or home learning.',
    image: '/Assets/Images/Projects/Explorer.png',
    tags: ['React', 'Node.js', 'Unity', 'Swift', 'IAP'],
    github: 'https://github.com',
    demo: 'https://example.com',
    links: {iOS : 'https://apps.apple.com/us/app/merge-explorer/id1453098606' , 
            Android : 'https://play.google.com/store/apps/details?id=com.MergeCube.EDUExplorer&hl=en_US',
            Microsoft : 'https://apps.microsoft.com/detail/9nz3ss7dpkwf?hl=en-US&gl=US'}

  },
  {
    title: 'Christmas Tower Defense',
    description: 'Defend Santa’s tower from a zombie horde in Christmas Tower Defense! Answer festive trivia to stop the attacks in this fun tower defence 2d Game from ChimpVine. It’s the perfect holiday challenge for the whole family.',
    image: '/Assets/Images/Projects/TowerDefense.png',
    tags: ['Unity', 'C#', 'Game Development', '2D'],
    github: 'https://github.com',
    demo: 'https://example.com',
    // links: {iOS : 'https://example.com' , Android : 'https://play.google.com/store/apps/details?id=com.Chimpvine.TowerDefense&hl=en'}
    links: {Android : 'https://play.google.com/store/apps/details?id=com.Chimpvine.TowerDefense&hl=en'}
  }
];

export default function Projects() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
