import BottomBar from "@/components/BottomBar";
import ProductCard from "@/components/cards/ProductCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { product } from "../../data/product";

const HomeScreen = () => {
  const [search, setSearch] = useState("");

  const [favorites, setFavorites] = useState<string[]>([]);

  // search
  const filteredData = product.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextBox}>
          <Text style={{ fontSize: 95, fontWeight: "800", color: "#022d0a" }}>
            16
          </Text>
          <Text style={styles.headerText}>New Arrivals</Text>
        </View>
        <View style={styles.iconBox}>
          <AntDesign name="filter" size={24} color="black" />
        </View>
      </View>
      <View style={styles.searchBox}>
        <EvilIcons name="search" size={40} color="gray" />
        <TextInput
          placeholder="Search your product.."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        style={styles.Cardcontainer}
        data={filteredData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        )}
      />
      <BottomBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,

  },
  headerTextBox: {
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "800",
    lineHeight: 40,
    marginLeft: 10,
    color: "#022d0a",
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#fff",
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
  searchBox: {
    width: "90%",
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginBottom:20

  },
  Cardcontainer:{
  
    paddingHorizontal:20,
    paddingTop:8
  }
});
