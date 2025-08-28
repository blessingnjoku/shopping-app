import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColors } from "../context/ThemeContext";
interface ProductProp {
  item: any;
  isFavorite: boolean;
  onToggleFavorite:()=>void
}

const ProductCard = ({ item, isFavorite, onToggleFavorite }: ProductProp) => {
  const router = useRouter();
    const { colors } = useThemeColors();
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card }]}
      onPress={() => router.push(`/home/${item.id}`)}
    >
      <View style={styles.topBar}>
        <Text style={[styles.text, { color: colors.text }]}>{item.name}</Text>
        <TouchableOpacity style={styles.heart} onPress={onToggleFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={30}
            color={isFavorite ? "red" : colors.icon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textBox}>
        <Text style={[styles.disPrice, { color: colors.text }]}>
          {item.discountPrice}
        </Text>
        <Text style={[styles.price, { color: colors.text }]}>
          ${item.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 18,
    paddingVertical: 35,
    alignItems: "center",
  },
  image: {
    width: 190,
    height: 170,
    borderRadius: 8,
    padding: 10,
    paddingBottom: 30,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    paddingHorizontal: 15,
  },
  heart: {},
  text: {
    fontSize: 18,
    fontWeight: "800",
  },
  disPrice: {
    color: "gray",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
  },
  textBox:{
    textAlign:'left',
    width:'100%',
    paddingHorizontal:20

  }
});