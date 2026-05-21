import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoginPage, RegisterPage, DashboardPage } from "./screens";
import { AuthStackParamList } from "./Routes";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: "#fff"
                        }
                    }}
                >
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="Register" component={RegisterPage} />
                    <Stack.Screen name="Dashboard" component={DashboardPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
