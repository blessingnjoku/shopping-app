import Button from "@/components/app-button/Btn";
import { useLiked } from "@/components/context/LikedContext";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { product } from "../../data/product";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  //   find and display product details
  const products = product.find((item) => item.id === id);
  const { favorites, toggleFavorite } = useLiked();

  const isLiked = favorites.includes(products.id);
  const [mainImage, setMainImage] = useState(products?.image);

  const variants = products?.variants || [products?.image];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContent}>
        <TouchableOpacity
          onPress={() => router.push("/home")}
          style={{ marginRight: 20 }}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: "gray" }}>Choose Your Color</Text>

        <TouchableOpacity onPress={() => toggleFavorite(products.id)}>
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={30}
            color={isLiked ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainImageBox}>
        <Image source={mainImage} style={styles.mainImage} />
      </View>

      {/* Thumbnails */}
      <FlatList
        horizontal
        data={variants}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.thumbnailList}
        renderItem={({ item, index }) => {
          const dynamicStyle = {
            transform: [
              { rotate: `${index * 8}deg` },
              { translateY: index * 45 },
            ],
          };

          return (
            <TouchableOpacity onPress={() => setMainImage(item)}>
              <ImageBackground
                source={item}
                style={[styles.thumbnail, dynamicStyle]}
              />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />

      {/* Bottom Details */}
      <View style={styles.bottomSection}>
        <View style={styles.topText}>
          <View>
            <Text style={styles.title}>{products.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.title}>${products.price.toFixed(2)}</Text>
              <Text
                style={{ textDecorationLine: "line-through", fontSize: 24 }}
              >
                {products.discountPrice}
              </Text>
            </View>
          </View>
          <View style={styles.codeBtn}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {products.productCode}
            </Text>
          </View>
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.detailTitle}>Height</Text>
            <Text style={styles.detailSize}>{products.height}</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>Width</Text>
            <Text style={styles.detailSize}>{products.width}</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>Material</Text>
            <Text
              style={styles.detailSize}
            >
             
              {products.material}
            </Text>
          </View>
        </View>

        <Button title="Add to cart" onpress={() => alert("hello")} />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 340,
    backgroundColor: "#fff",
    padding: 27,
    
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 45,
    fontWeight: "800",
    color: "#0d2300",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  thumbnailList: {
    paddingVertical: 20,
    paddingHorizontal: 6,
  },
  thumbnail: {
    width: 120,
    height: 120,
    marginHorizontal: 10,
    borderRadius: 60,
    resizeMode: "contain",
    backgroundColor: "rgb(218, 216, 216)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainImageBox: {
    alignItems: "center",
    marginVertical: 10,
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  mainImage: {
    width: 500,
    height: 250,
    resizeMode: "contain",
  },
  codeBtn: {
    width: 100,
    height: 35,
    borderRadius: 20,
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: "#e8e7e7",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    marginTop: 10,
  },
  detailTitle: {
    fontSize: 20,
    color: "#c1c1c1",
    fontWeight:'bold'
  },
  detailSize: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d2300",
  },
});
