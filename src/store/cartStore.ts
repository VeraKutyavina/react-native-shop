import { makeAutoObservable } from 'mobx';
import { ProductType } from 'types/Product';

class CartStore {
  cart: ProductType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: ProductType) {
    this.cart.push({ ...product, inCart: product.inCart + 1 });
  }

  deleteFromCart(id: string) {
    this.cart = this.cart.filter(product => product.id !== id);
  }

  addCartCount(id: string) {
    this.cart = this.cart.map(product =>
      product.id === id ? { ...product, inCart: product.inCart + 1 } : product,
    );
  }

  removeCartCount(id: string) {
    this.cart = this.cart.map(product =>
      product.id === id ? { ...product, inCart: product.inCart - 1 } : product,
    );
  }
}

export default new CartStore();
