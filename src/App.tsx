import React from 'react';
import { Github, Mail, MapPin, Trophy, Gamepad2, BanIcon as BadmintonIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            opacity: '0.2'
          }}
        />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Aayush Raj</h1>
          <p className="text-xl text-gray-300">Web Developer | Badminton Player | BGMI Pro Player</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-20">
        {/* About Section */}
        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate web developer and competitive gamer based in India. With a strong foundation in web technologies
            and a background in sports, I bring both technical expertise and team player qualities to the table.
          </p>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 mr-2" />
            <span>India</span>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">New Pattern International School</h3>
              <p className="text-gray-300">12th Standard | 65%</p>
              <p className="text-gray-400">Higher Secondary Education</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">New Pattern International School</h3>
              <p className="text-gray-300">10th Standard | 69%</p>
              <p className="text-gray-400">Secondary Education</p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg flex items-start">
              <BadmintonIcon className="w-8 h-8 mr-4 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">District Level U-16 Badminton Player</h3>
                <p className="text-gray-300">Competitive Sports Achievement</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-start">
              <Gamepad2 className="w-8 h-8 mr-4 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">BGMI BMPS R3 Player</h3>
                <p className="text-gray-300">Professional Gaming Achievement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'].map((skill) => (
              <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center">
                <span className="text-lg font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">Contact</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <a href="mailto:contact@example.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6 mr-2" />
              <span>Email Me</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Github className="w-6 h-6 mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Aayush Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;