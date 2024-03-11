import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: SIZES.small,
    marginLeft: SIZES.xsmall,
    marginRight: SIZES.xsmall,
    borderRadius: SIZES.medium,
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: COLORS.black,
    height: 100,
    alignItems: "center",
    justifyContent: "flex-center",
  },
  title: {
    fontSize: SIZES.xlarge,
    justifyContent: "center",
    color: COLORS.white,
  },
  dataContainer: {
    flex: 1,
  },
  lastMessage: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default styles;
