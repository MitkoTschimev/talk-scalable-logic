import { Cat } from './cat.interface';

export function getCatById(cats: Cat[], id: number) {
  return cats.find(cat => cat.id === id);
}
