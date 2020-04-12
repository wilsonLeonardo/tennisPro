import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AeroText } from '../../../../components/StyledText';

export const DateContainer = ({ value, light }) => (
    <View style={styles.container}>
        <AeroText style={[styles.date, {color: light ? '#bbbbbb' : 'black'}]}>{value}</AeroText>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    date: {
        fontSize: 12,
    },
});