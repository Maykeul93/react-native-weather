import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt";
import {style} from './ForecastListItem.style';

export function ForecastListItem({image, day, date, temperature}){
    return(
        <View style={style.container}>
            <Image source={image} style={style.image} />
            <Txt style={style.day} >{day}</Txt>
            <Txt style={style.date}>{date}</Txt>
            <Txt style={style.temperature}>{temperature}°</Txt>
        </View>
    )
}