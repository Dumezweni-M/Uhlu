import { Pressable, Text, View } from "react-native";
import { useState } from "react";

const RadioButton = ({ isChecked, onToggle }) => {
    return (
        <Pressable onPress={onToggle}>
            <View
                className={` border p-2 rounded-full ${
                isChecked ? 'bg-white border-black/30' : 'bg-black/70 border-black/5'
                }`}
            />
        </Pressable>
    )
}

export default RadioButton;