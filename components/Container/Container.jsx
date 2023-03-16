import { style } from './Container.style'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import BackgroundImg from "../../assets/background.png";

export function Container({children}){
    return(
            <SafeAreaProvider>
                <SafeAreaView style={style.app}>
                    <ImageBackground
                        source={BackgroundImg}
                        style={style.image_bg}
                        imageStyle={style.img}
                    >{children}</ImageBackground>
                </SafeAreaView>
            </SafeAreaProvider>
    )
}