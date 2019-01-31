import { Platform } from "react-native";

export const shadowStyle = Platform.select({
    ios: {
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    android: {
        elevation: 4,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 1
    }
})