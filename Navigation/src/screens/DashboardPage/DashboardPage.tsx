import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

type Props = NativeStackScreenProps<AuthStackParamList, "Dashboard">;

const sampleProducts = [
    { id: '1', title: 'Camisa Azul', sku: 'CA001', stock: 25, price: 10.0 },
    { id: '2', title: 'Camisa Roja', sku: 'CR002', stock: 12, price: 12.5 },
    { id: '3', title: 'Pantalón', sku: 'PN003', stock: 8, price: 14.8 },
];

const DashboardPage = ({ navigation }: Props) => {

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.productCard}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text>SKU: {item.sku}</Text>
            <Text>Stock: {item.stock}</Text>
            <Text>Ganancia: ${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.sellButton}>
                <Text style={styles.sellButtonText}>VENDER</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Bienvenido, Jhon Doe</Text>
            <TouchableOpacity
                style={styles.createButton}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.createButtonText}>Nuevo producto</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar productos..."
                placeholderTextColor="#ef7f00"
            />

            <Text style={styles.sectionTitle}>Productos recientes</Text>
            <View style={styles.listWrap}>
                <FlatList
                    data={sampleProducts}
                    keyExtractor={(i) => i.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 32 }}
                />
            </View>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    welcome: { fontSize: 22, fontWeight: '700', marginBottom: 12, color: '#067680' },
    createButton: { backgroundColor: '#067680', padding: 10, borderRadius: 6, width: '100%', marginBottom: 12 },
    createButtonText: { color: '#fff', fontWeight: '600' },
    searchInput: { borderWidth: 1, borderColor: '#ef7f00', borderRadius: 6, padding: 10, marginBottom: 16, color: '#067680', backgroundColor: '#fff', width: '100%' },
    logoutButton: { backgroundColor: '#ef7f00', padding: 10, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 16 },
    logoutButtonText: { color: '#fff', fontWeight: '600' },
    sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8, color: '#ef7f00' },
    listWrap: { flex: 1, width: '100%' },
    productCard: { padding: 10, borderWidth: 1, borderColor: '#ef7f00', borderRadius: 6, marginBottom: 8, position: 'relative' },
    productTitle: { fontWeight: '600', color: '#067680' },
    sellButton: { backgroundColor: '#6f7684', borderRadius: 6, paddingVertical: 6, paddingHorizontal: 10, position: 'absolute', right: 10, top: 10 },
    sellButtonText: { color: '#ffffff', fontWeight: '700', fontSize: 11 },
});

export default DashboardPage;
