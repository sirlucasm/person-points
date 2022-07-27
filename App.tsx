import { useFonts } from 'expo-font';
import AppLoading from './src/components/organisms/AppLoading';
import { AppProvider } from './src/contexts/app/provider';
import { AuthProvider } from './src/contexts/auth/provider';
import Navigation from './src/navigations';

export default function App() {
  let [ fontsLoaded ] = useFonts({
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
