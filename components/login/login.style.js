import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xxlarge,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput:{
    width: "60%",
    fontSize: SIZES.large,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 10,
    color: COLORS.black,
    margin: 5,
  },
  loginBtn:{
    marginTop: SIZES.medium,
    width: 100,
    height: 50,
    fontSize: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
  },
  loginText : {
    color: COLORS.text,
  },
  textPlaceholder:{
    color: COLORS.text
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.xxlarge,
  }
});

export default styles;
