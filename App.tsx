import { config } from "@gluestack-ui/config";
import { Center, GluestackUIProvider } from '@gluestack-ui/themed';

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <Center flex={1}>
        <StatusBar style="auto" />
        {
          fontsLoaded ?
            <Text
              style={{
                fontFamily: 'Roboto_700Bold'
              }}>Hello World</Text> :
            <Loading />
        }
      </Center>
    </GluestackUIProvider>
  );
}

