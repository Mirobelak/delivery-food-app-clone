import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../features/basketSlice";
import {
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const Dishrow = ({ id, name, short_description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const basketItems = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );
  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }));
  };
  const handleRemoveFromBasket = () => {
    if (basketItems.length <= 0) {
      return;
    }
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row ">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2">{price} €</Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              className="h-20 w-20 p-4 bg-gray-300"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 p-1">
            <TouchableOpacity
              disabled={!basketItems.length}
              onPress={handleRemoveFromBasket}
              className={`bg-[#00CCBB]  ${
                !basketItems.length && "bg-gray-400"
              } rounded-full items-center p-1`}
            >
              <Text className="text-xl">➖</Text>
            </TouchableOpacity>
            <Text className="text-xl">{basketItems.length}</Text>
            <TouchableOpacity
              onPress={handleAddToBasket}
              className="bg-[#00CCBB] rounded-full items-center p-1"
            >
              <Text className="text-xl">➕</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dishrow;
