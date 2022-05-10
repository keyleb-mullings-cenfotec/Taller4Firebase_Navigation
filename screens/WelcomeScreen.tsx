import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomeScreen() {
    return(
        <View style={styles.constainer}>
            <Text>
                Welcome Screen!
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