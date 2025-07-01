import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin } from 'lucide-react';

function App() {
  const getProficiencyDots = (level) => {
    const levels = { 'Adv': 5, 'Inter': 4, 'Bas': 3 };
    const count = levels[level] || 3;
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${
              i < count ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-semibold text-gray-900">
              Amit Barnwal
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Hello<br />
                I'm <span className="font-medium">Amit<br />Barnwal</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Full Stack Developer & Technology Consultant specializing in building scalable applications, 
                AI/ML solutions, and data engineering. Offering expert consulting services in cloud architecture, 
                ETL pipeline development, and machine learning implementation.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Download CV
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="Amit Barnwal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12">
            Tech <span className="font-medium text-blue-600">Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Backend Development */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-semibold">BE</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Backend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Python</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Django</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Flask</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">FastAPI</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Java Spring Boot</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">PHP</span>
                  {getProficiencyDots('Inter')}
                </div>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-semibold">FE</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">React.js</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Angular.js</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Bootstrap.js</span>
                  {getProficiencyDots('Adv')}
                </div>
              </div>
            </div>

            {/* Database Systems */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-semibold">DB</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Database</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">PostgreSQL</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">MySQL</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">MongoDB</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Cassandra</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Redis</span>
                  {getProficiencyDots('Adv')}
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 font-semibold">CD</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Cloud & DevOps</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">AWS Cloud</span>
                  {getProficiencyDots('Inter')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Azure Cloud</span>
                  {getProficiencyDots('Inter')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Google Cloud</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Docker</span>
                  {getProficiencyDots('Inter')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Kubernetes</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Jenkins</span>
                  {getProficiencyDots('Adv')}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technologies */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Message Queue & Processing */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 font-semibold">MQ</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Message Queue & Processing</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Kafka</span>
                  {getProficiencyDots('Inter')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Celery</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Airflow</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">PySpark</span>
                  {getProficiencyDots('Inter')}
                </div>
              </div>
            </div>

            {/* Monitoring & Analytics */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-teal-600 font-semibold">MA</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Monitoring & Analytics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">ELK Stack</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">New Relic</span>
                  {getProficiencyDots('Bas')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Debezium</span>
                  {getProficiencyDots('Bas')}
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-semibold">DT</span>
              </div>
              <h3 className="text-lg font-medium mb-4">Development Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Git</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Bitbucket</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Jira</span>
                  {getProficiencyDots('Adv')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">VS Code</span>
                  {getProficiencyDots('Adv')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12">Work</h2>
          
          <div className="space-y-12">
            {/* MESKY */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Tech Lead</h3>
                  <p className="text-blue-600 font-medium mb-2">MESKY</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Jan 2023 – Jan 2025
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Gurgaon
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Led a complete backend architecture rewrite for MESKY's E-commerce platform, including vendor, 
                inventory, delivery portal, and rider management. Designed and implemented a scalable microservices 
                architecture to optimize order processing and logistics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Django</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AWS</span>
              </div>
            </div>

            {/* Goibibo & MakeMyTrip */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Principal Software Engineer</h3>
                  <p className="text-blue-600 font-medium mb-2">Goibibo & MakeMyTrip</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Nov 2012 – Oct 2022
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Gurgaon
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Led a team of 6 engineers to develop scalable and high-performance backend solutions. 
                Improved team efficiency by 30% through Agile methodologies and automation. 
                Designed fault-tolerant, scalable microservices for travel and booking systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Django</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Kafka</span>
              </div>
            </div>

            {/* Earlier positions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tech Lead</h3>
                <p className="text-blue-600 font-medium mb-2">Foodmandi.com</p>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jul 2011 – Oct 2012
                </div>
                <p className="text-gray-600 text-sm">
                  India's first online grocery platform, delivering innovative e-commerce solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Software Engineer</h3>
                <p className="text-blue-600 font-medium mb-2">Web Reach Technologies</p>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  Nov 2010 – Jul 2011
                </div>
                <p className="text-gray-600 text-sm">
                  Managed US client-based e-commerce projects, delivering tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Do you have Project Idea? Let's discuss your project!
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Available for consulting services in cloud architecture, ETL development, 
            AI/ML implementation, and full-stack development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-blue-100">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-blue-100">Team Members Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12">Projects</h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">Cloud-Native E-commerce Platform</h3>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Cloud-Native E-commerce Platform</h3>
                <p className="text-gray-600 mb-6">
                  Developed a scalable e-commerce solution using microservices architecture, 
                  containerized with Docker and orchestrated using Kubernetes. The platform 
                  handles high-traffic loads and provides seamless user experience.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-medium mb-4">Real-time Analytics Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Built a real-time analytics platform using AWS Lambda, Kafka, and ELK Stack, 
                  processing millions of events daily. Features include real-time monitoring, 
                  custom dashboards, and automated alerting systems.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">Real-time Analytics Dashboard</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-medium mb-2">ML-Powered Recommendation Engine</h3>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">ML-Powered Recommendation Engine</h3>
                <p className="text-gray-600 mb-6">
                  Designed and implemented a machine learning recommendation system using 
                  collaborative filtering and deep learning techniques, improving user engagement 
                  by 40% and increasing conversion rates significantly.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12">About</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer and Technology Consultant with over 10 years of experience 
                in building scalable applications, AI/ML solutions, and data engineering systems. Throughout my career, 
                I've had the privilege of working with industry leaders like MakeMyTrip, Goibibo, and MESKY, 
                where I've led teams and delivered innovative solutions that drive business growth.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans across backend development with Python, Django, and FastAPI, frontend technologies 
                including React and Angular, and cloud platforms like AWS and Google Cloud. I specialize in designing 
                microservices architectures, implementing CI/CD pipelines, and building data-driven applications 
                that can handle millions of users.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, I enjoy mentoring junior developers, contributing to open-source projects, 
                and staying updated with the latest technology trends. I believe in writing clean, maintainable code 
                and following best practices that ensure long-term project success.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Backend Development</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Python, Django, FastAPI</li>
                      <li>Java Spring Boot</li>
                      <li>RESTful APIs</li>
                      <li>Microservices Architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cloud & DevOps</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>AWS, Google Cloud</li>
                      <li>Docker, Kubernetes</li>
                      <li>CI/CD Pipelines</li>
                      <li>Infrastructure as Code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="Working environment" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium mb-4">Let's work together</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    I'm always interested in new opportunities and exciting projects. 
                    Let's discuss how we can work together to bring your ideas to life.
                  </p>
                  <div className="flex space-x-3">
                    <a href="mailto:amit.barnwal09@gmail.com" 
                       className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/amit-barnwal" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" 
                       className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Let's work together</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to start your next project? I'm available for consulting services in cloud architecture, 
            ETL development, AI/ML implementation, and full-stack development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="font-medium mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">amit.barnwal09@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">Gurgaon, India</span>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="font-medium mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/amit-barnwal" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" 
                   className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
          
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Amit Barnwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;