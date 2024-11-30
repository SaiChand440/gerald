import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps, useDrawerProgress  } from "@react-navigation/drawer";
import { SharedValue, useAnimatedStyle } from "react-native-reanimated";

export const DrawerContent = ({ drawerProgress: fromProps, otherProps }: { drawerProgress : SharedValue<number> , otherProps: DrawerContentComponentProps}) => {
    const drawerProgress = useDrawerProgress() as SharedValue<number>;
    useAnimatedStyle(() => {
      fromProps.value = drawerProgress.value;
      return {}
    })
  
    return (
      <DrawerContentScrollView {...otherProps}>
        <DrawerItemList {...otherProps} />
      </DrawerContentScrollView>
    );
  };
  