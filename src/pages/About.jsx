import { motion } from 'framer-motion';

const stats = [
  {
    name: 'Years of Excellence',
    value: '3+',
    icon: (
      // Calendar/award icon
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="4" strokeWidth="2" stroke="currentColor" fill="white" /><path d="M8 2v4M16 2v4M3 10h18" strokeWidth="2" stroke="currentColor" /><circle cx="12" cy="16" r="3" fill="currentColor" /></svg>
    ),
  },
  {
    name: 'Expert Faculty',
    value: '10+',
    icon: (
      // Graduation cap
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0a9 9 0 01-9-9" strokeWidth="2" stroke="currentColor" fill="white" /><path d="M12 14v6a9 9 0 009-9" strokeWidth="2" stroke="currentColor" fill="white" /></svg>
    ),
  },
  {
    name: 'Students Enrolled',
    value: '500+',
    icon: (
      // Users/group
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="8" cy="8" r="4" strokeWidth="2" stroke="currentColor" fill="white" /><circle cx="16" cy="8" r="4" strokeWidth="2" stroke="currentColor" fill="white" /><path d="M2 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeWidth="2" stroke="currentColor" /><path d="M14 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" strokeWidth="2" stroke="currentColor" /></svg>
    ),
  },
  {
    name: 'Success Rate',
    value: '95%',
    icon: (
      // Trophy
      <svg className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 00-1-1H8a1 1 0 00-1 1v2M21 5h-3v2a7 7 0 01-14 0V5H3" strokeWidth="2" stroke="currentColor" fill="white" /><circle cx="12" cy="10" r="3" fill="currentColor" /></svg>
    ),
  },
];

export default function About() {
  return (
    <div className="bg-white w-full">
      {/* Modern Hero Section */}
      <section className="w-full py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-16 bg-gradient-to-r from-white via-primary-50 to-white relative overflow-hidden">
        <div className="flex-1 flex flex-col items-start z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-4"
          >
            About SRIRAMA IDEA IIT-JEE / NEET ACADEMY
          </motion.h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            SRIRAMA IDEA IIT-JEE / NEET ACADEMY empowers students through personalized, modern education and expert guidance. We focus on excellence, innovation, and student success.
          </p>
        </div>
        <div className="flex-1 flex justify-center z-10">
          <div className="rounded-3xl shadow-lg overflow-hidden border-4 border-primary-100 bg-white">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=500&q=80" alt="Students studying" className="w-80 h-80 object-cover" />
          </div>
        </div>
        {/* Red accent shape */}
        <div className="hidden md:block absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary-100 rounded-full opacity-60 z-0" />
      </section>

      {/* Modern Stats Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center bg-primary-50 rounded-2xl p-8 shadow hover:shadow-lg transition">
              {stat.icon}
              <div className="text-3xl font-extrabold text-primary-500 mt-2">{stat.value}</div>
              <div className="text-base text-gray-700 mt-1">{stat.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 