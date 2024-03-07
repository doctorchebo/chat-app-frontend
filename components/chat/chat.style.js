import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xxlarge,
    padding: SIZES.small,
    backgroundColor: COLORS.background,
    borderRadius: SIZES.medium,
  },
  chatName: {
    fontSize: SIZES.medium,
    justifyContent: "center",
    color: COLORS.text,
  },
});

export default styles;
