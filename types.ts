
export type ViewState = 'GALLERY' | 'COMPOSER' | 'LEDGER' | 'PROFILE' | 'ARCHIVE' | 'CONTACT';

export interface FloralItem {
  id: string;
  name: string;
  scientificName?: string;
  price: number;
  image: string;
  description?: string;
  type: 'flower' | 'vessel' | 'foliage' | 'mechanic';
}

export interface Composition {
  id: string;
  items: FloralItem[];
  vessel: FloralItem | null;
  total: number;
}
