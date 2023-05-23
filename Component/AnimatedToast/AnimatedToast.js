import React, { useRef, useState } from 'react';
import { Animated, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const AnimatedToast = () => {
    const [status, setStatus] = useState('success');
    const position = useRef(new Animated.Value(-100)).current
    const successColor = "#6dcf81";
    const successHeader = "Success!";
    const successMessage = "You pressed the success button";
    const failColor = "#bf6060";
    const failHeader = "Failed!";
    const failMessage = "You pressed the fail button";

    const onPress = () => {
        Animated.spring(position, {
            toValue: Dimensions.get('window').height - responsiveHeight(10),
            bounciness: 15,
            useNativeDriver: true
        }).start(() => {
            Animated.spring(position, {
                toValue: -100,
                delay: 3000,
                useNativeDriver: true
            }).start()
        })
    }
    const instantPopOut = () => {
        Animated.spring(position, {
            toValue: -100,
            useNativeDriver: true
        }).start()
    };
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.bounceViiew, {
                transform: [
                    { translateY: position }
                ],
            }]} >
                <View style={styles.toastRow}>
                    <AntDesign
                        name={status === "success" ? "checkcircleo" : "closecircleo"}
                        size={24}
                        color={status === "success" ? successColor : failColor}
                    />
                    <View style={styles.toastText}>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                            {status === "success" ? successHeader : failHeader}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            {status === "success" ? successMessage : failMessage}
                        </Text>
                    </View>
                    <TouchableOpacity style={{}} onPress={instantPopOut}>
                        <Entypo name="cross" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <TouchableOpacity onPress={onPress} style={{
                width: responsiveWidth(50),
                height: responsiveHeight(5),
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 0,
                alignSelf: 'center'
            }} >
                <Text style={{ color: 'blue' }} >{'Show Animated Toast'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    },
    bounceViiew: {
        width: responsiveWidth(80),
        height: responsiveHeight(5),
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        position: 'absolute',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ripple: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    toastRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    toastText: {
        width: "70%",
    },
});

export default AnimatedToast;