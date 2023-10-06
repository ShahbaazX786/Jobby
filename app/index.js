import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Welcome, Nearbyjobs, Popularjobs, ScreenHeaderBtn } from "../components";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/* <Text>Bismillah</Text> */}
            <Stack.Screen 
            options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />),
                headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />),
                headerTitle:'' }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                <Welcome />
                <Nearbyjobs />
                <Popularjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;