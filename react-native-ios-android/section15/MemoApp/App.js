// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { Platform } from 'react-native';
import firebase from "firebase";

// import BodyText from "./src/elements/BodyText";
// import Appbar from "./src/components/Appbar";
import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDateilScreen from "./src/screens/MemoDateilScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

import ENV from "./env.json";

require("firebase/firestore");

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {/* <BodyText>Hello React!</BodyText> */}
//       <Appbar />
//       {/* <MemoListScreen /> */}
//       {/* <MemoDateilScreen /> */}
//       {/* <MemoEditScreen /> */}
//       {/* <LoginScreen /> */}
//       {/* <SignupScreen /> */}
//     </View>
//   );
// }

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDateilScreen },
    MemoEdit: { screen: MemoEditScreen },
    MemoCreate: {screen: MemoCreateScreen},
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Memott",
      headerTintColor: "#fff",
      headerBackTitle: null,
      headerStyle: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: "#265366",
        // ...Platform.select({
        //   android: {
        //     height: 80,
        //     paddingTop: 20,
        //   },
        // }),
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFDF6",
//     alignItems: "center",
//     justifyContent: "center",
//     // appbarのheightと同じ値を指定することで余白を作りappbarとmemoListがかぶらないようにしている
//     paddingTop: 78,
//   },
// });

export default createAppContainer(App);
