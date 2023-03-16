import { Home } from "./pages/Home/Home";

// import { style } from "./App.style";

import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Home/Forecast/Forecast";
import { Container } from "./components/Container/Container";

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
        <Container>
            <NavigationContainer theme={navTheme}>
                {isFontLoaded ? (
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }}
                        initialRouteName="Home"
                    >
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Forecast" component={Forecast} />
                    </Stack.Navigator>
                ) : null}
            </NavigationContainer>
        </Container>
    );
}
