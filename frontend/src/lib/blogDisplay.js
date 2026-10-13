import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import inventoryImage from '../assets/images/inventory.jpeg';
import semiconductorImage from '../assets/images/semicontor.jpeg';
import cybersecurityImage from '../assets/images/cs.jpeg';
import cloudImage from '../assets/images/CC.jpeg';
import dataAiImage from '../assets/images/images.jpeg';
import softwareImage from '../assets/images/erp.jpeg';

export const categoryIcons = {
  Semiconductor: Cpu,
  Software: Code2,
  Cybersecurity: ShieldCheck,
  Operations: Workflow,
  Cloud: Cloud,
  'Data & AI': Database,
};

export const categoryImages = {
  Operations: inventoryImage,
  Semiconductor: semiconductorImage,
  Cybersecurity: cybersecurityImage,
  Cloud: cloudImage,
  'Data & AI': dataAiImage,
  Software: softwareImage,
};

export function formatDisplayDate(dateValue) {
  if (!dateValue) return '';
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return dateValue;
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getCategoryIcon(category) {
  return categoryIcons[category] || Layers;
}

export function getCategoryImage(category) {
  return categoryImages[category] || null;
}
