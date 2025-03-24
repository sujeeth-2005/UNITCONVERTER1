import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <p className="text-gray-400 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by
            <span className="ml-1 font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Sujeeth Sivanarasimman Saran
            </span>
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Universal Unit Converter. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};