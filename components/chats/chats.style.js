import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/theme.ts";

const styles = StyleSheet.create({
  container: {},
  pageContainer: {
    height: "100%",
  },
  listContainer: {
    margin: "auto",
  },
  text: {
    color: COLORS.text,
    padding: SIZES.xsmall,
  },
  chatBtn: {
    width: 100,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  createBtn: {
    padding: SIZES.small,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xsmall,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: SIZES.large,
    right: SIZES.large,
  },
  deleteContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.error,
    height: "50%",
    width: "auto",
    padding: 10,
    marginLeft: SIZES.xsmall,
    marginRight: SIZES.xsmall,
  },
});

export default styles;
