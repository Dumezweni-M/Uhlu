import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  // Format the date (e.g., "Thursday, November 20, 2025")
  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // ⌚ Format the time to 24-hour (Military Time)
  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: false, 
  });

  return (
    <View className="justify-between items-center pl-12 w-5/6">
      {/* 📅 Date Display View */}
      <View className="pl-3">
        <Text className="text-lg text-gray-500 font-semibold">{formattedDate}</Text>
      </View>
      {/* ⌚ Time Display View */}
      <View className="pl-3">
        <Text className="text-lg text-gray-500 font-extrabold">{formattedTime}</Text>
      </View>
      

      
    </View>
  );
};

export default DateTimeDisplay;