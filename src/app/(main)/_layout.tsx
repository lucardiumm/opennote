import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'

function CustomDrawer({ descriptors, navigation, state }: {
    descriptors: any;
    navigation: any;
    state: any;
}) {
    return (
        <View />
    )
}

export default function Layout() {
    return (
        <Drawer screenOptions={{
            drawerActiveBackgroundColor: colors.drawerBack,
            drawerActiveTintColor: colors.drawerText,
            drawerItemStyle: {
                borderRadius: 12,
            },
        }} drawerContent={({ descriptors, navigation, state }) => <CustomDrawer descriptors={descriptors} navigation={navigation} state={state} />}>
            <Drawer.Screen name={'index'} options={{
                headerShown: false,
                drawerLabel: 'JOURNALS',
                drawerLabelStyle: {
                    fontFamily: 'InstaSans',
                },
            }} />
            <Drawer.Screen name={'spaces'} options={{
                headerShown: false,
                drawerLabel: 'SPACES',
                drawerLabelStyle: {
                    fontFamily: 'InstaSans',
                },
            }} />
            <Drawer.Screen name={'premium'} options={{
                headerShown: false,
            }} />
            <Drawer.Screen name={'report'} options={{
                headerShown: false,
            }} />
            <Drawer.Screen name={'settings'} options={{
                headerShown: false,
            }} />
        </Drawer>
    )
}