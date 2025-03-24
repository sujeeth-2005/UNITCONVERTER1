export type ConversionType = 'length' | 'weight' | 'temperature' | 'digital' | 'currency';

export interface ConversionOption {
  label: string;
  value: string;
  rate?: number;
}

export interface Category {
  name: ConversionType;
  icon: string;
  units: ConversionOption[];
}

export interface ConversionState {
  category: ConversionType;
  fromUnit: string;
  toUnit: string;
  value: string;
}