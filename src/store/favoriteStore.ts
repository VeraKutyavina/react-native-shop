import { makeAutoObservable } from 'mobx';
import { ProductType } from 'types/Product';

class FavoriteStore {
  favorites: ProductType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createFavorite(product: ProductType) {
    this.favorites.push(product);
  }

  deleteFavorite(id: string) {
    this.favorites = this.favorites.filter(product => product.id !== id);
  }
}

export default new FavoriteStore();
