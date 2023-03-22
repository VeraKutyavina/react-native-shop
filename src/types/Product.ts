import { ReactElement } from 'react';

export type ProductType = {
  name: string;
  price: number;
  count: number;
  id: string;
  description: string;
  photo: ReactElement;
  rating: number;
  inCart: number;
  isFavorite: boolean;
};
