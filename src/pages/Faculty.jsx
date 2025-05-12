import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBook, FaUserGraduate, FaChalkboardTeacher, FaHandshake, FaChartLine, FaLightbulb, FaUsers } from 'react-icons/fa';

const faculty = [
  {
    name: 'I. Srinivas',
    role: 'Physics Faculty',
    experience: '30+ years',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    description: 'With over 30 years of teaching experience, I. Srinivas has helped numerous students achieve their dreams of entering prestigious engineering institutions.',
    achievements: [
      'Expert in IIT-JEE Physics',
      'Published author of physics textbooks',
      'Regular contributor to educational journals',
    ],
  },
  {
    name: 'Dr. G. Ravi',
    role: 'Chemistry Faculty',
    experience: '15 years teaching, 10 years research',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    description: 'Dr. G. Ravi brings a unique combination of academic excellence and research experience to the classroom. Recipient of the Telangana Young Scientist Award.',
    achievements: [
      'Telangana Young Scientist Award',
      'Ph.D. in Chemistry',
      'Published research papers in international journals',
    ],
  },
  {
    name: 'Senior Mathematics Faculty',
    role: 'Mathematics Faculty',
    experience: '30+ years',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80',
    description: 'Our senior mathematics faculty member has been instrumental in developing innovative teaching methodologies that make complex mathematical concepts easy to understand.',
    achievements: [
      'Expert in IIT-JEE Mathematics',
      'Developed unique problem-solving techniques',
      'Mentored numerous IIT toppers',
    ],
  },
];

const philosophy = [
  'Personalized attention and guidance',
  'Practical application of theoretical concepts',
  'Regular assessment and feedback',
  'Continuous improvement and innovation in teaching methods',
  'Building strong student-teacher relationships',
];

export default function Faculty() {
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
          Meet Our Faculty
        </motion.h1>
        <p className="mt-2 text-xl md:text-2xl text-gray-700 text-center max-w-2xl">
          Learn from the best in the field
        </p>
      </section>

      {/* Faculty List */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={member.name}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    src={member.image} 
                    alt={member.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-1">{member.name}</h2>
                    <p className="text-lg text-white/90 flex items-center gap-2">
                      <FaChalkboardTeacher className="text-primary-400 text-2xl" />
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4 text-primary-500">
                    <FaUserGraduate className="text-2xl" />
                    <span className="font-semibold">{member.experience} Experience</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FaAward className="text-primary-500 text-2xl" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 text-gray-600">
                          <FaGraduationCap className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-500 mb-12 text-center">Our Teaching Philosophy</h2>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((text, idx) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/10 p-3 rounded-xl">
                    {idx === 0 && <FaUsers className="text-primary-500 text-3xl" />}
                    {idx === 1 && <FaBook className="text-primary-500 text-3xl" />}
                    {idx === 2 && <FaChartLine className="text-primary-500 text-3xl" />}
                    {idx === 3 && <FaLightbulb className="text-primary-500 text-3xl" />}
                    {idx === 4 && <FaHandshake className="text-primary-500 text-3xl" />}
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
} 