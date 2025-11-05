import { View } from "react-native";
import List from "./ListFetch";
import Navi from "../components/Navi";


const PageWrapper = ({children}) => {
    return (
        <View className="flex-1 mb-12 mt-12 border w-[100%]">
            <Navi/>
            { children }
            <List/>
        </View>
    )   
}

export default PageWrapper;