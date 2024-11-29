// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerNavigationProp, useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { interpolate, SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';

const { width: WINDOW_WIDTH } = Dimensions.get('window');

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <Animated.View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }]}>
      <Text>Home Screen</Text>
      <Button title="Go to Secondary" onPress={() => navigation.navigate('Secondary')} />
    </Animated.View>
  );
}

function SecondaryScreen({ navigation }: { navigation: any }) {
  return (
    <Animated.View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }]}>
      <Text>Secondary Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </Animated.View>
  );
}

function ProfileScreen({ navigation }: { navigation: any }) {
  const drawerTransform = useDrawerTransform();

  return (
    <Animated.View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }, drawerTransform]}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', top: 46, left: 3 }}>
        <Image
          source={require('./assets/menu.png')}
          style={styles.menu}
        />
      </TouchableOpacity>
      <Text>Profile Screen</Text>
    </Animated.View>
  );
}

function ContactsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text>Contacts Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyDrawer = () => {
  
  return (
    <Animated.View style={[{ flex: 1 }]}>
      <Drawer.Navigator
        initialRouteName='Tabs'
        screenOptions={{
        drawerStyle: {
          backgroundColor: '#1C1B2E',
          width: WINDOW_WIDTH * 0.4,
        },
        drawerActiveTintColor: '#DF6C61',
        drawerActiveBackgroundColor: 'rgba(233,133,104, 0.2)',
        drawerInactiveTintColor: '#EEEEE1',
        drawerType: 'slide',
        overlayColor: 'transparent',
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#1C1B2E',
        },
        drawerItemStyle: {
          borderRadius: 10,
        }
      }}
      drawerContent={(props) => {
        return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen 
        name="Tabs" 
        component={MyTabs}
      />
        
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen}
        />
      </Drawer.Navigator>
    </Animated.View>
  );
}

const useDrawerTransform = () => {
  const drawerProgress = useDrawerProgress() as SharedValue<number>;
  return useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.87]);
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -4]);
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 0]);
    return { 
      transform: [{ scale }, { 
        rotate: `${rotate}deg`
      }
      ,{
        translateY
      }
    ],
      borderRadius: interpolate(drawerProgress.value, [0, 1], [0, 20])
    };
  });
}

const MyTabs = ({ navigation }: { navigation: any }) => {
  const drawerTransform = useDrawerTransform();
  return (
    <Animated.View style={[styles.tabs, drawerTransform]}>
      <Tab.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={navigation.openDrawer}>
            <Image
              source={require('./assets/menu.png')}
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

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Secondary" component={SecondaryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  menu: {
    width: 24,
    height: 24,
    margin: 20,
  },
  tabs: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  }
});