// data/categories.ts
export interface Category {
    id: string;
    name: string;
  }
  
  export const CATEGORIES: Category[] = [
    { id: '1', name: 'Pogs' },
    { id: '2', name: 'Billes' },
    { id: '3', name: 'Consoles' },
    { id: '4', name: 'Rubiks Cube' },
    { id: '5', name: 'Divers' },
  ];