import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import Ionicicons from "@expo/vector-icons/Ionicons";
import moment from "moment";

const Home = ({ navigation }) => {
    const day = moment().format('dddd')
    const date = moment().format("DD")
    const month = moment().format("MMMM")
  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 50}}>
        <View style={styles.heroContainer}>
          <Text style={styles.heroH1}>Discover</Text>
          <Text style={styles.heroH2}>{day}, {date} {month}</Text>
        </View>
        <TouchableHighlight onPress={() => navigation.navigate("Shop")} style={{marginBottom: 10}}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682372054/Apps/NikeClone/IMG_8317_1_akh8kz.jpg",
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("Shop")} style={{marginBottom: 10}}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682372054/Apps/NikeClone/IMG_8318_1_v9zgmv.jpg",
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("Shop")} style={{marginBottom: 10}}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682372053/Apps/NikeClone/IMG_8319_1_k1fpkd.jpg",
            }}
          />
        </TouchableHighlight>
      </ScrollView>
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  heroContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heroH1: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 10,
  },
  heroH2: {
    fontSize: 16,
    color: "#a9a9a9",
  },
  image: {
    width: "100%",
    height: 500,
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
