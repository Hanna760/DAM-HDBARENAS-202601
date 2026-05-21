import React from "react";
import { Alert, View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Button } from "../../atoms";


interface LoginFormProps {
    onSubmit?: () => void;  
    onRegisterPress?: () => void;
}

const LoginForm = (
    { onSubmit, onRegisterPress }: LoginFormProps
) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                placeholder="johndoe"
                placeholderTextColor="#ef7f00"
                selectionColor="#067680"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#ef7f00"
                selectionColor="#067680"
                secureTextEntry
            />
            <View style={styles.actions}>
                <Button title="LOGIN" onSubmit={onSubmit} />
            </View>
            <Pressable onPress={() => Alert.alert("Recuperar contraseña", "Funcionalidad pendiente de configurar.") }>
                <Text style={styles.link}>FORGOT PASSWORD?</Text>
            </Pressable>
            <Pressable onPress={onRegisterPress}>
                <Text style={styles.link}>DON'T HAVE AN ACCOUNT? SIGN UP</Text>
            </Pressable>
        </View>
    )
}
export default LoginForm;

const styles = StyleSheet.create({
    container: { marginTop: 6 },
    label: { marginBottom: 6, color: '#067680', fontWeight: '600' },
    input: { borderWidth: 1, borderColor: '#ef7f00', padding: 10, borderRadius: 6, marginBottom: 12, backgroundColor: '#fff', color: '#067680' },
    actions: { marginTop: 6, marginBottom: 10 },
    link: { color: '#ef7f00', marginTop: 8, fontWeight: '600', textAlign: 'center', fontSize: 12 }
});