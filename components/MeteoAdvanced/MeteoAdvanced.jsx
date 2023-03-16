import {style, StyledLabel, StyledValue, StyledView} from './MeteoAdvanced.style'
import { View, Text } from 'react-native'
import { Txt } from '../Txt/Txt'
export function MeteoAdvanced({dusk, dawn, wind}) {
    return(
        <View style={style.container}>
            <StyledView>
                <StyledValue>{dusk}</StyledValue>
                <StyledLabel>Aube</StyledLabel>
            </StyledView>
            <StyledView>
                <StyledValue>{dawn}</StyledValue>
                <StyledLabel>Crépuscule</StyledLabel>
            </StyledView>
            <StyledView>
                <StyledValue>{wind} km/h</StyledValue>
                <StyledLabel>Vent</StyledLabel>
            </StyledView>
        </View>
    )
}