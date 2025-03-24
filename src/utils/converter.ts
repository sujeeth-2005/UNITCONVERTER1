export const convert = (value: number, from: string, to: string, category: string): number => {
  // Special case for temperature
  if (category === 'temperature') {
    return convertTemperature(value, from, to);
  }

  // For other conversions using rates
  const fromRate = getRate(from, category);
  const toRate = getRate(to, category);
  
  const result = (value / fromRate) * toRate;
  return Number(result.toFixed(6)); // Ensure consistent decimal places
};

const convertTemperature = (value: number, from: string, to: string): number => {
  // Convert to Celsius first
  let celsius;
  switch (from) {
    case 'F':
      celsius = (value - 32) * (5/9);
      break;
    case 'K':
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // Convert from Celsius to target unit
  switch (to) {
    case 'F':
      return Number(((celsius * 9/5) + 32).toFixed(2));
    case 'K':
      return Number((celsius + 273.15).toFixed(2));
    default:
      return Number(celsius.toFixed(2));
  }
};

const getRate = (unit: string, category: string): number => {
  const categoryData = categories.find(c => c.name === category);
  const unitData = categoryData?.units.find(u => u.value === unit);
  return unitData?.rate || 1;
};

import { categories } from '../data/units';