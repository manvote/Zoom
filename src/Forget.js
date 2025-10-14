import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Forget() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.head}>Verification</Text>
            <Text style={styles.subtext}>Please enter the verification code send to your{"\n"}<Text>email: { }</Text></Text>
            <View style={styles.box}>
                <TextInput style={styles.input} maxLength={1}/>
                <TextInput style={styles.input} maxLength={1}/>
                <TextInput style={styles.input} maxLength={1}/>
                <TextInput style={styles.input} maxLength={1}/>
            </View>
            <View style={styles.signUpContainer}>
                <Text style={styles.dont}>Didn't get the code? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                    <Text style={styles.signUpText}>Resend code</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 200,
        paddingHorizontal: 20
    },
    head: {
        fontSize: 26,
        paddingBottom: 35,
        fontWeight: 'bold'
    },
    subtext: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 26,
        fontWeight: 500
    },
    box: {
        flexDirection: 'row'
    },
    input: {
        borderColor: '#444444ff',
        borderWidth: 1,
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signUpText: {
        color: '#4798d8',
        fontWeight: 'bold',
        fontSize: 12
    },
    dont: {
        fontWeight: '600',
        fontSize: 12
    },
    signInButton: {
        backgroundColor: '#4BA4D0',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 160
    },
    signInText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
})