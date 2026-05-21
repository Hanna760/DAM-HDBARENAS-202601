import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { AuthStackParamList } from "../../Routes";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

const RegisterPage = ({ navigation }: Props) => {

    const handleRegister = () => {
        console.log("Tap en crear producto");
        navigation.navigate("Dashboard");
    };

    return (
        <AuthTemplate
            title="REGISTRAR PRODUCTO"
            subtitle="Create a new product listing">
            <RegisterForm
                onSubmit={handleRegister}
                onBackPress={() => navigation.navigate("Dashboard")}
            />
        </AuthTemplate>
    );
};

export default RegisterPage;