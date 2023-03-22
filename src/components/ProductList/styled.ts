import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    maxWidth: 170,
    maxHeight: 280
  },
  productWrapper: {
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginVertical: 4,
  },
  price: {
    color: '#b40808',
  }
});