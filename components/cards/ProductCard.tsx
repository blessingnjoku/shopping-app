import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface ProductProp {
  item: any;
  isFavorite: boolean;
  onToggleFavorite:()=>void
}

const ProductCard = ({ item, isFavorite, onToggleFavorite }: ProductProp) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/home/${item.id}`)}
      
    >
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
      <View style={styles.textBox}>
        <Text style={styles.disPrice}>{item.discountPrice}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
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