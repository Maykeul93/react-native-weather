import { TextInput } from "react-native";
import {style} from './SearchBar.style'

export function SearchBar({onSubmit}){
    return (
        <TextInput 
            style={style.input}
            onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
            placeholder="Chercher une ville... Ex: Paris"
        />
    )
}