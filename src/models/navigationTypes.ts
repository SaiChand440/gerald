import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export type TDrawerRouteParams = {
    Tabs: undefined;
    Profile: undefined;
  }

export type TTabsStackProps = DrawerScreenProps<TDrawerRouteParams, "Tabs">
export type TProfileStackProps = DrawerScreenProps<TDrawerRouteParams, "Profile">

export type TRootStackParams = {
    Home: undefined;
    Secondary: undefined;
  }
  
export type THomeStackProps = StackScreenProps<TRootStackParams, "Home">;
export type TSecondaryStackProps = StackScreenProps<TRootStackParams, "Secondary">;

export type TTabScreensProps = {
    Main: undefined;
    Contacts: undefined;
    Secondary: undefined;
  }
  
export type TMainStackProps = BottomTabScreenProps<TTabScreensProps, "Main">;
export type TContactsStackProps = BottomTabScreenProps<TTabScreensProps, "Contacts">;
