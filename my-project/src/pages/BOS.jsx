import { motion } from 'framer-motion';
import {
  Users,
  Award,
  BookOpen,
  Briefcase,
  Mail,
  Phone,
  Globe,
  Star,
  ChevronRight,
  GraduationCap,
  Building
} from 'lucide-react';

const BOS = () => {
  const boardMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Dean & Chairperson',
      department: 'Computer Science',
      qualification: 'Ph.D. (IIT Delhi)',
      experience: '25+ years',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
      email: 'dean@usict.edu',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D9488&color=fff&size=200'
    },
    {
      name: 'Prof. Anjali Sharma',
      position: 'Professor',
      department: 'Information Technology',
      qualification: 'Ph.D. (JNU)',
      experience: '20+ years',
      expertise: ['Cloud Computing', 'IoT', 'Cyber Security'],
      email: 'anjali.sharma@usict.edu',
      image: 'https://ui-avatars.com/api/?name=Anjali+Sharma&background=7C3AED&color=fff&size=200'
    },
    {
      name: 'Dr. Vikram Singh',
      position: 'Associate Professor',
      department: 'Computer Science',
      qualification: 'Ph.D. (IIIT Hyderabad)',
      experience: '15+ years',
      expertise: ['Computer Vision', 'Deep Learning', 'NLP'],
      email: 'vikram.singh@usict.edu',
      image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=DC2626&color=fff&size=200'
    },
    {
      name: 'Dr. Priya Patel',
      position: 'Associate Professor',
      department: 'Software Engineering',
      qualification: 'Ph.D. (IIT Bombay)',
      experience: '18+ years',
      expertise: ['Software Architecture', 'DevOps', 'Agile Methodologies'],
      email: 'priya.patel@usict.edu',
      image: 'https://ui-avatars.com/api/?name=Priya+Patel&background=EA580C&color=fff&size=200'
    },
    {
      name: 'Prof. Amit Verma',
      position: 'Professor',
      department: 'Data Science',
      qualification: 'Ph.D. (Stanford)',
      experience: '22+ years',
      expertise: ['Big Data', 'Statistical Analysis', 'Predictive Modeling'],
      email: 'amit.verma@usict.edu',
      image: 'https://ui-avatars.com/api/?name=Amit+Verma&background=0891B2&color=fff&size=200'
    },
    {
      name: 'Dr. Neha Gupta',
      position: 'Industry Expert',
      department: 'External Member',
      qualification: 'Ph.D. (MIT)',
      experience: 'VP Engineering, Tech Corp',
      expertise: ['Product Development', 'Innovation', 'Tech Strategy'],
      email: 'neha.external@techcorp.com',
      image: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=9333EA&color=fff&size=200'
    }
  ];

  const responsibilities = [
    {
      icon: BookOpen,
      title: 'Curriculum Development',
      description: 'Design and update course curricula to meet industry standards'
    },
    {
      icon: Award,
      title: 'Academic Standards',
      description: 'Maintain high academic standards and quality assurance'
    },
    {
      icon: Briefcase,
      title: 'Industry Collaboration',
      description: 'Foster partnerships with leading tech companies'
    },
    {
      icon: GraduationCap,
      title: 'Research Guidance',
      description: 'Oversee research projects and academic publications'
    }
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
            className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6"
          >
            <Users className="h-12 w-12 text-indigo-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Board of Studies
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished faculty members who shape the academic excellence
            and guide the future of technology education at USICT
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg inline-flex mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Board Members
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600">
                  <div className="absolute inset-0 bg-black opacity-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <div className="pt-20 pb-8 px-6">
                  <h3 className="text-2xl font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold text-center mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-500 text-center text-sm mb-4">
                    {member.department}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{member.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{member.email}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
                  >
                    View Profile
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <Building className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Advisory Committee</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our Board of Studies works closely with industry leaders and academic experts
            to ensure our curriculum remains at the forefront of technological advancement.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold"
          >
            View Full Committee
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default BOS;