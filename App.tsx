import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Text style={{ fontFamily: 'Roboto_700Bold' }}>Hello World</Text> : <View></View>}
    </View>
  );
}

