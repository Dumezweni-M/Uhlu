// app-pages/Home.jsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import PageWrapper from "../components/PageWrapper";
import AddItem from "../components/AddItem";


const Home = ({ navigation }) => {

    

    return (
        <PageWrapper>
            <View>
                <AddItem/>
            </View>
        </PageWrapper>
    )
}

export default Home;