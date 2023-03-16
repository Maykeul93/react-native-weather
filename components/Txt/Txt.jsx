import { Text, useWindowDimensions } from "react-native";

import {s} from "./Txt.style";

export function Txt({children, style}) {
    const {height}= useWindowDimensions()
    const fontSize = style?.fontSize || s.txt.fontSize;
    return(
        <Text style={[s.txt, style, {fontSize: fontSize * 0.00118* height}]}>{children}</Text>
    )
}