import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 3,
        gap: 8,
    },
});

export default Card;
