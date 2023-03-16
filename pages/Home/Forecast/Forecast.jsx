import { Txt } from "../../../components/Txt/Txt";
import { style } from './Forecast.style';
import { useRoute, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

export function Forecast(){
    const { params } = useRoute();
    const nav = useNavigation();
    const backButton = (
        <TouchableOpacity
        style={style.backButton}
        onPress={() => nav.goBack()}
        >
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
    )
    const header = (
        <View style={style.header}>
            {backButton}
            <View style={style.header_texts}>
                <Txt>
                    {params.city}
                </Txt>
                <Txt style={style.subtitle}>
                    Prévision sur 7 jours
                </Txt>
            </View>
        </View>
    )
    return (
        <>
            {header}
        </>
    )
}