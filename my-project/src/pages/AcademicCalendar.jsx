import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  Briefcase,
  PartyPopper,
  FileText,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Bell
} from 'lucide-react';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('August');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const months = [
    'August', 'September', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June', 'July'
  ];

  const eventCategories = [
    { id: 'all', label: 'All Events', color: 'gray' },
    { id: 'academic', label: 'Academic', color: 'blue', icon: BookOpen },
    { id: 'examination', label: 'Examinations', color: 'red', icon: FileText },
    { id: 'holiday', label: 'Holidays', color: 'green', icon: PartyPopper },
    { id: 'cultural', label: 'Cultural', color: 'purple', icon: Trophy },
    { id: 'placement', label: 'Placement', color: 'orange', icon: Briefcase }
  ];

  const events = {
    August: [
      {
        date: '01',
        day: 'Thursday',
        title: 'Semester Begins',
        category: 'academic',
        description: 'Commencement of odd semester for all programs',
        time: '9:00 AM',
        venue: 'All Departments'
      },
      {
        date: '15',
        day: 'Thursday',
        title: 'Independence Day',
        category: 'holiday',
        description: 'National Holiday - Flag hoisting ceremony',
        time: '8:00 AM',
        venue: 'Main Ground'
      },
      {
        date: '20',
        day: 'Tuesday',
        title: 'Orientation Program',
        category: 'academic',
        description: 'Welcome session for new students',
        time: '10:00 AM - 4:00 PM',
        venue: 'Auditorium'
      }
    ],
    September: [
      {
        date: '05',
        day: 'Thursday',
        title: 'Teacher\'s Day',
        category: 'cultural',
        description: 'Celebration and appreciation for faculty',
        time: '2:00 PM',
        venue: 'Seminar Hall'
      },
      {
        date: '10-14',
        day: 'Mon-Fri',
        title: 'Mid-Semester Exams',
        category: 'examination',
        description: 'Internal assessment for all courses',
        time: 'As per schedule',
        venue: 'Examination Halls'
      },
      {
        date: '25',
        day: 'Wednesday',
        title: 'Tech Fest 2024',
        category: 'cultural',
        description: 'Annual technical festival',
        time: 'All Day',
        venue: 'Campus Wide'
      }
    ],
    October: [
      {
        date: '02',
        day: 'Wednesday',
        title: 'Gandhi Jayanti',
        category: 'holiday',
        description: 'National Holiday',
        time: 'Holiday',
        venue: '-'
      },
      {
        date: '15-20',
        day: 'Tue-Sun',
        title: 'Placement Drive',
        category: 'placement',
        description: 'Campus recruitment by top companies',
        time: '9:00 AM - 6:00 PM',
        venue: 'Placement Cell'
      },
      {
        date: '24',
        day: 'Thursday',
        title: 'Diwali Break Begins',
        category: 'holiday',
        description: 'Festival holidays',
        time: '-',
        venue: '-'
      }
    ]
  };

  const upcomingEvents = [
    {
      title: 'Project Submission Deadline',
      date: 'Sep 30, 2024',
      category: 'academic',
      priority: 'high'
    },
    {
      title: 'Workshop on AI/ML',
      date: 'Oct 5, 2024',
      category: 'academic',
      priority: 'medium'
    },
    {
      title: 'Sports Week',
      date: 'Nov 10-15, 2024',
      category: 'cultural',
      priority: 'low'
    }
  ];

  const getCategoryColor = (category) => {
    const cat = eventCategories.find(c => c.id === category);
    return cat ? cat.color : 'gray';
  };

  const filteredEvents = selectedCategory === 'all'
    ? events[selectedMonth] || []
    : (events[selectedMonth] || []).filter(e => e.category === selectedCategory);

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
            className="inline-flex p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-6"
          >
            <Calendar className="h-12 w-12 text-indigo-600" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Academic Calendar 2024-25
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with important dates, events, and academic schedules
            throughout the academic year
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Monthly View</h2>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const currentIndex = months.indexOf(selectedMonth);
                      if (currentIndex > 0) {
                        setSelectedMonth(months[currentIndex - 1]);
                      }
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const currentIndex = months.indexOf(selectedMonth);
                      if (currentIndex < months.length - 1) {
                        setSelectedMonth(months[currentIndex + 1]);
                      }
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-6">
                {months.map((month) => (
                  <motion.button
                    key={month}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMonth(month)}
                    className={`py-2 px-3 rounded-lg font-medium transition-all ${
                      selectedMonth === month
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {month}
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {eventCategories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.icon && <cat.icon className="h-4 w-4" />}
                    {cat.label}
                  </motion.button>
                ))}
              </div>

              <div className="space-y-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`border-l-4 border-${getCategoryColor(event.category)}-500 bg-gray-50 rounded-r-lg p-4 hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-2xl font-bold text-${getCategoryColor(event.category)}-600`}>
                              {event.date}
                            </span>
                            <span className="text-gray-500">{event.day}</span>
                            <span className={`px-2 py-1 bg-${getCategoryColor(event.category)}-100 text-${getCategoryColor(event.category)}-700 rounded-full text-xs font-medium`}>
                              {event.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                          <p className="text-gray-600 mb-2">{event.description}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            {event.time !== '-' && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </span>
                            )}
                            {event.venue !== '-' && (
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.venue}
                              </span>
                            )}
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-white rounded-lg transition-colors"
                        >
                          <Bell className="h-5 w-5 text-gray-400" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    No events scheduled for {selectedMonth}
                  </p>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Download Full Calendar</h3>
                <Download className="h-6 w-6" />
              </div>
              <p className="mb-4">
                Get the complete academic calendar with all events, holidays, and important dates.
              </p>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold"
                >
                  PDF Format
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/20 text-white rounded-lg font-semibold border border-white/30"
                >
                  iCal Format
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-gray-800">{event.title}</h4>
                      {event.priority === 'high' && (
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <span className={`inline-block mt-2 px-2 py-1 bg-${getCategoryColor(event.category)}-100 text-${getCategoryColor(event.category)}-700 rounded text-xs font-medium`}>
                      {event.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Important Dates</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Convocation 2024</p>
                    <p className="text-sm text-gray-500">December 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Final Exams</p>
                    <p className="text-sm text-gray-500">November 25 - December 10</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Alumni Meet</p>
                    <p className="text-sm text-gray-500">January 20, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AcademicCalendar;