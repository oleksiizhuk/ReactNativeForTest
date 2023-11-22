import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#004aad',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkbox: {
    fontSize: 18,
    color: '#004aad',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#004aad',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: '#004aad',
    marginLeft: 10,
  },
});
