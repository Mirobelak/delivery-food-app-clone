import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
           <Image 
            source={{uri: "https://links.papareact.com/wru"}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"  />
             <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs" >Deliver NOW</Text>
            <Text className="font-bold text-xl">Current Location ⬇️
            </Text>
            </View>

            <Text className="text-xl" >👤</Text>
        </View>
        {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4" >
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 " >
                <Text className="text-xl">🔎</Text>
                <TextInput placeholder='Find restaurants' keyboardType='default' />
            </View>
            <Text className="text-xl" >⚙️</Text>
            </View>

            {/* Body */}

            <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100}} >


                <Categories/>
                <FeaturedRow
                id="1"
                title="Featured"
                description="Paid Placements from our partners"
                featuredCategory="featured"
                />
                <FeaturedRow
                id="2"
                title="Tasty discounts"
                description="Everybody love discounts"
                featuredCategory="discounts"
                />
                <FeaturedRow
                id="3"
                title="Offers near you"
                description="Support your local restaurants"
                featuredCategory="offers"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
