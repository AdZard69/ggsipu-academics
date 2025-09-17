import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FileText,
  Download,
  Book,
  Filter,
  Search,
  Calendar,
  ChevronRight,
  Eye,
  FileCheck,
  Layers,
  Archive
} from 'lucide-react';

const SchemeSyllabus = () => {
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const syllabusData = [
    {
      id: 1,
      program: 'B.Tech CS',
      semester: '1st Semester',
      subjects: [
        { name: 'Mathematics I', code: 'CS101', credits: 4, type: 'Theory' },
        { name: 'Physics', code: 'CS102', credits: 3, type: 'Theory' },
        { name: 'Programming in C', code: 'CS103', credits: 4, type: 'Theory + Lab' },
        { name: 'Digital Electronics', code: 'CS104', credits: 3, type: 'Theory' },
        { name: 'Communication Skills', code: 'CS105', credits: 2, type: 'Theory' }
      ],
      totalCredits: 16,
      downloadLink: '#',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      program: 'B.Tech CS',
      semester: '2nd Semester',
      subjects: [
        { name: 'Mathematics II', code: 'CS201', credits: 4, type: 'Theory' },
        { name: 'Data Structures', code: 'CS202', credits: 4, type: 'Theory + Lab' },
        { name: 'Computer Organization', code: 'CS203', credits: 3, type: 'Theory' },
        { name: 'Object-Oriented Programming', code: 'CS204', credits: 4, type: 'Theory + Lab' },
        { name: 'Environmental Science', code: 'CS205', credits: 2, type: 'Theory' }
      ],
      totalCredits: 17,
      downloadLink: '#',
      lastUpdated: '2024-01-15'
    },
    {
      id: 3,
      program: 'B.Tech IT',
      semester: '1st Semester',
      subjects: [
        { name: 'Mathematics I', code: 'IT101', credits: 4, type: 'Theory' },
        { name: 'Introduction to IT', code: 'IT102', credits: 3, type: 'Theory' },
        { name: 'Programming Fundamentals', code: 'IT103', credits: 4, type: 'Theory + Lab' },
        { name: 'Computer Networks', code: 'IT104', credits: 3, type: 'Theory' },
        { name: 'Technical Writing', code: 'IT105', credits: 2, type: 'Theory' }
      ],
      totalCredits: 16,
      downloadLink: '#',
      lastUpdated: '2024-01-20'
    },
    {
      id: 4,
      program: 'M.Tech CS',
      semester: '1st Semester',
      subjects: [
        { name: 'Advanced Algorithms', code: 'MCS101', credits: 4, type: 'Theory' },
        { name: 'Machine Learning', code: 'MCS102', credits: 4, type: 'Theory + Lab' },
        { name: 'Research Methodology', code: 'MCS103', credits: 3, type: 'Theory' },
        { name: 'Elective I', code: 'MCS104', credits: 3, type: 'Theory' },
        { name: 'Seminar', code: 'MCS105', credits: 2, type: 'Practical' }
      ],
      totalCredits: 16,
      downloadLink: '#',
      lastUpdated: '2024-02-01'
    }
  ];

  const examScheme = [
    {
      component: 'Internal Assessment',
      weightage: '30%',
      description: 'Continuous evaluation through assignments, quizzes, and mid-term exams',
      icon: FileCheck
    },
    {
      component: 'External Examination',
      weightage: '70%',
      description: 'End-semester examination conducted by the university',
      icon: FileText
    },
    {
      component: 'Practical/Lab Work',
      weightage: 'As per course',
      description: 'Hands-on practical sessions and project work',
      icon: Layers
    },
    {
      component: 'Project/Dissertation',
      weightage: 'Final Year',
      description: 'Major project in the final year of the program',
      icon: Archive
    }
  ];

  const programs = ['all', 'B.Tech CS', 'B.Tech IT', 'M.Tech CS'];

  const filteredSyllabus = syllabusData.filter(item => {
    const matchesProgram = selectedProgram === 'all' || item.program === selectedProgram;
    const matchesSearch = item.subjects.some(subject =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesProgram && (searchTerm === '' || matchesSearch);
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
            className="inline-flex p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6"
          >
            <FileText className="h-12 w-12 text-emerald-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Scheme & Syllabus
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive course structures, credit systems, and examination schemes
            for all our academic programs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Examination Scheme</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examScheme.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-3">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{scheme.component}</h3>
                  <p className="text-2xl font-bold text-emerald-600 mb-2">{scheme.weightage}</p>
                  <p className="text-sm text-gray-600">{scheme.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search subjects or course codes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            {programs.map((program) => (
              <motion.button
                key={program}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProgram(program)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  selectedProgram === program
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {program === 'all' ? 'All Programs' : program}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredSyllabus.map((syllabus, index) => (
            <motion.div
              key={syllabus.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{syllabus.program}</h3>
                    <p className="text-white/90">{syllabus.semester}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">{syllabus.totalCredits}</p>
                    <p className="text-sm text-white/80">Total Credits</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Calendar className="h-4 w-4" />
                  <span>Last Updated: {syllabus.lastUpdated}</span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Subjects</h4>
                <div className="space-y-3 mb-6">
                  {syllabus.subjects.map((subject, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{subject.name}</p>
                        <p className="text-sm text-gray-500">
                          {subject.code} • {subject.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          {subject.credits} Credits
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center"
        >
          <Book className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Complete Academic Resources</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Access detailed syllabi, course outcomes, reference books, and evaluation criteria
            for all programs and semesters
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold"
          >
            Download Complete Handbook
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SchemeSyllabus;