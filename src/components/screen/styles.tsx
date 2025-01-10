import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary
  },
  title: {
    color: colors.white,
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 32
  },
  image: {
    width: 256,
    height: 256,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: colors.white,
    marginBottom: 48
  },
  buttonContainer: {
    paddingBlock: 8,
    paddingInline: 16,
    backgroundColor: colors.secondary,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.white
  },
  buttonText: {
    color: colors.white,
    fontSize: 28,
  }
});