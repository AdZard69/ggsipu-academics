import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Microscope,
  BookOpen,
  TrendingUp,
  Award,
  Users,
  FileText,
  Globe,
  Lightbulb,
  BarChart3,
  ExternalLink,
  Filter,
  Search,
  Calendar,
  Target
} from 'lucide-react';

const Research = () => {
  const [selectedArea, setSelectedArea] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const researchAreas = [
    { id: 'all', label: 'All Areas' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'iot', label: 'Internet of Things' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'cloud', label: 'Cloud Computing' }
  ];

  const publications = [
    {
      id: 1,
      title: 'Deep Learning Approaches for Medical Image Analysis: A Comprehensive Survey',
      authors: ['Dr. Rajesh Kumar', 'Dr. Priya Patel', 'A. Singh'],
      journal: 'IEEE Transactions on Medical Imaging',
      year: 2024,
      citations: 156,
      area: 'ai-ml',
      impact: 8.3,
      type: 'Journal'
    },
    {
      id: 2,
      title: 'Quantum-Resistant Cryptographic Protocols for IoT Networks',
      authors: ['Prof. Anjali Sharma', 'V. Gupta'],
      journal: 'ACM Computing Surveys',
      year: 2024,
      citations: 89,
      area: 'cybersecurity',
      impact: 7.2,
      type: 'Journal'
    },
    {
      id: 3,
      title: 'Blockchain-Based Supply Chain Management: Implementation and Challenges',
      authors: ['Dr. Vikram Singh', 'R. Mehta', 'S. Kumar'],
      journal: 'International Conference on Blockchain Technology',
      year: 2023,
      citations: 45,
      area: 'blockchain',
      impact: 5.5,
      type: 'Conference'
    },
    {
      id: 4,
      title: 'Edge Computing Optimization for Real-time IoT Applications',
      authors: ['Prof. Amit Verma', 'N. Sharma'],
      journal: 'Journal of Cloud Computing',
      year: 2024,
      citations: 67,
      area: 'cloud',
      impact: 6.8,
      type: 'Journal'
    },
    {
      id: 5,
      title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',
      authors: ['Dr. Neha Gupta', 'P. Jain', 'M. Agarwal'],
      journal: 'Nature Machine Intelligence',
      year: 2023,
      citations: 234,
      area: 'ai-ml',
      impact: 9.1,
      type: 'Journal'
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Smart Healthcare System',
      pi: 'Dr. Rajesh Kumar',
      funding: '₹45 Lakhs',
      agency: 'DST',
      duration: '2023-2026',
      status: 'ongoing',
      area: 'ai-ml'
    },
    {
      title: 'Secure IoT Framework for Smart Cities',
      pi: 'Prof. Anjali Sharma',
      funding: '₹32 Lakhs',
      agency: 'MEITY',
      duration: '2022-2025',
      status: 'ongoing',
      area: 'iot'
    },
    {
      title: 'Quantum Computing Applications in Cryptography',
      pi: 'Dr. Vikram Singh',
      funding: '₹58 Lakhs',
      agency: 'DRDO',
      duration: '2023-2025',
      status: 'ongoing',
      area: 'cybersecurity'
    }
  ];

  const stats = [
    { value: '250+', label: 'Publications', icon: FileText, color: 'blue' },
    { value: '45+', label: 'Funded Projects', icon: Target, color: 'green' },
    { value: '₹5 Cr+', label: 'Research Funding', icon: TrendingUp, color: 'purple' },
    { value: '15+', label: 'Patents Filed', icon: Award, color: 'orange' }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesArea = selectedArea === 'all' || pub.area === selectedArea;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesArea && matchesSearch;
  });

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
            className="inline-flex p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6"
          >
            <Microscope className="h-12 w-12 text-purple-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Research Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering research in cutting-edge technologies with global impact
            and industry collaboration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r from-${stat.color}-100 to-${stat.color}-200 rounded-full mb-3`}>
                  <Icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex-1">Recent Publications</h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
              >
                {researchAreas.map(area => (
                  <option key={area.id} value={area.id}>{area.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-1 text-gray-500">
                        <BookOpen className="h-4 w-4" />
                        {pub.journal}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {pub.year}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <BarChart3 className="h-4 w-4" />
                        {pub.citations} citations
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        Impact: {pub.impact}
                      </span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                        {pub.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Ongoing Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-purple-500 pl-4 py-2"
                >
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <span>PI: {project.pi}</span>
                    <span>Funding: {project.funding}</span>
                    <span>Agency: {project.agency}</span>
                    <span>Duration: {project.duration}</span>
                  </div>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    {project.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Research Areas</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Artificial Intelligence', icon: Lightbulb, count: 45 },
                { name: 'Machine Learning', icon: BarChart3, count: 38 },
                { name: 'Cybersecurity', icon: Award, count: 28 },
                { name: 'IoT & Smart Systems', icon: Globe, count: 32 },
                { name: 'Cloud Computing', icon: Target, count: 25 },
                { name: 'Blockchain Tech', icon: Users, count: 18 }
              ].map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
                  >
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{area.name}</p>
                      <p className="text-sm text-gray-500">{area.count} Publications</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Collaborate With Us</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our research community and contribute to groundbreaking innovations
            in technology and computer science.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold"
            >
              Research Opportunities
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold border-2 border-white/30"
            >
              Industry Partnership
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Research;