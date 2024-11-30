import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabStack } from './TabStack';
import { Dimensions } from 'react-native';
import { DrawerContent } from '../components/DrawerContent';
import { ProfileScreen } from '../screens/ProfileScreen';

const { width: WINDOW_WIDTH } = Dimensions.get('window');

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
    const drawerProgressValue = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        marginTop: drawerProgressValue.value * 60,
        borderRadius: drawerProgressValue.value * 20,
      }
    })
  
    const drawerStyle = useAnimatedStyle(() => {
      return {
        borderTopLeftRadius: drawerProgressValue.value * 20,
      }
    })
    
    return (
      <Animated.View style={[animatedStyle, { flex: 1 }]}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent drawerProgress={drawerProgressValue} otherProps={props}  />}
          initialRouteName='Tabs'
          screenOptions={{
            drawerStyle: [drawerStyle, {
              backgroundColor: '#1C1B2E',
              width: WINDOW_WIDTH * 0.4,
            }],
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
            },
          }}
        >
          <Drawer.Screen name="Tabs" component={TabStack} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      </Animated.View>
    );
  }