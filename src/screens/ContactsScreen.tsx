import { Button, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";
import { TContactsStackProps } from "../models/navigationTypes";

export const ContactsScreen: React.FC<TContactsStackProps> = ({ navigation }) => {
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