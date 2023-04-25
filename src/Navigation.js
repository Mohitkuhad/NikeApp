import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./screens/ProductsScreen";
import ProductsDetailsScreen from "./screens/ProductsDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import JoinUs from "./screens/JoinUs";
import Favourites from "./screens/Favourites";
import Profile from "./screens/Profile";
import Purchases from "./screens/ProfileScreens/Purchase";

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
          name="Shop"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
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
          name="Favourites"
          component={Favourites}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={ProductsDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Purchases" component={Purchases} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
