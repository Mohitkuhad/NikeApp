import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const JoinUs = ({ navigation }) => {
  const handleClick = () => {
    navigation.goBack();
    navigation.navigate("Shop");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.nikeLogo}
        source={{
          uri: "https://res.cloudinary.com/dlqpxszzo/image/upload/v1682361342/Apps/NikeClone/nikeBlack_lmm0n5.png",
        }}
      />
      <Text style={styles.h1}>Enter your email to join us or sign in.</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#000"}
        style={styles.input}
      />
      <Text style={styles.termsText}>
        This is not a real Nike's app, this is just a personal project. You can
        leave the email empty.
      </Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => {
            handleClick();
          }}
        >
          <Text style={styles.joinButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinUs;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  nikeLogo: {
    width: 50,
    height: 18,
  },
  h1: {
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 50,
    padding: 15,
  },
  termsText: {
    fontSize: 15,
    color: "gray",
    width: "80%",
  },
  ButtonContainer: {
    width: "95%",
    alignItems: "flex-end",
    marginTop: 40,
  },
  joinButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000000",
    borderRadius: 50,
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
