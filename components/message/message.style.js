import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";

const styles = StyleSheet.create({
  container : {
    width: "70%",
    padding: SIZES.medium,
    margin: SIZES.small,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: SIZES.xsmall
  },
  messageContent: {
    color: COLORS.text,
  },
  messageDate: {
    color: COLORS.text,
    fontSize: SIZES.xsmall,
  },
  right : {
    justifyContent : "flex-end"
  },
  left : {
    justifyContent : "flex-start"
  }
});

export default styles;
