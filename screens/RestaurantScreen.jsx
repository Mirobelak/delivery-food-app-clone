import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useEffect } from "react";
import { urlFor } from "../sanity";
import Dishrow from "../components/Dishrow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-52 bg-gray-300 p-4"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="absolute top-7 left-5 p-2 bg-white rounded-full"
          >
            <Text className="text-xl">🔙</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center my-1 space-x-2">
              <View className="flex-row items-center space-x-1">
                <Text>⭐️</Text>
                <Text className="text-lg text-gray-500">
                  <Text className="text-black text-lg">{rating}</Text> · {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Text>📍</Text>
                <Text className="text-lg text-gray-500">
                  <Text className="text-black text-lg">Nearby </Text>· {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <Text className="text-md">﹖</Text>
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food alergy ?
            </Text>
            <Text className="text-md">→</Text>
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 font-bold text-xl pt-6 mb-3">Menu</Text>
          {/* Dishrows */}
          {dishes.map((dish) => (
            <Dishrow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              short_description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
