import { StyleSheet } from "react-native";

export const COMMON_STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: 100,
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fontStyle: {
    fontSize: 16,
    color: '#000',
  },
  weightOfFont: {
    fontWeight: '600',
  },
  colorOfBackground: {
    backgroundColor: '#fff'
  }
});
