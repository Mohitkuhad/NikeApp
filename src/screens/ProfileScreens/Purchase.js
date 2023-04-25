import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicicons from "@expo/vector-icons/Ionicons";

const Purchases = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Nothing to see here - yet</Text>
        <Text style={styles.h2}>
          We'll store your purchases here as soon as you make them.
        </Text>
      </View>
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
    </View>
  );
};

export default Purchases;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "80%",
    padding: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    fontWeight: "300",
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
