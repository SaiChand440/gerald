import { ActivityIndicator, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { ScaleAnimatedTouchable } from "./ScaleAnimatedTouchable";
import { colors } from "../utils/colors";

interface IButtonProps {
    touchCallback: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    text: string;
    isLoading?: boolean;
}

export const Button = ({ touchCallback, style, text, textStyle }: IButtonProps) => {
    return (
        <ScaleAnimatedTouchable
            touchCallback={touchCallback}
            style={{width: '90%'}}
        >
            <View style={[styles.buttonContainer, style]}>
               <Text style={[styles.buttonText, textStyle]}>
                    {text}
                </Text>
            </View>
        </ScaleAnimatedTouchable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: colors.black,
        width: '100%',
        padding: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'semibold',
    },
});