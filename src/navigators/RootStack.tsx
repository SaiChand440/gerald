import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SecondaryScreen } from "../screens/SecondaryScreen";

const Stack = createStackNavigator();

export const RootStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Secondary" component={SecondaryScreen} />
      </Stack.Navigator>
    );
  }