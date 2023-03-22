import React from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import FavoriteStore from '@src/store/favoriteStore';
import ProductStore from '@src/store/productStore';
import { styles } from './styled';

type TFavorite = {
  navigation: any;
  route: any;
};

const Favorite = ({}: TFavorite) => {
  const products = FavoriteStore.favorites;

  const removeFromFavorite = (id: string) => {
    FavoriteStore.deleteFavorite(id);
    ProductStore.deleteFavorite(id);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  {/*@ts-ignore*/}
                  <Image style={styles.img} source={photo} />
                  <View>
                    <Text style={styles.name}> {name} </Text>
                  </View>
                </View>
                <Text style={styles.price}> {price} руб. </Text>
              </View>
              <TouchableOpacity onPress={() => removeFromFavorite(id)}>
                <Text style={styles.remove}> Remove </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default observer(Favorite);
