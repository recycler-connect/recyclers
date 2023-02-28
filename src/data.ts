export type RecyclerDataType = {
  id: number;
  company: string;
  location?: string;
  primary_material?: string;
  input_material?: string;
  output_material?: string;
  minimum_percentage?: number | null;
  URL?: string;
};

export const recyclers: RecyclerDataType[] = [
  {
    id: 1,
    company: 'AmberCycle',
    location: 'North America',
    primary_material: 'Polyester',
    input_material: 'Post Industrial',
    output_material: 'PET Pellets',
    minimum_percentage: 80,
    URL: 'http://ambercycleinc.com',
  },
  {
    id: 2,
    company: 'Aquafil (Econyl)',
    location: 'Europe',
    primary_material: 'Nylon',
    input_material: 'Post Industrial',
    output_material: 'Yarn',
    minimum_percentage: null,
    URL: 'https://www.econyl.com',
  },
  {
    id: 3,
    company: 'BlockTexx',
    location: 'Australia',
    primary_material: 'Polyester, Cotton, Polyester/Cotton Blend, Visose',
    input_material: 'Post Industrial',
    output_material: 'PET Pellets',
    minimum_percentage: 90,
    URL: 'http://ambercycleinc.com',
  },
];
