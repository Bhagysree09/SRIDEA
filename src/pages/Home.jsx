import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav S.',
    text: 'SR IDEA helped me achieve my dream score in IIT-JEE. The faculty and personalized attention made all the difference!',
  },
  {
    name: 'Priya M.',
    text: 'The learning environment is so supportive and the teaching methods are modern and effective. Highly recommend!',
  },
  {
    name: 'Rahul K.',
    text: 'I loved the small class sizes and the focus on every student. SR IDEA is the best place to learn and grow.',
  },
];

const features = [
  {
    name: 'Small Class Sizes',
    description: 'Personalized attention for every student',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
  {
    name: 'Personalized Learning',
    description: 'Tailored teaching methods for individual needs',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
  },
  {
    name: 'Expert Faculty',
    description: 'Learn from experienced educators',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
];

const courses = [
  {
    name: 'Junior Inter MPC',
    description: 'Mathematics, Physics, and Chemistry stream with integrated IIT preparation',
    href: '/courses#mpc',
  },
  {
    name: 'Junior Inter BiPC',
    description: 'Biology, Physics, and Chemistry stream with integrated NEET preparation',
    href: '/courses#bipc',
  },
];

export default function Home() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section with background image */}
      <section className="w-full relative h-[420px] md:h-[520px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
          alt="Students studying together"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-primary-500 bg-opacity-70 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white text-center mb-4"
          >
            Empowering Minds, <span className="underline decoration-white decoration-4">Shaping Futures</span>
          </motion.h1>
          <p className="mt-2 text-xl md:text-2xl text-white text-center max-w-2xl">
            Where learning is not just a process but a personalized experience
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="px-8 py-3 rounded-full bg-white text-primary-500 font-bold shadow hover:bg-primary-100 transition-all duration-200 text-lg">
              Explore Courses
            </Link>
            <Link to="/admissions" className="px-8 py-3 rounded-full border-2 border-white text-white font-bold shadow hover:bg-primary-400 transition-all duration-200 text-lg">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose SR IDEA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center bg-primary-50 rounded-xl p-8 shadow hover:shadow-lg transition">
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-primary-500">{feature.name}</h3>
              <p className="mt-2 text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-16 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Courses Offered</h2>
        <div className="grid gap-8 w-full max-w-4xl sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.name}
              className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold leading-7 text-primary-500">
                {course.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">
                {course.description}
              </p>
              <Link
                to={course.href}
                className="text-sm font-semibold leading-6 text-primary-500 hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
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

      {/* Testimonials Slider (just above footer) */}
      <section className="w-full py-12 bg-primary-50 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary-500 mb-8 text-center">What Our Students Say</h2>
        <div className="w-full max-w-xl">
          <div className="px-6 py-8 bg-white rounded-xl shadow text-center">
            <p className="text-lg text-gray-700 italic mb-4">"{testimonials[0].text}"</p>
            <span className="block font-bold text-primary-500">- {testimonials[0].name}</span>
          </div>
        </div>
      </section>
    </div>
  );
} 