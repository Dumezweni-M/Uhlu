import { Pressable, Text, View } from "react-native";
import { useState } from "react";

const RadioButton = ({ isChecked, onToggle }) => {
    return (
        <Pressable onPress={onToggle}>
            <View
                className={` border p-1.5 rounded-full ${
                isChecked ? 'bg-orange-200 border-black' : 'bg-white border-black'
                }`}
            />

        </Pressable>
    )
}

export default RadioButton;