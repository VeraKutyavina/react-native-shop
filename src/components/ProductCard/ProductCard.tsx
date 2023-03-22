import React from 'react';
import { observer } from 'mobx-react-lite';

import ProductStore from '@src/store/productStore';
import CartStore from '@src/store/cartStore';
import FavoriteStore from '@src/store/favoriteStore';

import { Image, View, Text, TouchableOpacity } from 'react-native';
import Header from '../Header';

import { styles } from './styled';

// const rating = [1, 2, 3, 4, 5];

type TProductCard = {
  navigation: any;
  route: any;
};

const ProductCard = ({ navigation, route }: TProductCard) => {
  const { itemId } = route.params;
  const product = ProductStore.products[itemId];

  const addToCart = () => {
    ProductStore.addCartCount(product.id);
    CartStore.addToCart(product);
  };

  const addToFavorites = () => {
    FavoriteStore.createFavorite(product);
    ProductStore.createFavorite(product.id);
  };

  const removeFromFavorites = () => {
    FavoriteStore.deleteFavorite(product.id);
    ProductStore.deleteFavorite(product.id);
  };

  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        {/*@ts-ignore*/}
        <Image source={product.photo} style={styles.img} />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}> {product.price} руб. </Text>
        <Text style={styles.description}> {product.description} </Text>
        <View style={styles.rating}>
          {/*{rating.map(i => (*/}
          {/*  <AntDesign*/}
          {/*    key={i}*/}
          {/*    name={i <= product.rating ? 'star' : 'staro'}*/}
          {/*    size={28}*/}
          {/*    color="black"*/}
          {/*  />*/}
          {/*))}*/}
          {product.isFavorite ? (
            <TouchableOpacity onPress={removeFromFavorites}>
              {/*<AntDesign style={{ marginLeft: 24 }} name="heart" size={24} color="black" />*/}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={addToFavorites}>
              {/*<AntDesign style={{ marginLeft: 24 }} name="hearto" size={24} color="black" />*/}
            </TouchableOpacity>
          )}
        </View>
        {!product.inCart ? (
          <TouchableOpacity onPress={addToCart} style={styles.addButton}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.warning}> Already in cart</Text>
        )}
      </View>
    </View>
  );
};

export default observer(ProductCard);
