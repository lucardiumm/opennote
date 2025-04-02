import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

export default function Layout() {
    return (
        <Stack screenOptions={{
            animation: 'none',
        }}>
            <Stack.Screen name={'index'} options={{
                headerShown: true,
                headerTransparent: true,
                headerLeft: ({ label }) => (
                    <View style={styles.header}>
                        <MaterialIcons onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                            router.back()
                        }} name={'arrow-back'} size={24} color={colors.darkText} />
                        <Text style={styles.title}>Register</Text>
                    </View>
                ),
            }} />
        </Stack>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
    },  
    title: {
        fontFamily: 'InstaSans',
        color: colors.darkText,
        fontSize: 20,
    },
})