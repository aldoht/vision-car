import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

type broadcastProps = {
    bgColor: string
}

const iframeString = '<iframe src="http://172.20.10.2/stream"\n' +
                'title="Video Broadcast" width="800" height="800">\n' +
                '</iframe>'

const Broadcast = (props: broadcastProps)=> {
    return (
        <View style={[styles.container, { backgroundColor: props.bgColor }]}>
            <WebView
                scalesPageToFit={true}
                bounces={false}
                javaScriptEnabled
                style={{ height: 240, width: 240 }}
                source={{
                    html: `
                  <!DOCTYPE html>
                  <html>
                    <body>
                      <img src="http://172.20.10.2/stream" alt="http://172.20.10.2/stream" style="width: 100%; height: 100%">
                    </body>
                  </html>
            `,
                }}
                automaticallyAdjustContentInsets={false}
            />
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