import { useState } from 'react';
import { motion } from 'framer-motion';

const admissionSteps = [
  {
    id: '01',
    name: 'Application',
    description: 'Submit your application form along with required documents.',
  },
  {
    id: '02',
    name: 'Entrance Test',
    description: 'Take our entrance examination to assess your current knowledge level.',
  },
  {
    id: '03',
    name: 'Interview',
    description: 'Meet with our faculty for a personal interview and counseling session.',
  },
  {
    id: '04',
    name: 'Admission',
    description: 'Complete the admission process and join our learning community.',
  },
];

const requirements = [
  'Completed application form',
  'Recent passport size photographs',
  'Previous academic records',
  'Transfer certificate (if applicable)',
  'Character certificate',
  'Aadhar card copy',
  'Parent/Guardian contact information',
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-600">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/admissions-hero.jpg"
            alt="Students in classroom"
          />
          <div className="absolute inset-0 bg-primary-600 mix-blend-multiply" />
        </div>
        <div className="relative container-custom py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Admissions
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Take the first step towards your academic success
            </p>
          </motion.div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Admission Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our admission process is designed to ensure that every student gets the opportunity
              to join our learning community.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {admissionSteps.map((step) => (
                <div key={step.id} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
                      {step.id}
                    </span>
                    {step.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Admission Requirements
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Please ensure you have the following documents ready when applying:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {requirements.map((requirement) => (
                <li
                  key={requirement}
                  className="flex items-center gap-x-3 text-base leading-7 text-gray-600"
                >
                  <svg
                    className="h-5 w-5 flex-none text-primary-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Apply Now
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Fill out the form below to start your application process. Our team will get back to you shortly.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold leading-6 text-gray-900">
                    Course Interested In
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="course"
                      id="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select a course</option>
                      <option value="mpc">Junior Inter MPC</option>
                      <option value="bipc">Junior Inter BiPC</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 