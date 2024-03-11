import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: COLORS.black,
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  textInput: {
    width: "60%",
    fontSize: SIZES.large,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 10,
    color: COLORS.white,
    margin: 5,
  },
  loginBtn: {
    marginTop: SIZES.medium,
    width: 100,
    height: 50,
    fontSize: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
  },
  loginText: {
    color: COLORS.text,
  },
  textPlaceholder: {
    color: COLORS.text,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.xxlarge,
    margin: SIZES.large,
  },
});

export default styles;
