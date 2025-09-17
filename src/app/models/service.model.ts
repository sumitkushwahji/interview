// src/app/models/service.model.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  price: string; // Using string to allow for flexible text like "Starting at..."
  icon: string; // For an icon, e.g., from Font Awesome
  category?: string; // Optional category for grouping
  features?: string[]; // Optional list of features
}