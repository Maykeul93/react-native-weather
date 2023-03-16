import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weather_label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 20,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature: {
    fontSize: 150,
  },
  img: {
    width: 80,
    height: 80,
  },
});
