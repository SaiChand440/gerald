import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { SharedValue } from "react-native-reanimated";

export const useDrawerTransform = () => {
    const drawerProgress = useDrawerProgress() as SharedValue<number>;
    return useAnimatedStyle(() => {
      const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.87]);
      const rotate = interpolate(drawerProgress.value, [0, 1], [0, -4]);
      const translateY = interpolate(drawerProgress.value, [0, 1], [0, 0]);
      return { 
        transform: [{ scale }, { 
          rotate: `${rotate}deg`
        }
        ,{
          translateY
        }
      ],
        borderRadius: interpolate(drawerProgress.value, [0, 1], [0, 20])
      };
    });
  }