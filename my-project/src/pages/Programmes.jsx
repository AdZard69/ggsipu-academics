import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BookOpen,
  Clock,
  Users,
  Target,
  Award,
  ChevronRight,
  Filter,
  GraduationCap,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Cpu,
  Globe,
  TrendingUp
} from 'lucide-react';

const Programmes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programmes = [
    {
      id: 1,
      category: 'undergraduate',
      title: 'B.Tech Computer Science',
      duration: '4 Years',
      seats: '120',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive program covering core CS fundamentals, software development, and emerging technologies',
      highlights: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Machine Learning',
        'Web Development'
      ],
      eligibility: '10+2 with Physics, Chemistry, Mathematics (Min 60%)',
      careerProspects: ['Software Developer', 'System Analyst', 'Data Scientist', 'Tech Consultant']
    },
    {
      id: 2,
      category: 'undergraduate',
      title: 'B.Tech Information Technology',
      duration: '4 Years',
      seats: '60',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      description: 'Focus on IT infrastructure, networking, and modern information systems',
      highlights: [
        'Network Administration',
        'Database Management',
        'Cloud Computing',
        'IT Security'
      ],
      eligibility: '10+2 with Physics, Chemistry, Mathematics (Min 60%)',
      careerProspects: ['Network Administrator', 'Cloud Architect', 'IT Manager', 'Security Analyst']
    },
    {
      id: 3,
      category: 'postgraduate',
      title: 'M.Tech Computer Science',
      duration: '2 Years',
      seats: '30',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      description: 'Advanced studies in computer science with specialization options',
      highlights: [
        'Advanced Algorithms',
        'Artificial Intelligence',
        'Research Methodology',
        'Thesis Project'
      ],
      eligibility: 'B.Tech/BE in CS/IT or equivalent (Min 60%)',
      careerProspects: ['Research Scientist', 'ML Engineer', 'Tech Lead', 'PhD Candidate']
    },
    {
      id: 4,
      category: 'postgraduate',
      title: 'M.Tech Data Science',
      duration: '2 Years',
      seats: '40',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      description: 'Specialized program in big data, analytics, and machine learning',
      highlights: [
        'Big Data Analytics',
        'Statistical Modeling',
        'Deep Learning',
        'Business Intelligence'
      ],
      eligibility: 'Bachelor\'s in CS/IT/Mathematics/Statistics (Min 60%)',
      careerProspects: ['Data Scientist', 'ML Specialist', 'Analytics Manager', 'AI Researcher']
    },
    {
      id: 5,
      category: 'postgraduate',
      title: 'M.Tech Cyber Security',
      duration: '2 Years',
      seats: '25',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      description: 'Comprehensive cybersecurity program covering ethical hacking and defense',
      highlights: [
        'Ethical Hacking',
        'Cryptography',
        'Security Auditing',
        'Forensics'
      ],
      eligibility: 'B.Tech in CS/IT/ECE or equivalent (Min 60%)',
      careerProspects: ['Security Architect', 'Penetration Tester', 'Security Consultant', 'CISO']
    },
    {
      id: 6,
      category: 'doctoral',
      title: 'Ph.D. Computer Science',
      duration: '3-5 Years',
      seats: '15',
      icon: Award,
      color: 'from-teal-500 to-green-500',
      description: 'Research-oriented doctoral program in cutting-edge CS domains',
      highlights: [
        'Original Research',
        'Publications',
        'Teaching Assistantship',
        'International Conferences'
      ],
      eligibility: 'M.Tech/ME in relevant field with 70% or NET/GATE qualification',
      careerProspects: ['Professor', 'Principal Researcher', 'R&D Head', 'Chief Scientist']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Programmes', count: programmes.length },
    { id: 'undergraduate', label: 'Undergraduate', count: programmes.filter(p => p.category === 'undergraduate').length },
    { id: 'postgraduate', label: 'Postgraduate', count: programmes.filter(p => p.category === 'postgraduate').length },
    { id: 'doctoral', label: 'Doctoral', count: programmes.filter(p => p.category === 'doctoral').length }
  ];

  const filteredProgrammes = selectedCategory === 'all'
    ? programmes
    : programmes.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6"
          >
            <BookOpen className="h-12 w-12 text-indigo-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Academic Programmes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of undergraduate, postgraduate, and doctoral programs
            designed to shape the tech leaders of tomorrow
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <Filter className="h-4 w-4" />
              {cat.label}
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {cat.count}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProgrammes.map((programme, index) => {
            const Icon = programme.icon;
            return (
              <motion.div
                key={programme.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${programme.color} p-6 relative`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <Icon className="h-16 w-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white">{programme.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1 text-white/90 text-sm">
                      <Clock className="h-4 w-4" />
                      {programme.duration}
                    </span>
                    <span className="flex items-center gap-1 text-white/90 text-sm">
                      <Users className="h-4 w-4" />
                      {programme.seats} Seats
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{programme.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-indigo-600" />
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {programme.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-green-600" />
                      Eligibility
                    </h4>
                    <p className="text-sm text-gray-600">{programme.eligibility}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                      Career Prospects
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {programme.careerProspects.map((career, i) => (
                        <span key={i} className="text-xs text-gray-600">
                          • {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${programme.color} text-white rounded-lg font-semibold flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition-opacity`}
                  >
                    View Details
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Take the first step towards your dream career in technology.
            Apply now for our world-class programmes.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold"
            >
              Apply Online
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold border-2 border-white/30"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Programmes;