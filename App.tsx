
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/LoginScreen'
import SigninScreen from './src/SignInScreen'
import Forget from './src/Forget'
import HomeScreen from './src/HomeScreen'
import Navbar from './src/components/Navbar'
import AddMeeting from './src/AddMeeting'

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signin" component={SigninScreen} />
          <Stack.Screen name="forget" component={Forget} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="navbar" component={Navbar} />
          <Stack.Screen name="add" component={AddMeeting} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
