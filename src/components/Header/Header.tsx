import React from 'react';
import { observer } from 'mobx-react-lite';
import CartStore from '@src/store/cartStore';

import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styled';

type THeader = {
  navigation: any;
};

const Header = ({ navigation }: THeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> LICHI </Text>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <Icon style={styles.icon} size={32} color="black" name="hearto" type="antdesign" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon style={styles.icon} size={32} color="black" name="shoppingcart" type="antdesign" />
        </TouchableOpacity>
        <View style={styles.productsCount}>
          <Text>{CartStore.cart.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default observer(Header);
