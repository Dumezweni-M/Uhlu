import { Divider } from "react-native-paper";
import PageWrapper from "../components/PageWrapper";
import { Pressable, Text, View, ImageBackground } from "react-native";
import Tabs from "../components/Tabs";

const About = ({ navigation }) => {
    return (
        <PageWrapper>
            <View className="flex-1 px-4 justify-center bg-white">
                            <View className="flex-row ml-12 h-[26%] w-2/3 pl-6 items-center justify-center ">
                                <ImageBackground
                                    source={require("../assets/Uhlu-logo.png")}
                                    style={{  width: "100%", height: "80%" }}
                                    resizeMode="contain"
                                ></ImageBackground>
                            </View>
                <Text className="py-2 text-3xl font-bold my-2 px-2 text-blue-500">Uhlu [oo-shl-oo]</Text>
                <Text className="py-2 text-lg font-bold my-2 px-2">From isiZulu, meaning “to name, to list, to record.” A quiet way of keeping order.</Text>
                <Divider/>
                <Divider/>
                <Text className="py-2 text-lg my-2 px-2">
                    This App is purely a passion project.
                    I created it because I wanted something simple to use on a daily basis.
                    I have more features planned and will soon setup communication channels
                    so we can all chip in on how we can improve the app.
                </Text>
                
                <Divider/> 
                <Text className="py-2 text-lg my-2 px-2">
                    Privacy Policy: None of your personal data is collected or shared.
                    All your data is stored locally on your device
                </Text>
                <Divider/> 
                <Divider/> 
                <Text className="py-2 text-lg my-2 px-2">Version: v1.2.1 © 2025 eZweni Aether</Text>
                <Text className="py-2 text-lg font-bold my-2 px-2">Thank you for using Uhlu.</Text>
            </View>
            <Tabs/>
        </PageWrapper>
    )
}

export default About;