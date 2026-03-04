import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Game Development', icon: <Layout className="w-8 h-8 text-indigo-400" />, desc: 'Unity, C#, IAP, Deployment' },
  { name: 'Web Development', icon: <Server className="w-8 h-8 text-cyan-400" />, desc: 'HTML, CSS, JavaScript,React' },
  { name: 'Mobile App Development', icon: <Smartphone className="w-8 h-8 text-indigo-400" />, desc: 'Unity,React-Native, .NET' },
  { name: 'Languages', icon: <Code2 className="w-8 h-8 text-cyan-400" />, desc: 'JavaScript, TypeScript, C#' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build robust applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors"
            >
              <div className="mb-4 bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-slate-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
