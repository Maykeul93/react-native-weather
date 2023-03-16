import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt";

export const style = StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "#00000034",
    },
});

export function StyledView({ children }) {
    return <View style={{ alignItems: "center" }}>{children}</View>;
}
export function StyledValue({ children }) {
    return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
export function StyledLabel({ children }) {
    return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
