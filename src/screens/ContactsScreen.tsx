import { NavigationProp } from "@react-navigation/native";
import { Button, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

export const ContactsScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
      <Animated.View style={styles.container}>
        <Text>Contacts Screen</Text>
        <Button title="Go to Secondary" onPress={() => navigation.navigate('Secondary')} />
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
})