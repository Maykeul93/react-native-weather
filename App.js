import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import BackgroundImg from "./assets/background.png";

import { style } from "./App.style";

import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Home/Forecast/Forecast";

const Stack = createNativeStackNavigator();
const navTheme = {
    colors: {
        background: "transparent",
    },
};
export default function App() {
    const [isFontLoaded] = useFonts({
        "Alata-Regular": AlataRegular,
    });
    console.log(isFontLoaded);
    return (
        <NavigationContainer theme={navTheme}>
            <SafeAreaProvider>
                <SafeAreaView style={style.app}>
                    <ImageBackground
                        source={BackgroundImg}
                        style={style.image_bg}
                        imageStyle={style.img}
                    >
                        {isFontLoaded ? (
                            <Stack.Navigator
                                screenOptions={{ headerShown: false }}
                                initialRouteName="Home"
                            >
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen
                                    name="Forecast"
                                    component={Forecast}
                                />
                            </Stack.Navigator>
                        ) : null}
                    </ImageBackground>
                </SafeAreaView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
