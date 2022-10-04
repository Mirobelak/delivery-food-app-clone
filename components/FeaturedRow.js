import React, {useEffect,useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({title, description, id}) => {
  const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      sanityClient.fetch(`*[_type == "featured" && _id == $id]{
        ..., 
        restaurants[]->{
          ...,
          dishes[]->,
         type->{
          name
          }
        }, 
      }[0]`, {id}).then((data) => {
        setRestaurants(data.restaurants);
      });
      
    }, []);

    return (
        <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-xl" >➡️</Text>
        </View>
        <Text className="text-xs px-4 text-gray-500 " >{description}</Text>
        <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false} className="pt-4">

        {restaurants?.map((restaurant,idx) => (
              <RestaurantCard
              key={idx}
              id ={restaurant._id}
              imgUrl={restaurant.image}
              address={restaurant.address}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long} 
              lat={restaurant.lat}
            />
        ))}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FeaturedRow;
