import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { THomeStackProps } from "../models/navigationTypes";
import { Button } from "../components/Button";
import { colors } from "../utils/colors";

export interface IHomeScreenProps {
    navigation: NavigationProp<any>
}

export const HomeScreen: React.FC<THomeStackProps> = ({ navigation }) => {
    return (
      <Animated.View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.buttonContainer}>
            <Button text="Go to Secondary" touchCallback={() => navigation.navigate('Secondary')} />
        </View>
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    buttonContainer: {
        width: '50%',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'semibold',
    }
})