import { View } from "react-native";
import List from "./ListFetch";
import Navi from "../components/Navi";
import Footer from "../components/Footer"


const PageWrapper = ({children}) => {
    return (
        <View className="flex-1 pb-12 pt-8 w-[100%]">
            { children }
            <List/>
            <Navi/>
            <Footer/>
        </View>
    )   
}

export default PageWrapper;