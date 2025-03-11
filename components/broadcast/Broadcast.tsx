import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

type broadcastProps = {
    bgColor: string
}

const Broadcast = (props: broadcastProps)=> {
    return (
        <View style={[styles.container, { backgroundColor: props.bgColor }]}>
            <Text>Broadcast works correctly!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '40%',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
})

export default Broadcast;