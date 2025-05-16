import {Alert, StyleSheet, TouchableHighlight, TouchableOpacity, View} from "react-native";
import { PadStateColor } from "../../interfaces/padStateColor";
import Svg, { SvgProps, Path } from "react-native-svg"
import {useState} from "react";

type padProps = {
    colors: PadStateColor
}

const moveLeft = () => {
    Alert.alert('You are moving left!');
};
const moveRight = () => {
    Alert.alert('You are moving right!');
};

const PadLeftSvg = (props: SvgProps)=> (
    <Svg
        width="72.615974mm"
        height="48.479874mm"
        viewBox="0 0 72.615974 48.479874"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M80.643 15.72h47.497a7.937 7.937 45 017.937 7.938v80.453a.035.035 135 01-.035.035H72.705V23.658a7.937 7.937 135 017.938-7.938z"
            transform="translate(-28.693 -214.413) matrix(0 -.75285 .81182 0 16.347 317.244)"
            fill="#000"
            fillOpacity={0.0547619}
            stroke="#000"
            strokeWidth={1.02331}
            strokeDasharray="none"
            strokeOpacity={1}
        />
        <Path
            d="M37.665 238.653L49.65 250.64v-23.974z"
            transform="translate(-28.693 -214.413)"
            fill="#000"
            fillOpacity={0.0547619}
            stroke="#000"
            strokeWidth={0.8}
            strokeDasharray="none"
            strokeOpacity={1}
        />
        <Path
            d="M71.81 255.395l22.296-12.872M71.81 221.886l22.296 12.872"
            transform="translate(-28.693 -214.413)"
            fill="#000"
            fillOpacity={0.0547619}
            stroke="#000"
            strokeWidth={0.799999}
            strokeDasharray="none"
            strokeOpacity={1}
        />
    </Svg>
)

const PadRightSvg = (props: SvgProps) => (
    <Svg
        width="72.61599mm"
        height="48.479874mm"
        viewBox="0 0 72.61599 48.479874"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M80.643 15.72h47.497a7.937 7.937 45 017.937 7.938v80.453a.035.035 135 01-.035.035H72.705V23.658a7.937 7.937 135 017.938-7.938z"
            transform="translate(-108.691 -214.523) matrix(0 .75285 -.81182 0 193.653 160.172)"
            fill="#000"
            fillOpacity={0.0547619}
            stroke="#000"
            strokeWidth={1.02331}
            strokeDasharray="none"
            strokeOpacity={1}
        />
        <Path
            d="M172.335 238.763l-11.986-11.987v23.974z"
            transform="translate(-108.691 -214.523)"
            fill="#000"
            fillOpacity={0.0547619}
            stroke="#000"
            strokeWidth={0.8}
            strokeDasharray="none"
            strokeOpacity={1}
        />
        <Path
            d="M138.19 222.02l-22.296 12.873M138.19 255.53l-22.296-12.872"
            transform="translate(-108.691 -214.523)"
            fill="#000"
            fillOpacity={0.0547619}
            stroke="#000"
            strokeWidth={0.799999}
            strokeDasharray="none"
            strokeOpacity={1}
        />
    </Svg>
)

const DpadX = (props: padProps)=> {
    const [leftPressed, setLeftPressed] = useState(false);
    const [rightPressed, setRightPressed] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.pad,
                    styles.padLeft,
                    {backgroundColor: leftPressed ? props.colors.pressed : props.colors.idle}
                ]}
                onLongPress={moveLeft}
                activeOpacity={1}
                onPressIn={() => setLeftPressed(true)}
                onPressOut={() => setLeftPressed(false)}
            >
                <PadLeftSvg height={100.143} width={150}></PadLeftSvg>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.pad,
                    styles.padRight,
                    {backgroundColor: rightPressed ? props.colors.pressed : props.colors.idle}
                ]}
                onLongPress={moveRight}
                activeOpacity={1}
                onPressIn={() => setRightPressed(true)}
                onPressOut={() => setRightPressed(false)}
            >
                <PadRightSvg height={100.143} width={150}></PadRightSvg>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    pad: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    padLeft: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    padRight: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    }
})

export default DpadX;