import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SecondaryScreen } from "../screens/SecondaryScreen";
import { TMainStackProps, TRootStackParams } from "../models/navigationTypes";

const Stack = createStackNavigator<TRootStackParams>();

export const RootStack: React.FC<TMainStackProps> = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Secondary" component={SecondaryScreen} />
      </Stack.Navigator>
    );
  }