import { Button, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";
import { TSecondaryStackProps } from "../models/navigationTypes";

export const SecondaryScreen: React.FC<TSecondaryStackProps> = ({ navigation }) => {
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