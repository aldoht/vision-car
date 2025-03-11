import {StyleSheet, View} from "react-native";
import DpadY from "../dpady/DpadY";
import DpadX from "../dpadx/DpadX";
import {PadStateColor} from "../../interfaces/padStateColor";

type padProps = {
    colorsY: PadStateColor,
    colorsX: PadStateColor
}

const Pads = (props: padProps) => {
    return (
        <View style={styles.controller}>
            <DpadY colors={props.colorsY}></DpadY>
            <DpadX colors={props.colorsX}></DpadX>
        </View>
    )
}

const styles = StyleSheet.create({
    controller: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default Pads;