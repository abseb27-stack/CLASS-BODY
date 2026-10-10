export type Language = 'en' | 'fr' | 'ar';

export interface ElevatorItem {
  id: string;
  image: string;
  specs: {
    capacity: Record<Language, string>;
    speed: Record<Language, string>;
    floors: Record<Language, string>;
    applications: Record<Language, string>;
  };
  title: Record<Language, string>;
  description: Record<Language, string>;
  detailText: Record<Language, string>;
}

export interface SparePartItem {
  id: string;
  name: Record<Language, string>;
  category: Record<Language, string>;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  badge: Record<Language, string>;
}

export interface WhyItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}
