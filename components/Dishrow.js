import React,{useState} from 'react';
import {View,Text, TouchableOpacity,Image } from 'react-native';
import { urlFor } from '../sanity';

const Dishrow = ({id,name, short_description, price, image}) => {
        const [isPressed, setIsPressed] = useState(false);
    return (
        <>
        <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className="flex-row ">
                <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{name}</Text>
                 <Text className="text-gray-400" >{short_description}</Text>
                <Text className="text-gray-400 mt-2" >{price} €</Text>
                </View>
            
           
            <View>
                <Image style={{ borderWidth: 1, borderColor: "#F3F3F4" }} className="h-20 w-20 p-4 bg-gray-300" source={{uri: urlFor(image).url()}} />
            </View>
             </View>
        </TouchableOpacity>
        {isPressed && 
           ( <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 p-1">
                    <TouchableOpacity className="bg-green-400 rounded-full items-center p-1">
                        <Text className="text-xl">➖</Text>
                    </TouchableOpacity>
                    <Text className="text-xl">0</Text>
                    <TouchableOpacity className="bg-green-400 rounded-full items-center p-1">
                        <Text className="text-xl">➕</Text>
                    </TouchableOpacity>
                </View>
            </View>)}
        </>
    );
}


export default Dishrow;
