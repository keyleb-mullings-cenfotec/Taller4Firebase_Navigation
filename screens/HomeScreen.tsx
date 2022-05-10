import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
    return(
        <View style={styles.constainer}>
            <Text>
                Home Screen!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})