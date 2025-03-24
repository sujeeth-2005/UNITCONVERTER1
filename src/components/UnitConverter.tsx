import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightLeft, CheckCircle } from 'lucide-react';
import { ConversionState, ConversionType } from '../types';
import { convert } from '../utils/converter';
import { categories } from '../data/units';

interface UnitConverterProps {
  category: ConversionType;
}

export const UnitConverter: React.FC<UnitConverterProps> = ({ category }) => {
  const [state, setState] = useState<ConversionState>({
    category,
    fromUnit: categories[0].units[0].value,
    toUnit: categories[0].units[1].value,
    value: '',
  });

  const [result, setResult] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const currentCategory = categories.find(c => c.name === category);

  useEffect(() => {
    if (state.value) {
      const convertedValue = convert(parseFloat(state.value), state.fromUnit, state.toUnit, category);
      setResult(convertedValue.toLocaleString('en-US', { maximumFractionDigits: 6 }));
    } else {
      setResult('');
    }
  }, [state, category]);

  const handleSwap = () => {
    setState(prev => ({
      ...prev,
      fromUnit: prev.toUnit,
      toUnit: prev.fromUnit,
    }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Input Section */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-white/80">From</label>
          <div className="relative">
            <input
              type="number"
              value={state.value}
              onChange={(e) => setState({ ...state, value: e.target.value })}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-200"
              placeholder="Enter value"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 to-blue-500/10 pointer-events-none" />
          </div>
          <select
            value={state.fromUnit}
            onChange={(e) => setState({ ...state, fromUnit: e.target.value })}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-200"
          >
            {currentCategory?.units.map((unit) => (
              <option key={unit.value} value={unit.value} className="bg-gray-800">
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSwap}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:transform-none p-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:shadow-green-400/20"
        >
          <ArrowRightLeft className="w-6 h-6" />
        </motion.button>

        {/* Result Section */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-white/80">To</label>
          <div className="relative group">
            <input
              type="text"
              value={result}
              readOnly
              onClick={copyToClipboard}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white cursor-pointer focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
              placeholder="Result"
            />
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center space-x-1 text-green-400"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Copied!</span>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-400/10 pointer-events-none" />
          </div>
          <select
            value={state.toUnit}
            onChange={(e) => setState({ ...state, toUnit: e.target.value })}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
          >
            {currentCategory?.units.map((unit) => (
              <option key={unit.value} value={unit.value} className="bg-gray-800">
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result Display */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="text-center">
              <p className="text-white/60">Conversion Result</p>
              <p className="text-2xl font-semibold mt-2">
                <span className="text-green-400">{state.value}</span>
                <span className="text-white/60"> {state.fromUnit}</span>
                <span className="text-white/60"> = </span>
                <span className="text-blue-400">{result}</span>
                <span className="text-white/60"> {state.toUnit}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};