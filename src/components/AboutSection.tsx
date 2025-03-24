import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto mt-12"
    >
      <div className="text-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Sujeeth Sivanarasimman Saran"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800">Sajeeth Sivanarasimman Saran</h2>
        <p className="text-gray-600">Founder & Lead Developer</p>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Passionate about creating intuitive and powerful tools that make everyday tasks simpler.
          This Universal Unit Converter represents our commitment to combining cutting-edge technology
          with user-friendly design.
        </p>
      </div>

      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
  );
};