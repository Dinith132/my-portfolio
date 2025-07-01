import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "AlgoXplore 1.0",
      description: "Competitive programming contest focusing on algorithmic problem solving and optimization techniques",
      date: "January 2025",
      type: "Competition",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "MoraXtreme 9.0",
      description: "Inter-university hackathon showcasing innovative solutions to real-world problems",
      date: "October 2024", 
      type: "Hackathon",
      icon: <Trophy className="w-6 h-6" />
    },
    // {
    //   title: "IESL Volunteering Projects",
    //   description: "Contributed to technology exhibitions and community outreach programs promoting STEM education",
    //   date: "2024",
    //   type: "Volunteer",
    //   icon: <Users className="w-6 h-6" />
    // }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Highlights from competitions, hackathons, and community contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-yellow-600 dark:text-yellow-400">
                  {achievement.icon}
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {achievement.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {achievement.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Competitions Participated</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies Mastered</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Achievements;