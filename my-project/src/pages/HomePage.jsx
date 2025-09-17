import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  FlaskConical,
  Calendar,
  Microscope,
  Coins,
  ArrowRight,
  Star,
  Award,
  Target,
  Sparkles
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      path: '/bos',
      title: 'Board of Studies',
      description: 'Expert faculty members guiding academic excellence',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      path: '/programmes',
      title: 'Academic Programmes',
      description: 'Comprehensive degree programs in technology',
      icon: BookOpen,
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      path: '/scheme-syllabus',
      title: 'Scheme & Syllabus',
      description: 'Detailed curriculum and course structures',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      path: '/laboratories',
      title: 'State-of-Art Labs',
      description: 'Modern facilities for practical learning',
      icon: FlaskConical,
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      path: '/academic-calendar',
      title: 'Academic Calendar',
      description: 'Important dates and academic schedule',
      icon: Calendar,
      gradient: 'from-indigo-500 to-blue-500',
      delay: 0.5
    },
    {
      path: '/research',
      title: 'Research Excellence',
      description: 'Cutting-edge research and publications',
      icon: Microscope,
      gradient: 'from-teal-500 to-green-500',
      delay: 0.6
    },
    {
      path: '/grants-schemes',
      title: 'Grants & Schemes',
      description: 'Funding opportunities and scholarships',
      icon: Coins,
      gradient: 'from-yellow-500 to-orange-500',
      delay: 0.7
    }
  ];

  const stats = [
    { value: '5000+', label: 'Students', icon: GraduationCap },
    { value: '100+', label: 'Faculty', icon: Award },
    { value: '50+', label: 'Research Papers', icon: FileText },
    { value: '95%', label: 'Placement Rate', icon: Target }
  ];

  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden py-20 px-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 opacity-10" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Welcome to USICT Academics</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Empowering Minds
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shaping Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover world-class education in Information Technology and Computer Science
            at the University School of Information & Communication Technology
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Explore Programmes
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl opacity-20"
        />
      </motion.section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive academic resources and facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.path}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link to={feature.path}>
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -mr-16 -mt-16 opacity-50" />

                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>

                      <div className="flex items-center text-indigo-600 font-semibold">
                        <span>Learn More</span>
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students in shaping the future of technology
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Apply Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;