import { NavigationProp } from "@react-navigation/native";
import { Button, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

export const SecondaryScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
      <Animated.View style={styles.container}>
        <Text>Secondary Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.goBack()} />
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    }
})