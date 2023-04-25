import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicicons from "@expo/vector-icons/Ionicons";

const Favourites = ({ navigation }) => {
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
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Favourites</Text>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Ionicicons name="heart-outline" size={26} color="black" />
          </View>
          <Text>Items added to your Favourites</Text>
          <Text>will be saved here.</Text>
        </View>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => navigation.navigate("Shop")}
          >
            <Text style={styles.shopButtonText}>Shop</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "87%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  heading: {
    fontSize: 25,
    fontWeight: "500",
    margin: 20,
    width: "80%"
  },
  contentContainer: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 20,
  },
  shopButton: {
    width: "90%",
    height: 60,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  shopButtonText: {
    color: "#fff",
    fontSize: 20,
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
