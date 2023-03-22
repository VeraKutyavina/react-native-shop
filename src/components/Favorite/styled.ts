import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    maxWidth: 75,
    maxHeight: 75,
    marginRight: 10,
  },
  productWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderColor: '#d2d2d2',
    marginBottom: 10,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  price: {
    fontWeight: 'bold',
    color: '#4b9d22',
    fontSize: 17,
    marginRight: 28,
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 16,
  },
  totalPriceNumber: {
    color: '#4b9d22',
    fontSize: 20,
  },
  remove: {
    marginBottom: 8,
  },
});
