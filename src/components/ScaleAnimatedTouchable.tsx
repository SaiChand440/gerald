import React, { useRef } from 'react';
import {
	Animated,
	StyleProp,
	TouchableWithoutFeedback,
	ViewStyle,
} from 'react-native';

interface IProps {
	touchCallback?: () => void;
	children: any;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
}

export const ScaleAnimatedTouchable = ({
	children,
	touchCallback,
	style,
	disabled,
}: IProps) => {
	const scaleValue = useRef(new Animated.Value(0));

	const performScaleAnimationWithCallback = () => {
		scaleValue.current.setValue(0);
		Animated.timing(scaleValue.current, {
			toValue: 1,
			duration: 150,
			useNativeDriver: true,
		}).start(() => {
			Animated.timing(scaleValue.current, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
			}).start(touchCallback);
		});
	};

	const getScaleTransformStyle = () => {
		const interpolatedValue = scaleValue.current.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 0.97],
		});
		return { transform: [{ scale: interpolatedValue }] };
	};

	if (disabled) {
		return <Animated.View style={style}>{children}</Animated.View>;
	}

	return (
		<Animated.View
			style={[getScaleTransformStyle(), style, {width: '100%'}]}
		>
			<TouchableWithoutFeedback
				onPress={() => {
					performScaleAnimationWithCallback();
				}}
			>
				{children}
			</TouchableWithoutFeedback>
		</Animated.View>
	);
};
