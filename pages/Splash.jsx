import { SafeAreaView } from "react-native-safe-area-context";
import PageWrapper from "../components/PageWrapper";
import { ImageBackground, View, Text } from "react-native";
import { useEffect } from "react";


const SplashSrcn = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Home");
        }, 1500);
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <View className="flex-1 px-12 py-24 items-center justify-center">
                <ImageBackground
                    source={require("../assets/Uhlu-LogNam.png")}
                    style={{ flex: 1, width: "100%", height: "100%" }}
                    resizeMode="contain"
                ></ImageBackground>
                <Text className="text-black/50 text-lg"> Uhlu  •  v1.2.1  •  © 2025  eZweni Aether</Text>
            </View>
        </>
    )
}

export default SplashSrcn;