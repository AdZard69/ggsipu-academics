import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FlaskConical,
  Monitor,
  Cpu,
  Network,
  Database,
  Shield,
  Code2,
  Wifi,
  Camera,
  ChevronRight,
  Play,
  Users,
  Clock,
  MapPin,
  Zap
} from 'lucide-react';

const Laboratories = () => {
  const [selectedLab, setSelectedLab] = useState(null);

  const labs = [
    {
      id: 1,
      name: 'Advanced Computing Lab',
      location: 'Block A, Floor 2',
      capacity: 60,
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1591238372408-a1c1d5b18704?w=800',
      equipment: [
        'High-performance workstations (Intel i9, 32GB RAM)',
        'NVIDIA RTX 4090 GPUs for ML/AI',
        'Quantum computing simulator',
        'Parallel processing clusters'
      ],
      software: ['TensorFlow', 'PyTorch', 'MATLAB', 'Ansys', 'AutoCAD'],
      timings: '9:00 AM - 8:00 PM',
      projects: ['Deep Learning Research', 'Computer Vision', 'Quantum Algorithms']
    },
    {
      id: 2,
      name: 'Network Security Lab',
      location: 'Block B, Floor 1',
      capacity: 40,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      equipment: [
        'Cisco routers and switches',
        'Firewall systems',
        'Penetration testing tools',
        'Network analyzers'
      ],
      software: ['Wireshark', 'Metasploit', 'Nmap', 'Kali Linux', 'pfSense'],
      timings: '10:00 AM - 6:00 PM',
      projects: ['Ethical Hacking', 'Network Defense', 'Security Auditing']
    },
    {
      id: 3,
      name: 'IoT & Embedded Systems Lab',
      location: 'Block C, Floor 3',
      capacity: 45,
      icon: Wifi,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      equipment: [
        'Arduino & Raspberry Pi kits',
        'ESP32/ESP8266 modules',
        'Sensor arrays',
        '3D printers for prototyping'
      ],
      software: ['Arduino IDE', 'Platform IO', 'Node-RED', 'MQTT brokers'],
      timings: '9:00 AM - 7:00 PM',
      projects: ['Smart Home Systems', 'Industrial IoT', 'Wearable Devices']
    },
    {
      id: 4,
      name: 'Data Science Lab',
      location: 'Block A, Floor 3',
      capacity: 50,
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      equipment: [
        'Big Data clusters',
        'GPU servers for ML',
        'Cloud computing access',
        'Data visualization walls'
      ],
      software: ['Apache Spark', 'Hadoop', 'Tableau', 'Power BI', 'R Studio'],
      timings: '24/7 Access',
      projects: ['Predictive Analytics', 'Big Data Processing', 'Business Intelligence']
    },
    {
      id: 5,
      name: 'Software Development Lab',
      location: 'Block B, Floor 2',
      capacity: 55,
      icon: Code2,
      color: 'from-indigo-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
      equipment: [
        'Dual-monitor setups',
        'Mac and Windows workstations',
        'Mobile development stations',
        'Version control servers'
      ],
      software: ['VS Code', 'IntelliJ IDEA', 'Docker', 'Kubernetes', 'Jenkins'],
      timings: '8:00 AM - 10:00 PM',
      projects: ['Full-stack Development', 'Mobile Apps', 'DevOps Pipeline']
    },
    {
      id: 6,
      name: 'Virtual Reality Lab',
      location: 'Block C, Floor 1',
      capacity: 30,
      icon: Camera,
      color: 'from-teal-500 to-green-500',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800',
      equipment: [
        'Meta Quest 3 headsets',
        'HTC Vive Pro systems',
        'Motion capture suits',
        'Haptic feedback devices'
      ],
      software: ['Unity 3D', 'Unreal Engine', 'Blender', 'Maya', 'A-Frame'],
      timings: '11:00 AM - 7:00 PM',
      projects: ['Educational VR', 'Virtual Tours', 'Gaming Applications']
    }
  ];

  const features = [
    { icon: Zap, label: '24/7 Access', description: 'Round-the-clock availability for research' },
    { icon: Wifi, label: 'High-Speed Internet', description: '1 Gbps dedicated bandwidth' },
    { icon: Shield, label: 'Secure Environment', description: 'Biometric access control' },
    { icon: Users, label: 'Expert Support', description: 'Technical assistance available' }
  ];

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
            className="inline-flex p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-6"
          >
            <FlaskConical className="h-12 w-12 text-orange-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              State-of-the-Art Laboratories
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge laboratories equipped with the latest technology
            for hands-on learning and innovative research
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-3">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-1">{feature.label}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab, index) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedLab(lab)}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 left-4 p-3 bg-gradient-to-r ${lab.color} rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-5 w-5 text-gray-700" />
                  </motion.button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{lab.name}</h3>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {lab.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Users className="h-4 w-4" />
                      {lab.capacity} seats
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      {lab.timings}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.projects.slice(0, 2).map((project, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 rounded-full text-xs font-medium"
                        >
                          {project}
                        </span>
                      ))}
                      {lab.projects.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{lab.projects.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${lab.color} text-white rounded-lg font-semibold flex items-center justify-center gap-2`}
                  >
                    Virtual Tour
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {selectedLab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedLab(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64">
                <img
                  src={selectedLab.image}
                  alt={selectedLab.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedLab(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedLab.name}</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Equipment & Hardware</h3>
                    <ul className="space-y-2">
                      {selectedLab.equipment.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Software & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLab.software.map((soft, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 rounded-lg text-sm font-medium"
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-3">Research Projects</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedLab.projects.map((project, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4">
                        <Monitor className="h-8 w-8 text-orange-600 mb-2" />
                        <p className="font-medium">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-3 bg-gradient-to-r ${selectedLab.color} text-white rounded-lg font-semibold`}
                  >
                    Book Lab Session
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold"
                  >
                    360° Virtual Tour
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default Laboratories;