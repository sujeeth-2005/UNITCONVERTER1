import { Category } from '../types';

export const categories: Category[] = [
  {
    name: 'length',
    icon: 'ruler',
    units: [
      { label: 'Meters', value: 'm', rate: 1 },
      { label: 'Kilometers', value: 'km', rate: 0.001 },
      { label: 'Centimeters', value: 'cm', rate: 100 },
      { label: 'Miles', value: 'mi', rate: 0.000621371 },
      { label: 'Feet', value: 'ft', rate: 3.28084 },
    ],
  },
  {
    name: 'weight',
    icon: 'scale',
    units: [
      { label: 'Kilograms', value: 'kg', rate: 1 },
      { label: 'Grams', value: 'g', rate: 1000 },
      { label: 'Pounds', value: 'lb', rate: 2.20462 },
      { label: 'Ounces', value: 'oz', rate: 35.274 },
    ],
  },
  {
    name: 'temperature',
    icon: 'thermometer',
    units: [
      { label: 'Celsius', value: 'C' },
      { label: 'Fahrenheit', value: 'F' },
      { label: 'Kelvin', value: 'K' },
    ],
  },
  {
    name: 'digital',
    icon: 'hard-drive',
    units: [
      { label: 'Bytes', value: 'B', rate: 1 },
      { label: 'Kilobytes', value: 'KB', rate: 0.001 },
      { label: 'Megabytes', value: 'MB', rate: 0.000001 },
      { label: 'Gigabytes', value: 'GB', rate: 1e-9 },
      { label: 'Terabytes', value: 'TB', rate: 1e-12 },
    ],
  },
];