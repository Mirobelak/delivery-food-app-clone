import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, id}) => {
    return (
        <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-xl" >➡️</Text>
        </View>
        <Text className="text-xs px-4 text-gray-500 " >{description}</Text>
        <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false} className="pt-4">
        <RestaurantCard
          id ={123}
          imgUrl={"https://links.papareact.com/gn7"}
            title={"Testing"}
            rating={4.5}
            genre={"Testing"}
            address={"Testing"}
            short_description={"Testing"}
            dishes={["Testing"]}
            long={-122.4233}
            lat={37.78825}
        />
        <RestaurantCard
          id ={123}
          imgUrl={"https://links.papareact.com/gn7"}
            title={"Testing"}
            rating={4.5}
            genre={"Testing"}
            address={"Testing"}
            short_description={"Testing"}
            dishes={["Testing"]}
            long={-122.4233}
            lat={37.78825}
        />
        <RestaurantCard
          id ={123}
          imgUrl={"https://links.papareact.com/gn7"}
            title={"Testing"}
            rating={4.5}
            genre={"Testing"}
            address={"Testing"}
            short_description={"Testing"}
            dishes={["Testing"]}
            long={-122.4233}
            lat={37.78825}
        />
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FeaturedRow;
