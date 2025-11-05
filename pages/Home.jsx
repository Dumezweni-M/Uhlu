// app-pages/Home.jsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PageWrapper from "../components/PageWrapper";
import AddItem from "../components/AddItem";
import List from "../components/ListFetch";


const Home = ({ navigation }) => {

    return (
        <PageWrapper>
                <AddItem/>
                <List/>
        </PageWrapper>
    )
}

export default Home;