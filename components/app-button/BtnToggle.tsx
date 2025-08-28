import { Ionicons } from "@expo/vector-icons"; // for sun/moon icons
import React, { useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { useThemeColors } from "../context/ThemeContext";

const BtnToggle = () => {
  const { colors, toggleTheme, isDark } = useThemeColors();
  const [animValue] = useState(new Animated.Value(isDark ? 1 : 0));

  const handleToggle = () => {
    Animated.timing(animValue, {
      toValue: isDark ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => toggleTheme());
  };

  const translateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 32], // moves the circle left <-> right
  });

  return (
    <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
      <View style={[styles.container, { backgroundColor: colors.icon}]}>
        {/* Moon Icon */}
        <Ionicons name="moon" size={20} color={isDark ? "#fff" : "#999"} />

        {/* Slider Circle */}
        <Animated.View
          style={[
            styles.circle,
            { transform: [{ translateX }], backgroundColor: colors.primary },
          ]}
        />

        {/* Sun Icon */}
        <Ionicons name="sunny" size={20} color={!isDark ? "#fff" : "#999"} />
      </View>
    </TouchableOpacity>
  );
};

export default BtnToggle;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    position: "relative",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: "absolute",
    top: 3,
    left: 2,
  },
});
