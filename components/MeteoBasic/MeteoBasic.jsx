import { Image, TouchableOpacity, View } from 'react-native'
import { Clock } from '../Clock/Clock'
import { Txt } from '../Txt/Txt'
import {style} from './MeteoBasic.style'

export function MeteoBasic({onPress, temperature, city, interpretation}){
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
        <TouchableOpacity onPress={onPress}>
            <Txt style={style.temperature}>
                {temperature}°
            </Txt>
        </TouchableOpacity>
            <Image style={style.img} source={interpretation.image}/>
        </View>
        </>
    )
}