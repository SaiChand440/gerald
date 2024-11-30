import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { useDrawerTransform } from "../hooks/useDrawerTransform";

export const ProfileScreen = ({ navigation }: { navigation: any }) => {
    const drawerTransform = useDrawerTransform();
  
    return (
      <Animated.View style={[styles.container, drawerTransform]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuContainer}>
          <Image
            source={require('../../assets/menu.png')}
            style={styles.menu}
          />
        </TouchableOpacity>
        <Text>Profile Screen</Text>
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    menu: {
        width: 24,
        height: 24
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    menuContainer: {
        position: 'absolute',
        top: 70,
        left: 20
    }
})