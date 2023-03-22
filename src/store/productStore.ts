import { makeAutoObservable } from 'mobx';
import { ProductType } from 'types/Product';

const coat1 = require('../assets/coat1.jpeg');
const dress1 = require('../assets/dress1.jpeg');
const dress2 = require('../assets/dress2.jpeg');
const jacket = require('../assets/jacket.jpeg');
const jacket2 = require('../assets/jacket2.jpeg');
const shirt = require('../assets/shirt.jpeg');

class ProductStore {
  products: ProductType[] = [
    {
      name: 'Платье мини',
      price: 4999,
      count: 10,
      id: '43452',
      description: 'Платье мини с полупрозрачными рукавами и декором на лифе',
      photo: dress1,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Платье-жакет',
      price: 4999,
      count: 5,
      id: '43782',
      description: 'Приталенное платье-жакет с золотистыми пуговицами',
      photo: dress2,
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Однобортное пальто',
      price: 7999,
      count: 1,
      id: '42360',
      description: 'Однобортное пальто на пуговицах с ремнем',
      photo: coat1,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Стеганый пуховик',
      price: 9999,
      count: 3,
      id: '43972',
      description: 'Стеганый пуховик с треугольным воротником',
      photo: jacket,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Пуховик',
      price: 8999,
      count: 0,
      id: '42375',
      photo: jacket2,
      description: 'Пуховик миди с длинным поясом',
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      name: 'Рубашка',
      price: 2999,
      count: 5,
      id: '42701',
      description: 'Удлиненная клетчатая рубашка',
      photo: shirt,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
  ];

  addCartCount(id: string) {
    this.products = this.products.map(product =>
      product.id === id ? { ...product, inCart: product.inCart + 1 } : product,
    );
  }

  removeCartCount(id: string) {
    this.products = this.products.map(product =>
      product.id === id ? { ...product, inCart: 0 } : product,
    );
  }

  createFavorite(id: string) {
    this.products = this.products.map(product =>
      product.id === id ? { ...product, isFavorite: true } : product,
    );
  }

  deleteFavorite(id: string) {
    this.products = this.products.map(product =>
      product.id === id ? { ...product, isFavorite: false } : product,
    );
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new ProductStore();
