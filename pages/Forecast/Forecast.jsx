import { Txt } from "../../components/Txt/Txt";
import { style } from './Forecast.style';
import { useRoute, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { dateToDDMM, DAYS } from "../../services/date-service";

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
    const ForcastList = (
        <View style={style.forecastList}>
            {params.time.map((time, index) => {
                const code = params.weathercode[index]
                const image = getWeatherInterpretation(code).image;
                const date = new Date(time)
                const day = DAYS[date.getDay()] 
                const temperature = params.temperature_2m_max[index]
                return (
                    <ForecastListItem
                        key={time}
                        time={time}
                        image={image}
                        day={day}
                        date={dateToDDMM(date)}
                        temperature={temperature.toFixed(0)}
                    />
                )
            })}
        </View>
    )
    return (
        <>
            {header}
            {ForcastList}
        </>
    )
}