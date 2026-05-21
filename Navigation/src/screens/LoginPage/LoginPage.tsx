import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { AuthStackParamList } from "../../Routes";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const LoginPage = ({ navigation }: Props) => {

    const handleLogin = () => {
        console.log("Tap en iniciar sesión");
        navigation.navigate("Dashboard");
    };

    return (
        <AuthTemplate 
            title="LOGIN">
            <LoginForm
                onSubmit={handleLogin}
                onRegisterPress={() => navigation.navigate("Register")}
            />
        </AuthTemplate>
    )

}

export default LoginPage;