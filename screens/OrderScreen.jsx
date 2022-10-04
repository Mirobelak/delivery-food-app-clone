import React, { useEffect } from "react";
import { SafeAreaView, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/order.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-vw"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-xl text-center my-10 text-white font-bold"
      >
        We are working on you order !
      </Animatable.Text>

      <Progress.Bar color="white" indeterminate={true} />
    </SafeAreaView>
  );
};

export default OrderScreen;
