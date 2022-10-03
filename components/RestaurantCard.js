import React from 'react';
import {View,Text, TouchableOpacity, Image} from 'react-native';

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,

}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow" >
            <Image source={{ uri: imgUrl}} className="w-64 h-36 rounded-sm"/>
            <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <Text className="text-xl">⭐️</Text>
                <Text className="text-xs">{rating} · {genre}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Text className="text-xl" opacity={0.4}>📍</Text>
                <Text className="text-xs">Nearby · {address}</Text>
            </View>
            </View>
           
        </TouchableOpacity>
    );
}

export default RestaurantCard;
