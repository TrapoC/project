export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  postedTime: string;
  type: 'Full Time' | 'Part Time' | 'Freelance';
  logo: string;
  country: string;
}