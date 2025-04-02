import { Button, Dimensions, Image, NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'

export default function Page() {
    const router = useRouter()

    return (
        <>
            <StatusBar barStyle={'dark-content'} />

            <SafeAreaView style={styles.container}>
                
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.background,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})