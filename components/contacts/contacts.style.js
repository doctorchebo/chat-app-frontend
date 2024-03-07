import {StyleSheet} from "react-native"
import {COLORS, SIZES} from "../../constants/theme.ts"

const styles = StyleSheet.create({
    container : {
        marginTop : SIZES.xxlarge,
    },
    text: {
        color: COLORS.text
    },
    title: {
        textAlign: "center",
        color: COLORS.primary,
        fontSize: SIZES.xxlarge
    }
})

export default styles;