import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { LeadProvider } from './src/context/LeadContext';
import Toast from 'react-native-toast-message'; 

export default function App() {
  return (
    <LeadProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>

      {/* ✅ Toast must be at root of app */}
      <Toast />
    </LeadProvider>
  );
}
