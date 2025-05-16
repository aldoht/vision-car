import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Broadcast from "./components/broadcast/Broadcast";
import Pads from "./components/pads/Pads";
import { ColorScheme } from "./interfaces/colorScheme";

const colorPalette: {[name: string] : ColorScheme } = {
  'yellowOrange': {
    consoleColor: '#FFB300',
    broadcastColor: '#CC8400',
    backgroundColor: '#3B1C00',
    padColor: {
      idle: '#5A2D00',
      pressed: '#2E1500'
    }
  },
  'blueSurf': {
    consoleColor: '#0078F0',
    broadcastColor: '#00B0B8',
    backgroundColor: '#1A1A1A',
    padColor: {
      idle: '#00284D',
      pressed: '#001320'
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colorPalette['yellowOrange'].backgroundColor
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    backgroundColor: colorPalette['yellowOrange'].consoleColor,
    borderRadius: 15
  },
  componentContainer: {
    height: '100%',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default function App() {
  return (
      <SafeAreaProvider style={styles.main}>
        <SafeAreaView style={styles.container}>
          <View style={styles.componentContainer}>
            <Broadcast bgColor={colorPalette['yellowOrange'].broadcastColor}></Broadcast>
            <Pads colorsY={colorPalette['yellowOrange'].padColor} colorsX={colorPalette['yellowOrange'].padColor}></Pads>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}