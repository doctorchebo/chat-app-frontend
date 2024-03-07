import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: SIZES.xxlarge,
    borderRadius: SIZES.xxlarge,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "20%",
    borderWidth: 2,
    borderColor: COLORS.primary,
    padding: SIZES.large,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contactText: {
    color: COLORS.text,
    fontSize: SIZES.large,
  },
});

export default styles;
