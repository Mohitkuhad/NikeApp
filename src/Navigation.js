import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./screens/ProductsScreen";
import ProductsDetailsScreen from "./screens/ProductsDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import LoginScreen from "./screens/LoginScreen";
import JoinUs from "./screens/JoinUs";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Nike"
          options={{ headerShown: false }}
          component={LoginScreen}
        />

        <Stack.Screen
          name="accounts.nikeClone.com"
          component={JoinUs}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate("Nike")}
                style={{ flexDirection: "row" }}
                title="Cancel"
              />
            ),
            presentation: "modal",
          })}
        />

        <Stack.Screen
          name="Shop"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={ProductsDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
