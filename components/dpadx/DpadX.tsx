import {StyleSheet, Text, View} from "react-native";
import { PadStateColor } from "../../interfaces/padStateColor";

type padProps = {
    colors: PadStateColor
}

const DpadX = (props: padProps)=> {
    return (
        <View style={[styles.container, {backgroundColor: props.colors.idle}]}>
            <Text>DpadX is working!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DpadX;