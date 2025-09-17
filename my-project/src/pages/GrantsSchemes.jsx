import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Coins,
  Award,
  GraduationCap,
  Target,
  TrendingUp,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  Filter,
  Download,
  IndianRupee,
  Trophy,
  BookOpen,
  Sparkles
} from 'lucide-react';

const GrantsSchemes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedScheme, setExpandedScheme] = useState(null);

  const categories = [
    { id: 'all', label: 'All Schemes', icon: Sparkles },
    { id: 'scholarship', label: 'Scholarships', icon: GraduationCap },
    { id: 'research', label: 'Research Grants', icon: Target },
    { id: 'startup', label: 'Startup Funding', icon: TrendingUp },
    { id: 'fellowship', label: 'Fellowships', icon: Award }
  ];

  const schemes = [
    {
      id: 1,
      category: 'scholarship',
      title: 'Merit-cum-Means Scholarship',
      amount: '₹50,000 per year',
      eligibility: 'Students with 75%+ marks and family income < ₹6 Lakhs',
      deadline: 'September 30, 2024',
      beneficiaries: '200+ students',
      status: 'open',
      benefits: [
        'Full tuition fee waiver',
        'Hostel accommodation support',
        'Book allowance ₹5,000',
        'Laptop support scheme'
      ],
      documents: [
        'Academic transcripts',
        'Income certificate',
        'Aadhar card',
        'Bank details'
      ]
    },
    {
      id: 2,
      category: 'research',
      title: 'Student Research Grant',
      amount: '₹2,00,000',
      eligibility: 'M.Tech/Ph.D. students with innovative research proposals',
      deadline: 'October 15, 2024',
      beneficiaries: '50+ projects',
      status: 'open',
      benefits: [
        'Research equipment funding',
        'Conference attendance support',
        'Publication charges coverage',
        'Patent filing assistance'
      ],
      documents: [
        'Research proposal',
        'Supervisor recommendation',
        'Budget breakdown',
        'Timeline document'
      ]
    },
    {
      id: 3,
      category: 'startup',
      title: 'Innovation & Entrepreneurship Fund',
      amount: 'Up to ₹10 Lakhs',
      eligibility: 'Students/Alumni with viable startup ideas',
      deadline: 'November 30, 2024',
      beneficiaries: '25+ startups',
      status: 'open',
      benefits: [
        'Seed funding',
        'Mentorship program',
        'Office space in incubator',
        'Legal & accounting support'
      ],
      documents: [
        'Business plan',
        'Pitch deck',
        'Team details',
        'Financial projections'
      ]
    },
    {
      id: 4,
      category: 'fellowship',
      title: 'Teaching Assistantship',
      amount: '₹15,000 per month',
      eligibility: 'PG students with good academic record',
      deadline: 'August 20, 2024',
      beneficiaries: '100+ students',
      status: 'closed',
      benefits: [
        'Monthly stipend',
        'Teaching experience',
        'Research opportunities',
        'Certificate of appreciation'
      ],
      documents: [
        'Academic records',
        'Faculty recommendation',
        'Statement of purpose',
        'CV/Resume'
      ]
    },
    {
      id: 5,
      category: 'scholarship',
      title: 'Sports Excellence Scholarship',
      amount: '₹30,000 per year',
      eligibility: 'State/National level sports achievers',
      deadline: 'September 15, 2024',
      beneficiaries: '30+ athletes',
      status: 'open',
      benefits: [
        'Training support',
        'Equipment allowance',
        'Competition travel funds',
        'Nutrition support'
      ],
      documents: [
        'Sports certificates',
        'Coach recommendation',
        'Performance records',
        'Medical fitness certificate'
      ]
    },
    {
      id: 6,
      category: 'research',
      title: 'International Conference Grant',
      amount: 'Up to ₹1,50,000',
      eligibility: 'Students with papers accepted in top conferences',
      deadline: 'Rolling basis',
      beneficiaries: '75+ students',
      status: 'open',
      benefits: [
        'Travel expenses',
        'Registration fees',
        'Accommodation support',
        'Visa assistance'
      ],
      documents: [
        'Acceptance letter',
        'Paper abstract',
        'Conference details',
        'Budget estimate'
      ]
    }
  ];

  const filteredSchemes = selectedCategory === 'all'
    ? schemes
    : schemes.filter(s => s.category === selectedCategory);

  const stats = [
    { value: '₹5 Cr+', label: 'Annual Funding', icon: Coins },
    { value: '1000+', label: 'Beneficiaries', icon: Users },
    { value: '50+', label: 'Active Schemes', icon: Trophy },
    { value: '95%', label: 'Disbursement Rate', icon: TrendingUp }
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
            className="inline-flex p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6"
          >
            <Coins className="h-12 w-12 text-orange-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Grants & Schemes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Financial support and opportunities to help you achieve your academic
            and entrepreneurial goals
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
                <div className="inline-flex p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-3">
                  <Icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <Icon className="h-5 w-5" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchemes.map((scheme, index) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{scheme.title}</h3>
                    <p className="text-3xl font-bold">{scheme.amount}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scheme.status === 'open'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {scheme.status === 'open' ? 'Open' : 'Closed'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm">
                  <Calendar className="h-4 w-4" />
                  Deadline: {scheme.deadline}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Eligibility
                  </h4>
                  <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    Beneficiaries
                  </h4>
                  <p className="text-sm text-gray-600">{scheme.beneficiaries}</p>
                </div>

                {expandedScheme === scheme.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 space-y-3"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scheme.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scheme.documents.map((doc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FileText className="h-3 w-3 text-gray-400 mt-1" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setExpandedScheme(
                      expandedScheme === scheme.id ? null : scheme.id
                    )}
                    className="flex-1 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold"
                  >
                    {expandedScheme === scheme.id ? 'Show Less' : 'View Details'}
                  </motion.button>
                  {scheme.status === 'open' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold"
                    >
                      Apply Now
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Need Financial Assistance?</h3>
              <p className="mb-6">
                Our dedicated team is here to help you find the right funding opportunities
                and guide you through the application process.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Guide
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold border-2 border-white/30"
                >
                  Contact Support
                </motion.button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <AlertCircle className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Application Help</h4>
                <p className="text-sm text-white/80">Get assistance with forms</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <BookOpen className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Guidelines</h4>
                <p className="text-sm text-white/80">Detailed documentation</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Users className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Counseling</h4>
                <p className="text-sm text-white/80">One-on-one guidance</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Trophy className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Success Stories</h4>
                <p className="text-sm text-white/80">Learn from others</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default GrantsSchemes;