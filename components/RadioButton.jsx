import { Pressable, Text, View } from "react-native";
import { useState } from "react";

const RadioButton = ({ isChecked, onToggle }) => {
    return (
        <Pressable onPress={onToggle}>
            <View
                className={`w-4 h-4 border rounded-lg ${
                isChecked ? 'bg-orange-400 border-black' : 'bg-green-300 border-gray-500'
                }`}
            />

        </Pressable>
    )
}

export default RadioButton;