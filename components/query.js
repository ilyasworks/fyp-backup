import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, email, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SucessAlertAdd = () => {
    Alert.alert(
      'successfull',
      'your request has been sent!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed'),
        },
      ],
      { cancelable: false }
    );
  };

export default function Query() {
    return (
        <View style={styles.queryContiner}>
            <Text style={styles.NoteText}>Please let us know if you have any Queries </Text>
            <View>
                <Text>Name*</Text>
                <TextInput
                    name="email"
                    style={styles.input}
                    placeholder="john"
                // value={email}
                // onChangeText={(txt) => getEmail(txt)}
                />
            </View>
            <View>
                <Text>registratrion Number*</Text>
                <TextInput
                    name="email"
                    style={styles.input}
                    placeholder="2019-uobs-203"
                // value={email}
                // onChangeText={(txt) => getEmail(txt)}
                />
            </View>
            <View>
                <Text>Email*</Text>
                <TextInput
                    name="email"
                    style={styles.inputEmail}
                    placeholder="ilyasdev@gmail.com"
                // value={email}
                // onChangeText={(txt) => getEmail(txt)}
                />
            </View>
            <View>
                <Text>Message*</Text>
                <TextInput
                    name="email"
                    style={styles.inputMsg}
                    placeholder="your Query"
                // value={email}
                // onChangeText={(txt) => getEmail(txt)}
                />
                <TouchableOpacity style={styles.button} onPress={SucessAlertAdd}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    inputEmail: {
        width: 300,
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    inputMsg: {
        width: 300,
        height: 150,
        // padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    queryContiner: {
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        // paddingLeft: 20 
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    NoteText: {
        paddingBottom: 10,
        fontSize: 16,
        paddingTop: 10
      },
})


