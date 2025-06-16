import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900 via-purple-900 to-indigo-950 text-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-black/30 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <Terminal className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                </div>
              </div>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300">
                Amit Barnwal
              </span>
            </a>
            <div className="flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#journey" className="hover:text-blue-400 transition-colors">Journey</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Amit Barnwal</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Full Stack Developer & Technology Consultant specializing in building scalable applications, 
                  AI/ML solutions, and data engineering. Offering expert consulting services in cloud architecture, 
                  ETL pipeline development, and machine learning implementation.
                </p>
                <div className="flex space-x-4">
                  <a href="mailto:amit.barnwal09@gmail.com" 
                     className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="#" 
                     className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/amit-barnwal" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25"></div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80&w=1000"
                  alt="Tech visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend Development</h3>
                <p className="text-blue-100">
                  Python, Django, Flask, FastAPI, Java Spring Boot
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Frontend Development</h3>
                <p className="text-blue-100">
                  Angular.js, Backbone.js, Bootstrap.js
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-pink-400">Database Systems</h3>
                <p className="text-blue-100">
                  PostgreSQL, MySQL, MongoDB, Cassandra
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Cloud & DevOps</h3>
                <p className="text-blue-100">
                  AWS (Lambda, S3, RDS, EC2), Google Cloud, Docker, Kubernetes, Redis, Kafka, 
                  Celery, Airflow, Jenkins, ELK Stack, Debezium, New Relic
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Development Tools & CMS</h3>
                <p className="text-blue-100">
                  Git, Bitbucket, Jira, PyCharm, VS Code, WordPress, Joomla, Magento, OpenCart
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-pink-400">Data & AI Solutions</h3>
                <p className="text-blue-100">
                  ETL Pipeline Development, Machine Learning, AI Implementation, TensorFlow, PyTorch, 
                  Scikit-learn, Apache Spark, Data Warehousing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section id="journey" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Professional Journey</h2>
          
          {/* MESKY */}
          <div className="group relative mb-12">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black/20 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-blue-400">Tech Lead</h3>
                <div className="text-blue-200">
                  <span className="font-medium">MESKY</span> | Gurgaon | Jan 2023 – Jan 2025
                </div>
              </div>
              <div className="text-sm text-purple-300 mb-4">Python, Django, Flask, MySQL, Redis, AWS</div>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                <li>Led a complete backend architecture rewrite for MESKY's E-commerce platform, including vendor, inventory, delivery portal, and rider management.</li>
                <li>Designed and implemented a scalable microservices architecture to optimize order processing and logistics.</li>
                <li>Developed an automated inventory management system that reduced stock discrepancies by 40%.</li>
                <li>Built a real-time tracking system for delivery and rider management.</li>
                <li>Led a team of 15 developers, conducting mentorship, code reviews, and performance appraisals.</li>
                <li>Collaborated with frontend, mobile, and DevOps teams to ensure seamless feature releases.</li>
              </ul>
            </div>
          </div>

          {/* Goibibo & MakeMyTrip */}
          <div className="group relative mb-12">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black/20 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-purple-400">Principal Software Engineer</h3>
                <div className="text-blue-200">
                  <span className="font-medium">Goibibo & MakeMyTrip</span> | Gurgaon | Nov 2012 – Oct 2022
                </div>
              </div>
              <div className="text-sm text-purple-300 mb-4">Python, Django, MySQL, Kafka, Java Spring Boot, Docker, PySpark, Pandas</div>
              <ul className="list-disc list-inside text-blue-100 space-y-2 mb-6">
                <li>Led a team of 6 engineers to develop scalable and high-performance backend solutions.</li>
                <li>Improved team efficiency by 30% through Agile methodologies and automation.</li>
                <li>Designed fault-tolerant, scalable microservices for travel and booking systems.</li>
                <li>Led the development of key projects including hotel booking engines, API integrations, and travel guides.</li>
              </ul>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Projects:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-300">Extranet (Goibibo B2B Portal) – Aug 2013 – Oct 2022</h5>
                      <ul className="list-disc list-inside text-blue-100 ml-4">
                        <li>Optimized hotel payment and reporting modules, improving performance by 50%.</li>
                        <li>Implemented JWT authentication and Dockerized deployments for scalability.</li>
                        <li>Developed Celery-based background jobs for asynchronous processing.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-300">Booker (Hotel Booking Microservice) – Nov 2015 – Oct 2022</h5>
                      <ul className="list-disc list-inside text-blue-100 ml-4">
                        <li>Managed hotel bookings using Java Spring Boot with seamless API integrations.</li>
                        <li>Enabled provisional and confirmed bookings, integrating them with payment systems.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-300">Sandesh.in (Messaging Microservice) – Nov 2019 – Dec 2020</h5>
                      <ul className="list-disc list-inside text-blue-100 ml-4">
                        <li>Developed an AWS & Kafka-based messaging system for hotelier communications.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-300">Goibibo Agent Room – Aug 2013 – Oct 2020</h5>
                      <ul className="list-disc list-inside text-blue-100 ml-4">
                        <li>Built a third-party vendor interface for managing bookings, invoices, and records.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Earlier Positions */}
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-blue-400">Tech Lead</h3>
                  <div className="text-blue-200">
                    <span className="font-medium">Foodmandi.com</span> | Jul 2011 – Oct 2012
                  </div>
                </div>
                <ul className="list-disc list-inside text-blue-100">
                  <li>India's first online grocery platform, delivering innovative e-commerce solutions.</li>
                  <li>Led a team of 3 developers, overcoming operational and technical challenges.</li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-purple-400">Software Engineer</h3>
                  <div className="text-blue-200">
                    <span className="font-medium">Web Reach Technologies</span> | Nov 2010 – Jul 2011
                  </div>
                </div>
                <ul className="list-disc list-inside text-blue-100">
                  <li>Managed US client-based e-commerce projects, delivering tailored solutions with a small team.</li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-pink-400">Intern</h3>
                  <div className="text-blue-200">
                    <span className="font-medium">Maxland IT</span> | Jul 2010 – Oct 2010
                  </div>
                </div>
                <ul className="list-disc list-inside text-blue-100">
                  <li>Gained hands-on experience in US-based e-commerce development projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Cloud-Native E-commerce Platform</h3>
                <p className="text-blue-100 mb-4">
                  Developed a scalable e-commerce solution using microservices architecture, 
                  containerized with Docker and orchestrated using Kubernetes.
                </p>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center">
                  View Project <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Real-time Analytics Dashboard</h3>
                <p className="text-blue-100 mb-4">
                  Built a real-time analytics platform using AWS Lambda, Kafka, and ELK Stack, 
                  processing millions of events daily.
                </p>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center">
                  View Project <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-pink-400">ML-Powered Recommendation Engine</h3>
                <p className="text-blue-100 mb-4">
                  Designed and implemented a machine learning recommendation system using 
                  collaborative filtering and deep learning techniques, improving user engagement by 40%.
                </p>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center">
                  View Project <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Get in Touch</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Available for consulting services in cloud architecture, ETL development, 
            AI/ML implementation, and full-stack development. Let's discuss how we can 
            transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex space-x-6">
            <a href="mailto:amit.barnwal09@gmail.com" 
               className="group relative inline-flex items-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative px-6 py-3 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/amit-barnwal" 
               target="_blank"
               rel="noopener noreferrer"
               className="group relative inline-flex items-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative px-6 py-3 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm border-t border-white/10"></div>
        <div className="relative max-w-7xl mx-auto text-center text-blue-200">
          © 2025 Amit Barnwal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;