import { Image, View } from 'react-native'
import { Clock } from '../Clock/Clock'
import { Txt } from '../Txt/Txt'
import {style} from './MeteoBasic.style'

export function MeteoBasic({temperature, city, interpretation}){
    return(
        <>
        <View style={style.clock}>
            <Txt>
                <Clock/>
            </Txt>
        </View>
        <Txt>
            {city}
        </Txt>
        <Txt style={style.weather_label}>
            {interpretation.label}
        </Txt>
        <View style={style.temperature_box}>
            <Txt style={style.temperature}>
                {temperature}°
            </Txt>
            <Image style={style.img} source={interpretation.image}/>
        </View>
        </>
    )
}