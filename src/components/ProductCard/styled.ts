import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: '100%',
  },
  img: {
    height: 320,
    width: 320,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 24,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#b40808',
    fontSize: 22,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#919191',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
  addButton: {
    width: '90%',
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  warning: {
    marginTop: 16,
  }
});