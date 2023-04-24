import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.LoginContainer}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682352369/Apps/NikeClone/image_hmvbcf.png",
        }}
        style={styles.loginBgImage}
      />
      <View style={styles.content}>
        <Image
          style={styles.gradient}
          source={{
            uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682192080/Apps/NikeClone/untitled_wvtnje.png",
          }}
        />
        <View style={styles.bottomContent}>
          <Image
            style={styles.nikeLogo}
            source={{
              uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682188795/Apps/NikeClone/nikeLogo_oyyvh6.png",
            }}
          />
          <Text style={styles.welcomeText}>Nike App</Text>
          <Text style={styles.welcomeText}>
            Bringing Nike Members the best proucts, inspiration and stories in
            sport.
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.joinButton}
              onPress={() => navigation.navigate("accounts.nikeClone.com")}
            >
              <Text style={styles.joinButtonText}>Join Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signButton}
              onPress={() => navigation.navigate("accounts.nikeClone.com")}
            >
              <Text style={styles.signButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  loginBgImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  bottomContent: {
    padding: 20,
    marginBottom: 20,
    gap: 20,
  },
  nikeLogo: {
    width: 100,
    height: 35,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  joinButton: {
    backgroundColor: "#fff",
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
  },
  joinButtonText: {
    color: "#000",
  },
  signButton: {
    backgroundColor: "#000",
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
  },
  signButtonText: {
    color: "#fff",
  },
});
