import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicicons from "@expo/vector-icons/Ionicons";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
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
      <ScrollView style={styles.container}>
        <View style={styles.hero}>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Ionicicons
              name="person-circle-outline"
              size={90}
              style={styles.icon}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
          </View>
          <Pressable style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>EDIT PROFILE</Text>
          </Pressable>
          <View style={styles.heroButtonsContainer}>
            <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate("Purchases")}>
              <Ionicicons name="cube" size={25} />
              <Text>Orders</Text>
            </TouchableOpacity>

            <View style={styles.border} />

            <TouchableOpacity style={styles.heroButton}>
              <Ionicicons name="card" size={25} />
              <Text>Pass</Text>
            </TouchableOpacity>

            <View style={styles.border} />

            <TouchableOpacity style={styles.heroButton}>
              <Ionicicons name="calendar" size={25} />
              <Text>Events</Text>
            </TouchableOpacity>

            <View style={styles.border} />

            <TouchableOpacity style={styles.heroButton}>
              <Ionicicons name="cog" size={25} />
              <Text>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.others}>
          <TouchableOpacity>
            <View style={styles.otherButtons}>
              <View>
                <Text style={styles.h1}>INBOX</Text>
                <Text style={styles.h2}>View Messages</Text>
              </View>
              <Ionicicons name="chevron-forward" size={20} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.otherButtons}>
              <View>
                <Text style={styles.h1}>Your NIKE MEMBER REWARDS</Text>
                <Text style={styles.h2}>2 available</Text>
              </View>
              <Ionicicons name="chevron-forward" size={20} />
            </View>
          </TouchableOpacity>
          <View style={styles.memberSinceContainer}>
            <Text style={styles.memberSinceText}>Member Since March 2023</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightgrey",
  },
  hero: {
    height: 400,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingTop: 30,
    paddingBottom: 10,
    marginBottom: 10,
    gap: 30,
  },
  icon: {
    opacity: 0.3,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "40%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  heroButtonsContainer: {
    width: "100%",
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  heroButton: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    opacity: 0.5,
  },
  border: {
    height: "70%",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  others: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
  },
  otherButtons: {
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  h1: {
    fontSize: 15,
    fontWeight: "700",
  },
  h2: {
    fontSize: 13,
    fontWeight: "200",
  },
  memberSinceContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  memberSinceText: {
    fontSize: 15,
    fontWeight: "200",
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
