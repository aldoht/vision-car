import { StyleSheet } from "react-native";
import DpadY from "../dpady/DpadY";
import DpadX from "../dpadx/DpadX";

export default function Pads() {
    return (
        <div style={styles.controller}>
            <DpadY></DpadY>
            <DpadX></DpadX>
        </div>
    )
}

const styles = StyleSheet.create({
    controller: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})