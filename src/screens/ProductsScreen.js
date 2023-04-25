import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
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
      {/*----------Footer----------*/}
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
        {/*----------Header----------*/}
        <View style={styles.headerContainer}>
          <View style={styles.shopAndType}>
            <Text style={styles.pageTitle}>Shop</Text>
            <View style={styles.productSelector}>
              <Pressable style={styles.selected}>
                <Text style={styles.productTypeText}>Men</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.productTypeText}>Women</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.productTypeText}>Kids</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.productTypeText}>Jordan</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Cart")}
            style={{
              flexDirection: "row",
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <FontAwesome5 name="shopping-cart" size={18} color="gray" />
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>
              {numberOfItems}
            </Text>
          </Pressable>
        </View>

        {/*----------Weekly Highlights----------*/}
        <ScrollView>
          <View style={styles.weekHighlightContainer}>
            <Text style={styles.weekHighlightH1}>This Week's Highlights</Text>
            <ScrollView style={styles.weeklyImageContainer} horizontal={true}>
                <Image
                  style={styles.weeklyImage}
                  source={{
                    uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682372054/Apps/NikeClone/IMG_8317_1_akh8kz.jpg",
                  }}
                />
                <Image
                  style={styles.weeklyImage}
                  source={{
                    uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682372053/Apps/NikeClone/IMG_8319_1_k1fpkd.jpg",
                  }}
                />

                <Image
                  style={styles.weeklyImage}
                  source={{
                    uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682372054/Apps/NikeClone/IMG_8318_1_v9zgmv.jpg",
                  }}
                />
            </ScrollView>
          </View>

          {/*----------Products----------*/}
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
        </ScrollView>
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
  shopAndType: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  productSelector: {
    width: "80%",
    paddingLeft: 10,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productTypeText: {
    fontSize: 16,
  },
  selected: {
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  weekHighlightContainer: {
    width: "100%",
    paddingLeft: 20,
    paddingTop: 25,
  },
  weekHighlightH1: {
    fontSize: 18,
    fontWeight: "500",
  },
  weeklyImageContainer: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  weeklyImage: {
    width: 150,
    height: 150,
    marginRight: 10,
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
