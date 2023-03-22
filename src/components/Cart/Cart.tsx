import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import CartStore from '@src/store/cartStore';
import ProductStore from '@src/store/productStore';

import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import CounterInput from '../CounterInput';

import { styles } from './styled';

type TCart = {
  navigation: any;
  route: any;
};

const Cart = ({}: TCart) => {
  const products = CartStore.cart;
  const totalPrice = useMemo(
    () => products.reduce((obj, item) => obj + item.price * item.inCart, 0),
    [products],
  );

  const removeFromCart = (id: string) => {
    CartStore.deleteFromCart(id);
    ProductStore.removeCartCount(id);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id, inCart }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  {/*@ts-ignore*/}
                  <Image style={styles.img} source={photo} />
                  <View>
                    <Text style={styles.name}> {name} </Text>
                    <CounterInput defaultValue={inCart} fontSize={14} id={id} />
                  </View>
                </View>
                <Text style={styles.price}> {inCart * price} руб. </Text>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(id)}>
                <Text style={styles.remove}> Remove </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.totalPrice}>
        Total price: <Text style={styles.totalPriceNumber}> {totalPrice} руб. </Text>
      </Text>
    </>
  );
};

export default observer(Cart);
