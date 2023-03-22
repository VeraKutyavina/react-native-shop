import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductList from '@src/components/ProductList';
import ProductCard from '@src/components/ProductCard';
import Cart from '@src/components/Cart';
import Favorite from '@src/components/Favorite';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">{props => <ProductList {...props} />}</Stack.Screen>
        <Stack.Screen name="ProductCard">{props => <ProductCard {...props} />}</Stack.Screen>
        <Stack.Screen name="Cart">{props => <Cart {...props} />}</Stack.Screen>
        <Stack.Screen name="Favorite">{props => <Favorite {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
