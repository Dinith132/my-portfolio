import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      title: " Javascript Practicals Crash Course",
      provider: "Udemy",
      date: "2024",
      link: "https://www.udemy.com/certificate/UC-8a3dcbf8-5434-4f10-849f-fb57b3938d50/"
    },
    {
      title: "Professional Certificate in SQL and SQL for Data Analysis",
      provider: "Udemy", 
      date: "2024",
      link: "https://ude.my/UC-5a906552-72ea-4520-9cea-1c9a1a6e1e2e/"
    },
    {
      title: "Linux Terminal for beginners",
      provider: "Udemy",
      date: "2024", 
      link: "https://www.udemy.com/certificate/UC-da0a01aa-6300-4f0b-8724-895a287b6cde/"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    BSc. (Hons) in Computer Engineering
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    University of Jaffna
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Status:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Final Year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Specialization:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">AI & Embedded Systems</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Expected Graduation:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2025</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Coursework</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div>• Data Structures & Algorithms</div>
                  <div>• Machine Learning</div>
                  <div>• Embedded Systems</div>
                  <div>• Software Engineering</div>
                  <div>• Database Systems</div>
                  <div>• Computer Networks</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Professional Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {cert.provider} • {cert.date}
                        </p>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Continuous Learning
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Committed to staying current with emerging technologies and industry best practices 
                  through ongoing professional development and hands-on projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;