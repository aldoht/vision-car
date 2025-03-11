import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Broadcast from "./components/broadcast/Broadcast";
import Pads from "./components/pads/Pads";
import { ColorScheme } from "./interfaces/colorScheme";

const colorPalette: {[name: string] : ColorScheme } = {
  'yellowOrange': {
    consoleColor: '#FB940B',
    broadcastColor: '#B06808',
    backgroundColor: '#CC0001',
    padColor: {
      idle: '#8F0001',
      pressed: '#520000'
    }
  },
  // 'blueSurf': {
  //   consoleColor: '#0000FE',
  //   broadcastColor: '#03C0C6',
  //   backgroundColor: '#000000'
  // }
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