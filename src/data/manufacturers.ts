// src/data/manufacturers.ts

export interface Manufacturer {
  id: number;
  name: string;
  stages: string[];
  available: boolean;
  leadTime: number;
  country: string;
  phone?: string;
  email?: string;
  leadership?: string;
  certs?: string[];
  capacity?: number;
  location?: string;
  exportsTo?: string[];
  photos?: string[];
  domain: string;
  subdomain?: string;
  website: string;
}

export const manufacturers: Manufacturer[] = [
  // Heavy Manufacturing Industries
  {
    id: 1,
    name: 'AutoMakers Inc.',
    country: 'USA',
    stages: ['Raw Material Sourcing', 'Component Manufacturing', 'Assembly Line Production', 'Quality Control & Testing', 'Painting & Finishing', 'Packaging & Labeling', 'Distribution & Logistics', 'Exporters/Distributors'],
    available: true,
    leadTime: 20,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Automotive Manufacturing',
    phone: '+1-555-111-2222',
    email: 'contact@automakers.com',
    leadership: 'Jane Smith, CEO',
    certs: ['ISO 9001', 'ISO 14001'],
    capacity: 100000,
    location: 'Detroit, USA',
    exportsTo: ['Canada', 'Mexico', 'Europe'],
    photos: ['https://example.com/auto1.jpg'],
    website: 'www.automakers.com'
  },
  {
    id: 2,
    name: 'AeroTech Ltd.',
    country: 'UK',
    stages: ['Material Sourcing & Fabrication', 'Component Manufacturing', 'Assembly & Integration', 'Testing & Quality Assurance', 'Certification & Compliance', 'Packaging & Labeling', 'Distribution & Logistics', 'Exporters/Distributors'],
    available: true,
    leadTime: 30,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Aerospace & Defense',
    phone: '+44-20-1234-5678',
    email: 'info@aerotech.co.uk',
    leadership: 'Robert Brown, Managing Director',
    certs: ['AS9100', 'ISO 9001'],
    capacity: 50000,
    location: 'London, UK',
    exportsTo: ['Global'],
    photos: ['https://example.com/aero1.jpg'],
    website: 'www.aerotech.co.uk'
  },
  {
    id: 3,
    name: 'ShipBuilders Corp.',
    country: 'Norway',
    stages: ['Steel Plate Cutting & Shaping', 'Hull Fabrication', 'Assembly & Welding', 'Outfitting & Systems Integration', 'Painting & Finishing', 'Quality Control & Testing', 'Delivery & Commissioning', 'Exporters/Distributors'],
    available: true,
    leadTime: 45,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Shipbuilding',
    phone: '+47-22-123456',
    email: 'contact@shipbuilders.no',
    leadership: 'Lars Jensen, CEO',
    certs: ['ISO 9001', 'ISO 14001'],
    capacity: 20000,
    location: 'Oslo, Norway',
    exportsTo: ['Europe', 'Asia'],
    photos: ['https://example.com/ship1.jpg'],
    website: 'www.shipbuilders.no'
  },
  {
    id: 4,
    name: 'RailEquip Ltd.',
    country: 'Germany',
    stages: ['Raw Material Sourcing', 'Component Manufacturing', 'Assembly & Integration', 'Testing & Quality Assurance', 'Painting & Finishing', 'Packaging & Labeling', 'Distribution & Logistics', 'Exporters/Distributors'],
    available: true,
    leadTime: 25,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Railway Equipment Manufacturing',
    phone: '+49-30-987654',
    email: 'info@railequip.de',
    leadership: 'Anna Müller, CEO',
    certs: ['ISO 9001', 'ISO 45001'],
    capacity: 30000,
    location: 'Berlin, Germany',
    exportsTo: ['Europe', 'USA'],
    photos: ['https://example.com/rail1.jpg'],
    website: 'www.railequip.de'
  },
  {
    id: 5,
    name: 'ConstructEquip Inc.',
    country: 'USA',
    stages: ['Raw Material Sourcing', 'Component Manufacturing', 'Assembly & Integration', 'Testing & Quality Assurance', 'Painting & Finishing', 'Packaging & Labeling', 'Distribution & Logistics', 'Exporters/Distributors'],
    available: true,
    leadTime: 18,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Construction Equipment',
    phone: '+1-555-333-4444',
    email: 'sales@constructequip.com',
    leadership: 'Michael Johnson, COO',
    certs: ['ISO 9001', 'ISO 14001'],
    capacity: 40000,
    location: 'Chicago, USA',
    exportsTo: ['North America', 'Europe'],
    photos: ['https://example.com/construct1.jpg'],
    website: 'www.constructequip.com'
  },
  {
    id: 6,
    name: 'IndMachinery Ltd.',
    country: 'Japan',
    stages: ['Raw Material Sourcing', 'Component Manufacturing', 'Assembly & Integration', 'Testing & Quality Assurance', 'Painting & Finishing', 'Packaging & Labeling', 'Distribution & Logistics', 'Exporters/Distributors'],
    available: true,
    leadTime: 22,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Industrial Machinery & Equipment',
    phone: '+81-3-1234-5678',
    email: 'contact@indmachinery.jp',
    leadership: 'Takashi Yamamoto, President',
    certs: ['ISO 9001', 'ISO 14001'],
    capacity: 35000,
    location: 'Tokyo, Japan',
    exportsTo: ['Asia', 'Europe'],
    photos: ['https://example.com/indmachinery1.jpg'],
    website: 'www.indmachinery.jp'
  },
    {
    id: 6,
    name: 'IndMachinery Ltd.',
    country: 'Japan',
    stages: ['Raw Material Sourcing', 'Component Manufacturing', 'Assembly & Integration', 'Testing & Quality Assurance', 'Painting & Finishing', 'Packaging & Labeling', 'Distribution & Logistics', 'Exporters/Distributors'],
    available: true,
    leadTime: 22,
    domain: 'Heavy Manufacturing Industries',
    subdomain: 'Industrial Machinery & Equipment',
    phone: '+81-3-1234-5678',
    email: 'contact@indmachinery.jp',
    leadership: 'Takashi Yamamoto, President',
    certs: ['ISO 9001', 'ISO 14001'],
    capacity: 35000,
    location: 'Tokyo, Japan',
    exportsTo: ['Asia', 'Europe'],
    photos: ['https://example.com/indmachinery1.jpg'],
    website: 'www.indmachinery.jp'
  },
  // Add example manufacturers for other domains and subdomains as needed for prototype
];
