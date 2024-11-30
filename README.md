This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Video Demo

https://github.com/user-attachments/assets/a3c82f1d-7c2d-48d4-8fa3-89271e48ec22

# Navigation Implementation 

Started out with plain navigation implementation, without any animations / styles.
Create the screen required : 
 - Home
 - Secondary
 - Contacts
 - Profile

The base ( i.e. the root navigator) was setup as a drawer navigator, with the following screens : 
 - Tabs
 - Profile

The Tab navigator has the following screens : 
 - Main
 - Contacts

In the main screen, a stack navigator was created with the following screens : 
 - Home
 - Secondary

# Animation Implementation 

To think about the animation, I started with the drawer navigator. 

I was able to implement the drawer animation using the `useDrawerProgress` hook. This hook returns a value between 0 and 1, which represents the progress of the drawer.

The screens animation was plain and simple, I just animated the transform, rotation and the scale of the screen. 

Problems faced : 
 - The animation of drawer where it translated on Y axis, couldn't figure out how to do it. 

How i arrived at the solution : 
 - I needed to use the `useDrawerTransform` hook, which returns the transform value for the drawer. However this was not useful as i need to animate the drawer itself which doesn't have access to this hook. 
 - I then realized that `drawerContent` has access to the `drawerProgress` value, which i can use to animate the drawer. I setup a shared value and passed it to the drawerContent component. 

 # Architecture 
 The codebase is setup with the following architecture : 
 - Models : This folder contains the types for the navigation and the shared values. 
 - Components : This folder contains the custom components for the project. 
 - Utils : This folder contains the utility functions for the project. 
 - Screens : This folder contains the screens for the project.

 P.S -> All the animations are done using the `react-native-reanimated` library and the codebase is 100% type safe. 

