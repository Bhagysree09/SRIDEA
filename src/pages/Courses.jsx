import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 'mpc',
    name: 'Junior Inter MPC',
    description: 'A comprehensive program combining Mathematics, Physics, and Chemistry with integrated IIT preparation.',
    duration: '2 Years',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English'],
    features: [
      'Integrated IIT-JEE preparation',
      'Regular mock tests and assessments',
      'Personalized doubt clearing sessions',
      'Comprehensive study material',
      'Expert faculty guidance',
    ],
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'bipc',
    name: 'Junior Inter BiPC',
    description: 'A specialized program focusing on Biology, Physics, and Chemistry with integrated NEET preparation.',
    duration: '2 Years',
    subjects: ['Biology', 'Physics', 'Chemistry', 'English'],
    features: [
      'Integrated NEET preparation',
      'Regular mock tests and assessments',
      'Personalized doubt clearing sessions',
      'Comprehensive study material',
      'Expert faculty guidance',
    ],
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Courses() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 flex flex-col items-center justify-center bg-gradient-to-r from-white via-primary-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 text-center mb-4"
        >
          Our Courses
        </motion.h1>
        <p className="mt-2 text-xl md:text-2xl text-gray-700 text-center max-w-2xl">
          Choose the path that leads to your success
        </p>
      </section>

      {/* Courses List */}
      <section className="w-full py-16 bg-gray-50 flex flex-col items-center">
        <div className="grid gap-12 w-full max-w-5xl md:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              id={course.id}
              className="flex flex-col items-center bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition p-0 overflow-hidden"
            >
              <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
              <div className="p-8 w-full flex flex-col items-center">
                <h2 className="text-2xl font-bold text-primary-500 mb-2 text-center">{course.name}</h2>
                <p className="text-gray-700 mb-4 text-center">{course.description}</p>
                <div className="flex flex-wrap gap-8 mb-4 justify-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">Duration</h3>
                    <p className="text-gray-600">{course.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Subjects</h3>
                    <ul className="text-gray-600 list-disc pl-5">
                      {course.subjects.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Key Features</h3>
                  <ul className="text-gray-600 list-disc pl-5 text-left">
                    {course.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex gap-4 justify-center">
                  <Link
                    to="/admissions"
                    className="px-6 py-2 rounded-full bg-primary-500 text-white font-bold shadow hover:bg-primary-600 transition-all duration-200"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-2 rounded-full border-2 border-primary-500 text-primary-500 font-bold shadow hover:bg-primary-50 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-primary-500 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to Start Your Journey?</h2>
        <p className="mb-8 text-lg text-primary-50 text-center max-w-2xl">
          Join SR IDEA today and take the first step towards your academic success
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/admissions" className="px-8 py-3 rounded-full bg-white text-primary-500 font-bold shadow hover:bg-primary-100 transition-all duration-200 text-lg">
            Apply Now
          </Link>
          <Link to="/contact" className="px-8 py-3 rounded-full border-2 border-white text-white font-bold shadow hover:bg-primary-400 transition-all duration-200 text-lg">
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </div>
  );
} 