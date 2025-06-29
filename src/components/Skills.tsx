import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Cpu, Wrench, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "C"]
    },
    {
      title: "Backend & APIs",
      icon: <Database className="w-6 h-6" />,
      skills: ["Spring Boot", "REST APIs", "PostgreSQL", "MySQL", "Node.js"]
    },
    {
      title: "ML/AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["YOLO", "LSTM", "HuggingFace", "SHAP", "LIME", "Integrated Gradients"]
    },
    {
      title: "Embedded",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["ESP32 (ESP-IDF)", "AVR (ATmega)", "Arduino", "Bluetooth", "IoT"]
    },
    {
      title: "Frontend",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["React", "Flutter", "HTML/CSS", "Tailwind CSS", "WebRTC"]
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Docker", "GitHub Actions", "JUnit", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Problem Solving</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Analytical thinking and systematic approach to complex technical challenges
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">System Design</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Architecting scalable and maintainable software solutions
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Team Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Effective communication and collaboration in cross-functional teams
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;