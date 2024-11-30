import Animated from "react-native-reanimated";
import { useDrawerTransform } from "../hooks/useDrawerTransform";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactsScreen } from "../screens/ContactsScreen";
import { RootStack } from "./RootStack";

const Tab = createBottomTabNavigator();

export const TabStack = ({ navigation }: { navigation: any }) => {
    const drawerTransform = useDrawerTransform();
    return (
      <Animated.View style={[styles.tabs, drawerTransform]}>
        <Tab.Navigator screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.openDrawer}>
              <Image
                source={require('../../assets/menu.png')}
                style={styles.menu}
              />
            </TouchableOpacity>
          ),
        }}>
          <Tab.Screen name="Main" component={RootStack} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
        </Tab.Navigator>
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    tabs: {
        flex: 1,
        overflow: 'hidden',
    },
    menu: {
        width: 24,
        height: 24,
        margin: 20,
    },
});