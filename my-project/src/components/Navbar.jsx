import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  FlaskConical,
  Calendar,
  Microscope,
  Coins,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: GraduationCap },
    { path: '/bos', label: 'BOS', icon: Users },
    { path: '/programmes', label: 'Programmes', icon: BookOpen },
    { path: '/scheme-syllabus', label: 'Syllabus', icon: FileText },
    { path: '/laboratories', label: 'Labs', icon: FlaskConical },
    { path: '/academic-calendar', label: 'Calendar', icon: Calendar },
    { path: '/research', label: 'Research', icon: Microscope },
    { path: '/grants-schemes', label: 'Grants', icon: Coins }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                USICT Academics
              </h1>
              <p className="text-xs text-gray-500">Excellence in Education</p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <motion.div
                  key={item.path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : 'hover:bg-blue-50 text-gray-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>

                    {!isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'hover:bg-blue-50 text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;