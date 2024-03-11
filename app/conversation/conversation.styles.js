import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme.ts";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  messageContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 5,
  },
  textMessage: {
    color: COLORS.white,
  },
  newMessageContainer: {
    width: "95%",
    flexDirection: "row",
    marrginTop: SIZES.xxlarge,
    alignItems: "center",
    gapRow: SIZES.large,
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.black,
    zIndex: 1,
  },
  textInput: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "85%",
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
    color: COLORS.white,
  },
});

export default styles;
