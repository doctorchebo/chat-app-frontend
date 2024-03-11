import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme.ts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.xxlarge,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-center",
    height: "100%",
  },
  text: {
    color: COLORS.white,
  },
  title: {
    textAlign: "center",
    color: COLORS.primary,
    fontSize: SIZES.xxlarge,
  },
  addBtn: {
    padding: SIZES.small,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xsmall,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: SIZES.large,
    right: SIZES.large,
  },
});

export default styles;
