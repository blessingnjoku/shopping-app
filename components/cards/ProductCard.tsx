import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface ProductProp {
  item: any;
  isFavorite: boolean;
  onToggleFavorite:()=>void
}

const ProductCard = ({ item, isFavorite, onToggleFavorite }: ProductProp) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.topBar}>
        <Text style={styles.text}>{item.name}</Text>
        <TouchableOpacity style={styles.heart} onPress={onToggleFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={30}
            color={isFavorite ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={item.image} style={styles.image} />
      </View>
 
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
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
  price: {
    fontSize: 18,
    fontWeight: "800",
  },
});