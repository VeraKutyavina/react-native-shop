import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import CartStore from '@src/store/cartStore';

import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styled';

type CounterInputType = {
  fontSize: number;
  defaultValue: number;
  id: string;
};

const CounterInput = ({ fontSize, defaultValue, id }: CounterInputType) => {
  const [value, setValue] = useState(defaultValue);

  const increaseValue = () => {
    CartStore.addCartCount(id);
    setValue(value + 1);
  };
  const decreaseValue = () => {
    CartStore.removeCartCount(id);
    setValue(value - 1);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={increaseValue}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.value, fontSize: fontSize }}> {value} шт. </Text>
      <TouchableOpacity disabled={value === 0} onPress={decreaseValue}>
        <Text style={styles.button}>—</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(CounterInput);
