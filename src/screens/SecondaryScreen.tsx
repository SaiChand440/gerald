import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { TSecondaryStackProps } from "../models/navigationTypes";
import { Button } from "../components/Button";
import { colors } from "../utils/colors";

export const SecondaryScreen: React.FC<TSecondaryStackProps> = ({ navigation }) => {
    return (
      <Animated.View style={styles.container}>
        <Text style={styles.title}>Secondary Screen</Text>
        <View style={styles.buttonContainer}>
            <Button text="Go back Home" touchCallback={() => navigation.goBack()} />
        </View>
      </Animated.View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary
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