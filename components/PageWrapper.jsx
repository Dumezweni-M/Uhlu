import { View } from "react-native";
import Navi from "../components/Navi";
import Footer from "../components/Footer"
import Header from "../components/Header"

const PageWrapper = ({children}) => {
    return (
        <View className="flex-1 w-full h-full pt-8 pb-12">
            <View className="flex-1">
                <Header/>
                { children }
            </View>
        </View>
    )   
}
export default PageWrapper;