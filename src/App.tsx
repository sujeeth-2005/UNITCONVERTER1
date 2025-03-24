import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CategorySelector } from './components/CategorySelector';
import { UnitConverter } from './components/UnitConverter';
import { AboutSection } from './components/AboutSection';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ConversionType } from './types';

function App() {
  const [category, setCategory] = useState<ConversionType>('length');
  const [showAbout, setShowAbout] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-sans tracking-tight">
              Universal Unit Converter
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Convert anything, anywhere, anytime
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAbout(!showAbout)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              {showAbout ? 'Back to Converter' : 'About the Founder'}
            </motion.button>
          </div>

          {showAbout ? (
            <AboutSection />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <CategorySelector selected={category} onSelect={setCategory} />
              <UnitConverter category={category} />
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;