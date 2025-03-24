import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Ruler, Thermometer, HardDrive } from 'lucide-react';
import { ConversionType } from '../types';

interface CategorySelectorProps {
  selected: ConversionType;
  onSelect: (category: ConversionType) => void;
}

const categories = [
  { type: 'length' as ConversionType, Icon: Ruler },
  { type: 'weight' as ConversionType, Icon: Scale },
  { type: 'temperature' as ConversionType, Icon: Thermometer },
  { type: 'digital' as ConversionType, Icon: HardDrive },
];

export const CategorySelector: React.FC<CategorySelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex space-x-4 mb-8">
      {categories.map(({ type, Icon }) => (
        <motion.button
          key={type}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(type)}
          className={`p-4 rounded-lg flex flex-col items-center ${
            selected === type
              ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Icon className="w-6 h-6 mb-2" />
          <span className="text-sm capitalize">{type}</span>
        </motion.button>
      ))}
    </div>
  );
};