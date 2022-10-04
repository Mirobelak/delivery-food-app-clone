import React from 'react';
import {View,SafeAreaView, Text, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50 ">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <Text>❌</Text>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md shadow-md p-3 z-50">
                    <View className="flex-row justify-between">
                    <View>
                        <Text className="text-lg text-gray-400">Estimated arrival</Text>
                        <Text className="text-4xl font-bold">40-50 minutes</Text>
                    </View>
                    <Image source={{uri: "https://links.papareact.com/fls"}} className="h-20 w-20" />
                    </View>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
                >
                    <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier={restaurant.id}
                    pinColor="red"

                    />
            </MapView>
        </View>
    );
}

export default DeliveryScreen;
