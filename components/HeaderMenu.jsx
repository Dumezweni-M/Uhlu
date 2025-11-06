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
            style={{ marginRight: 12 }}
            onPress={() => setVisible(true)}
          />
        }
      >
        <Menu.Item title="Refresh" leadingIcon="refresh" onPress={() => navigation.navigate("Home")} />
        <Divider />
        <Menu.Item title="Settings" leadingIcon="cog" onPress={() => navigation.navigate("About")} />
        <Divider />
        <Menu.Item title="About" leadingIcon="information" onPress={() => navigation.navigate("About")} />
      </Menu>
    </View>
  );
};

export default HeaderMenu;
