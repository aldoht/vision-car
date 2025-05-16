import { useState } from "react";
import {StyleSheet, View, TouchableOpacity, Alert} from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg"
import { PadStateColor } from "../../interfaces/padStateColor";

type padProps = {
    colors: PadStateColor
}

const moveForward = () => {
    Alert.alert('You are moving forward!');
};
const moveBackward = () => {
    Alert.alert('You are moving backward!');
};

const PadTopSvg = (props: SvgProps) => (
    <Svg
        width={183.231}
        height={274.454}
        viewBox="0 0 48.48 72.616"
        {...props}
    >
        <Path
            d="M80.643 15.72h47.497a7.937 7.937 45 0 1 7.937 7.938v80.453a.035.035 135 0 1-.035.035H72.705V23.658a7.937 7.937 135 0 1 7.938-7.938z"
            style={{
                fill: "#000",
                fillOpacity: 0.0547619,
                stroke: "#000",
                strokeWidth: 1.02331,
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="matrix(.75285 0 0 .81182 -54.351 -12.346)"
        />
        <Path
            d="M105 28.772 93.013 40.759h23.974Z"
            style={{
                fill: "#000",
                fillOpacity: 0.0547619,
                stroke: "#000",
                strokeWidth: 0.8,
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="translate(-80.76 -19.8)"
        />
        <Path
            d="m88.258 62.918 12.872 22.295M121.767 62.918l-12.872 22.295"
            style={{
                fill: "#000",
                fillOpacity: 0.0547619,
                stroke: "#000",
                strokeWidth: 0.799999,
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="translate(-80.76 -19.8)"
        />
    </Svg>
)

const PadBottomSvg = (props: SvgProps) => (
    <Svg
        width={183.231}
        height={274.454}
        viewBox="0 0 48.48 72.616"
        {...props}
    >
        <Path
            d="M80.643 15.72h47.497a7.937 7.937 45 0 1 7.937 7.938v80.453a.035.035 135 0 1-.035.035H72.705V23.658a7.937 7.937 135 0 1 7.938-7.938z"
            style={{
                fill: "#000",
                fillOpacity: 0.0547619,
                stroke: "#000",
                strokeWidth: 1.02331,
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="matrix(-.75285 0 0 -.81182 102.831 84.962)"
        />
        <Path
            d="m104.89 163.443 11.987-11.987H92.903Z"
            style={{
                fill: "#000",
                fillOpacity: 0.0547619,
                stroke: "#000",
                strokeWidth: 0.8,
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="translate(-80.65 -99.798)"
        />
        <Path
            d="m121.632 129.296-12.872-22.294M88.123 129.296l12.872-22.294"
            style={{
                fill: "#000",
                fillOpacity: 0.0547619,
                stroke: "#000",
                strokeWidth: 0.799999,
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="translate(-80.65 -99.798)"
        />
    </Svg>
)

const DpadY = (props: padProps) => {
    const [topPressed, setTopPressed] = useState(false);
    const [bottomPressed, setBottomPressed] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.pad,
                    styles.padTop,
                    {backgroundColor: topPressed ? props.colors.pressed : props.colors.idle}
                ]}
                onLongPress={moveForward}
                activeOpacity={1}
                onPressIn={() => setTopPressed(true)}
                onPressOut={() => setTopPressed(false)}
            >
                <PadTopSvg height={150} width={100.143}></PadTopSvg>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.pad,
                    styles.padBottom,
                    {backgroundColor: bottomPressed ? props.colors.pressed : props.colors.idle}
                ]}
                onLongPress={moveBackward}
                activeOpacity={1}
                onPressIn={() => setBottomPressed(true)}
                onPressOut={() => setBottomPressed(false)}
            >
                <PadBottomSvg height={150} width={100.143}></PadBottomSvg>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    pad: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    padTop: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    padBottom: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
})

export default DpadY;