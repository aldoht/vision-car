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
  },
  'greenWave': {
    consoleColor: '#00FF66',
    broadcastColor: '#33FFAA',
    backgroundColor: '#0D1F0D',
    padColor: {
      idle: '#145C32',
      pressed: '#072D19'
    }
  },
  'purpleNight': {
    consoleColor: '#D300FF',
    broadcastColor: '#FF77E9',
    backgroundColor: '#1A001F',
    padColor: {
      idle: '#3C0052',
      pressed: '#1A0028'
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colorPalette['purpleNight'].backgroundColor
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    backgroundColor: colorPalette['purpleNight'].consoleColor,
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
            <Broadcast bgColor={colorPalette['purpleNight'].broadcastColor}></Broadcast>
            <Pads colorsY={colorPalette['purpleNight'].padColor} colorsX={colorPalette['purpleNight'].padColor}></Pads>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}