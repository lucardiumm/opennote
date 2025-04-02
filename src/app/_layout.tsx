import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

export default function Layout() {
    let [loaded] = useFonts({
        'InstaSans': require('../../public/fonts/Instacart/Sans.ttf'),
        'InstaCon': require('../../public/fonts/Instacart/Contrast.ttf'),
        'OpenBlack': require('../../public/fonts/Open/Black.ttf'),
        'OpenLight': require('../../public/fonts/Open/Light.ttf'),
    })
    
    if (!loaded) {
        return null    
    }

    return (
        <Stack screenOptions={{
            animation: 'none',
        }}>
            <Stack.Screen name={'index'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'(auth)'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'(main)'} options={{
                headerShown: false,
            }} />
        </Stack>
    )
}