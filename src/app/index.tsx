import { Button, Dimensions, Image, NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import BackgroundPattern from '@/components/ui/Pattern'
import Black from '$/public/images/black.png'
import * as Haptics from 'expo-haptics'
import { AntDesign } from '@expo/vector-icons'

export default function Page() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const PressGoogle = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        
    }

    const Press = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        
        router.replace('/(main)/')
    }

    return (
        <>
            <StatusBar barStyle={'dark-content'} />

            <SafeAreaView style={styles.container}>
                <Image 
                    source={Black}
                    alt={'Icon'}
                    style={styles.icon}
                />

                <View style={styles.modal}>
                    <View style={styles.text}>
                        <Text style={styles.h1}>Sign In</Text>
                        <Text style={styles.p}>Welcome back to Opennote!</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={PressGoogle} style={styles.googleButton}>
                        <AntDesign name={'google'} size={25} color={colors.black} />
                        <Text style={styles.googleText}>Sign in with Google</Text>
                    </TouchableOpacity>

                    <Text>or</Text>
                    
                    <View style={styles.form}>
                        <TextInput 
                            keyboardType={'email-address'}
                            placeholder={'Email'}
                            inputMode={'email'}
                            value={email}
                            onChangeText={setEmail}
                            style={styles.formEmail}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <TextInput 
                            keyboardType={'default'}
                            placeholder={'Password'}
                            inputMode={'text'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            style={styles.formPassword}
                        />

                        <TouchableOpacity activeOpacity={1} onPress={Press} style={styles.continueButton}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottom}>
                    <Text style={styles.pregunta}>Don't have an account?</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                        router.push('/(auth)/')
                    }}>
                        <Text style={styles.button}>Register</Text>
                    </TouchableOpacity>
                </View>
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
        gap: 15,
    },
    modal: {
        width: '80%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 25,
    },
    icon: {
        marginTop: 30,
        width: 75,
        height: 75,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        gap: 5,
        width: Dimensions.get('window').width,
        marginBottom: 30,
    },
    pregunta: {
        color: colors.inputGray,
    },
    button: {
        color: colors.title,
        fontWeight: 'bold',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: colors.title,
    },
    text: {
        gap: 7,
        marginRight: 'auto',
    },
    h1: {
        fontFamily: 'OpenBlack',
        fontWeight: 'bold',
        fontSize: 25,
    },
    p: {
        fontSize: 15,
        fontFamily: 'OpenLight',
    },
    googleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        backgroundColor: colors.buttonBackground,
        width: '100%',
        height: '10%',
        borderRadius: 8,
    },
    googleText: {
        fontSize: 15,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 25,
    },
    formEmail: {
        fontSize: 15,
        color: colors.inputGray,
        borderRadius: 8,
        borderColor: colors.inputBorder,
        borderWidth: 1,
        width: '100%',
        height: 52,
        padding: 15,
    },
    formPassword: {
        fontSize: 15,
        color: colors.inputGray,
        borderRadius: 8,
        borderColor: colors.inputBorder,
        borderWidth: 1,
        width: '100%',
        height: 52,
        padding: 15,
    },
    continueButton: {
        fontWeight: 'bold',
        backgroundColor: colors.black,
        width: '50%',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 15,
    }
})