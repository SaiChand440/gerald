import Animated from "react-native-reanimated";
import { useDrawerTransform } from "../hooks/useDrawerTransform";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactsScreen } from "../screens/ContactsScreen";
import { RootStack } from "./RootStack";
import { TTabScreensProps, TTabsStackProps } from "../models/navigationTypes";


const Tab = createBottomTabNavigator<TTabScreensProps>();

export const TabStack: React.FC<TTabsStackProps> = ({ navigation }) => {
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
        }}
        initialRouteName="Main"
        >
          <Tab.Screen name="Main" component={RootStack} options={{
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../../assets/home.png') : require('../../assets/home_outline.png')} style={styles.tabIcon} />
            ),
            tabBarLabelStyle: {
              color: 'black',
            },
          }} />
          <Tab.Screen name="Contacts" component={ContactsScreen} options={{
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? require('../../assets/contacts.png') : require('../../assets/contacts_outline.png')} style={styles.tabIcon} />
            ),
            tabBarLabelStyle: {
              color: 'black',
            },
          }} />
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
    tabIcon: {
        width: 24,
        height: 24,
    },
});