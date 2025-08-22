// app/components/Certifications.js
"use client"
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Web Development Training',
      issuer: 'Internshala Trainings',
      date: 'May–Jul 2023',
      badge: '🌐',
      description: 'Comprehensive web development training covering HTML, CSS, JavaScript, and modern practices.'
    },
    {
      id: 2,
      title: 'UI Full-Stack with ReactJS',
      issuer: 'Naresh i Technologies, Hyderabad',
      date: 'Dec 2023 – Feb 2024',
      badge: '⚛️',
      description: 'Full-stack UI development using ReactJS with industry practices and component-driven development.'
    },
    {
      id: 3,
      title: 'Git Essential Training',
      issuer: 'LinkedIn Learning',
      date: '2024',
      badge: '🔧',
      description: 'Core version control workflows with Git and GitHub for collaboration.'
    },
    {
      id: 4,
      title: 'Agile Foundations & Responsive Web Design',
      issuer: 'LinkedIn Learning',
      date: '2024',
      badge: '📐',
      description: 'Agile principles and responsive design techniques for modern web apps.'
    }
  ];
    const handleClick = () => {
    // Add your redirect logic here
    console.log('Redirecting to certifications...');
  };

  return (
    <section id="certifications"  className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Badge */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                  {cert.badge}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-purple-400 font-semibold group-hover:text-pink-400 transition-colors">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-400 text-sm mt-1">
                  {cert.date}
                </p>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
           <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="text-center mt-8 sm:mt-12 md:mt-16">
        <button 
          onClick={handleClick}
          className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base md:text-lg touch-manipulation active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
        >
          <span className="text-lg sm:text-xl md:text-2xl">🏆</span>
          <span className="ml-2 mr-2 sm:mr-3 whitespace-nowrap">View All Certifications</span>
          <span className="text-lg sm:text-xl">→</span>
        </button>
      </div>
    </div>

      </div>
    </section>
  );
};

export default Certifications;