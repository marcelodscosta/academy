import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { StatusBar } from 'expo-status-bar';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>

      <StatusBar style="light" />
      {
        fontsLoaded ?
          <SignIn /> :
          <Loading />
      }

    </GluestackUIProvider>
  );
}

