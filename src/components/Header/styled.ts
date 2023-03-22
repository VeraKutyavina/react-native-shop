import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    fontSize: 20,
  },
  iconsWrapper: {
    flexDirection: 'row',
  },
  productsCount: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
  },
});