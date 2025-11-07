import React, { useState } from "react";
import { Menu, Divider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderMenu = ( ) => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

  return (
    <View>
      <Menu 
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Ionicons
            name="ellipsis-horizontal"
            size={20}
            color="black"
            style={{ marginRight: 12 }}
            onPress={() => setVisible(true)}
          />
        }
          contentStyle={{
          backgroundColor: "white",
          borderRadius: 10,             
          paddingVertical: 4,           
          elevation: 4,                 
        }}
      >
        {/* <Divider /> */}
        <Menu.Item 
          title="Home"
          leadingIcon="home" onPress={() => navigation.navigate("Home")} />
        <Menu.Item 
          title="About"
          leadingIcon="information" onPress={() => navigation.navigate("About")} />
      </Menu>
    </View>
  );
};

export default HeaderMenu;
