import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = {
  address: '4-8-222/134, U B Arcade, Kuntloor Road, Opp Mother Diary Gate, Hayathnagar, Ranga Reddy District- 501505, TS, India, Telangana',
  phones: ['+91 7997575072', '+91 7601030350'],
  email: 'sriramsidea@gmail.com',
  hours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
            src="/contact-hero.jpg"
            alt="Contact us"
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
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Get in touch with us for any queries or information
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl w-full flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Contact Info */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              <div className="mt-10 w-full flex justify-center lg:justify-start">
                <dl className="grid grid-cols-1 gap-y-8 w-full">
                  <div className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-500 text-xl" />
                      Address
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-600">
                      {contactInfo.address}
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-2">
                      <FaPhone className="text-primary-500 text-xl" />
                      Phone
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-600">
                      {contactInfo.phones.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="block hover:text-primary-600">
                          {phone}
                        </a>
                      ))}
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-2">
                      <FaEnvelope className="text-primary-500 text-xl" />
                      Email
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-600">
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-600">
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center gap-2">
                      <FaClock className="text-primary-500 text-xl" />
                      Working Hours
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-600">
                      {contactInfo.hours}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* QR/Image on the right */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="/image.png"
                alt="Get App QR Code"
                className="w-64 h-64 object-contain rounded-xl shadow-lg border border-primary-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Send us a Message
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
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
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
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
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5989191057134!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRIDEA Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 