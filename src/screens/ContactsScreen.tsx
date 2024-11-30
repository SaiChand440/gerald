import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { TContactsStackProps } from "../models/navigationTypes";
import { colors } from "../utils/colors";

export const ContactsScreen: React.FC<TContactsStackProps> = ({ navigation }) => {
    return (
      <Animated.View style={styles.container}>
        <Text style={styles.title}>Contacts Screen</Text>
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.tertiary
      },
    title: {
        fontSize: 24,
        fontWeight: 'semibold',
    },
})