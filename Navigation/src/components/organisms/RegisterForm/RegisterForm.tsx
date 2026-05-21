import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Button } from '../../atoms';

interface RegisterFormProps {
    onSubmit?: () => void;
    onBackPress?: () => void;

}

const RegisterForm = (
    { onSubmit, onBackPress }: RegisterFormProps
) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre del producto</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre del producto"
                placeholderTextColor="#ef7f00"
                selectionColor="#067680"
            />

            <Text style={styles.label}>SKU / Código</Text>
            <TextInput
                style={styles.input}
                placeholder="SKU001"
                placeholderTextColor="#ef7f00"
                selectionColor="#067680"
            />
            <Text style={styles.label}>Cantidad en stock</Text>
            <TextInput
                style={styles.input}
                placeholder="0"
                placeholderTextColor="#ef7f00"
                selectionColor="#067680"
                keyboardType="numeric"
            />
            <View style={styles.row}>
                <View style={styles.halfColumn}>
                    <Text style={styles.label}>Costo de compra</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="$"
                        placeholderTextColor="#ef7f00"
                        selectionColor="#067680"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.halfColumn}>
                    <Text style={styles.label}>Precio de venta ($)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="$"
                        placeholderTextColor="#ef7f00"
                        selectionColor="#067680"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Describe el producto"
                placeholderTextColor="#ef7f00"
                selectionColor="#067680"
                multiline
            />
            <View style={styles.actions}>
                <Button title="CREAR PRODUCTO" onSubmit={onSubmit} />
            </View>
            <Pressable onPress={onBackPress}>
                <Text style={styles.backLink}>Back to Catalog</Text>
            </Pressable>
        </View>
    );
};
export default RegisterForm;

const styles = StyleSheet.create({
    container: { marginTop: 6 },
    label: { marginBottom: 6, color: '#067680', fontWeight: '600', textTransform: 'uppercase', fontSize: 12 },
    input: { borderWidth: 1, borderColor: '#ef7f00', padding: 10, borderRadius: 6, marginBottom: 12, backgroundColor: '#fff', color: '#067680' },
    actions: { marginTop: 6, marginBottom: 10 },
    row: { flexDirection: 'row', gap: 10 },
    halfColumn: { flex: 1 },
    textArea: { minHeight: 100, textAlignVertical: 'top' },
    backLink: { color: '#ef7f00', marginTop: 4, fontWeight: '600', textAlign: 'center' }
});