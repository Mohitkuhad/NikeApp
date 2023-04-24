import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import { selectNumberOfItems } from "../store/cartSlice";

import Ionicicons from "@expo/vector-icons/Ionicons";

const ProductsScreen = ({ navigation }) => {
  const numberOfItems = useSelector(selectNumberOfItems);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.FooterContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicicons name="home-outline" size={20} />
          <Text style={styles.Text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Shop")}
        >
          <Ionicicons name="search-outline" size={20} />
          <Text style={styles.Text}>Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Favourites")}
        >
          <Ionicicons name="heart-outline" size={20} />
          <Text style={styles.Text}>Favourites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cart")}
        >
          <Ionicicons name="cart-outline" size={20} />
          <Text style={styles.Text}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicicons name="person-outline" size={20} />
          <Text style={styles.Text}>Profile</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.pageTitle}>Shop</Text>
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{ flexDirection: "row" }}
          >
            <FontAwesome5 name="shopping-cart" size={18} color="gray" />
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>
              {numberOfItems}
            </Text>
          </Pressable>
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                dispatch(productsSlice.actions.setSelectedProduct(item.id));
                navigation.navigate("Details");
              }}
              style={styles.itemContainer}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
              <Text style={styles.itemName}>{item.name}</Text>
            </Pressable>
          )}
          numColumns={2}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 20,
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 10,
    marginVertical: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "center",
  },
  FooterContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 80,
    justifyContent: "space-around",
    alignItems: "flex-start",
    position: "absolute",
    left: 0,
    bottom: 0,
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 5,
    backgroundColor: "#fff",
    zIndex: 9,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 12,
  },
});

export default ProductsScreen;
