import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems with explainable AI techniques"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Embedded Systems",
      description: "Creating IoT solutions and embedded applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Open Source",
      description: "Contributing to the developer community through collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://dinith132.github.io/my-portfolio/img/img1.jpg"
                  alt="Dinith Priyankara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-20"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Passionate about intelligent, scalable, impactful technology
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a final-year Computer Engineering undergraduate with hands-on experience in AI, 
                embedded systems, and real-world backend development. I believe in creating technology 
                that not only solves problems but also makes a meaningful impact on people's lives.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey spans from building intelligent web applications to developing embedded 
                systems that bridge the physical and digital worlds. I'm particularly passionate 
                about explainable AI and creating systems that users can understand and trust.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;