import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import CartListItem from "../Components/CartListItem";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal } from "../store/cartSlice";
import { SafeAreaView } from "react-native";
import Ionicicons from "@expo/vector-icons/Ionicons";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const totalAmount = subtotal + deliveryFee;

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{totalAmount} US$</Text>
      </View>
    </View>
  );
};

const Footer = () => {};

const ShoppingCart = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = cartItems.length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, width: "90%", marginTop: 30, paddingLeft: 20 }}>Cart</Text>
      {cartLength == 0 ? (
        <>
        <SafeAreaView style={styles.emptyContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.iconContainer}>
              <Ionicicons name="cart-outline" size={30} />
            </View>
            <Text style={styles.contentText}>Your Cart is empty.</Text>
            <Text style={styles.contentText}>
              When you add products, they'll
            </Text>
            <Text style={styles.contentText}>appear here.</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Shop")}
          >
            <Text style={styles.buttonText}>Shop Now</Text>
          </Pressable>
          {/*----------Footer----------*/}
        </SafeAreaView>
          <View style={styles.FooterContainer}>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicicons name="home-outline" size={20} />
              <Text style={styles.Text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate("Shop")}
            >
              <Ionicicons name="search-outline" size={20} />
              <Text style={styles.Text}>Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate("Favourites")}
            >
              <Ionicicons name="heart-outline" size={20} />
              <Text style={styles.Text}>Favourites</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate("Cart")}
            >
              <Ionicicons name="cart-outline" size={20} />
              <Text style={styles.Text}>Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate("Profile")}
            >
              <Ionicicons name="person-outline" size={20} />
              <Text style={styles.Text}>Profile</Text>
            </TouchableOpacity>
          </View>
          </>
      ) : (
        <>

          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            ListFooterComponent={ShoppingCartTotals}
          />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </>
      )}
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  emptyContainer: {
    width: "100%",
    height: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  contentContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    fontSize: 16,
  },
  container: {
    height: "100%",
  },
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    marginVertical: 3,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
  textBold: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "#000",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  FooterContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",

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
  footerButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 12,
  },
});
