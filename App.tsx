import './src/configs/firebase';
import { useFonts } from 'expo-font';
import AppLoading from './src/components/organisms/AppLoading';
import { AppProvider } from './src/contexts/app/provider';
import { AuthProvider } from './src/contexts/auth/provider';
import Navigation from './src/navigations';
import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  let [ fontsLoaded ] = useFonts({
    'Lionel-Text-Steam-Regular': require('./src/assets/fonts/Lionel-Text-Steam-Regular.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('./src/assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <AuthProvider>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </AuthProvider>
  );
}
