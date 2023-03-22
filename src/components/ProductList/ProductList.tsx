import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

import ProductStore from '../../store/productStore';
import Header from "../Header";

import { styles } from './styled';

type TProductList = {
  navigation: any
}

const ProductList = ({ navigation }: TProductList) => {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {ProductStore.products.map((item) => (
            <View key={item.id} style={styles.productWrapper}>
              <Image style={styles.img} source={item.photo} />
              <TouchableOpacity onPress={() => navigation.navigate('ProductCard', { itemId: ProductStore.products.indexOf(item) })}>
                <Text style={styles.name}> {item.name} </Text>
              </TouchableOpacity>
              <Text style={styles.price}> {item.price} руб. </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
};

export default ProductList;