import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";

import images from "@/constants/images";
import icons from "@/constants/icons";
import { foodProps } from "@/globalTypes";

const Food = ({ img, title, favorite, power, minute }: foodProps) => {
  return (
    <View>
      <View className="relative w-[170px]">
        <TouchableOpacity className="absolute top-1 right-2 z-10 w-8 h-8 rounded-full bg-white justify-center items-center">
          <Image
            source={favorite ? icons.loveSolid : icons.loveOutline}
            className="w-4 h-4"
          />
        </TouchableOpacity>

        <View className="items-center">
          <Image
            source={img}
            className="h-[120px] w-[170px] rounded-[15px]"
            resizeMode="cover"
          />
        </View>
      </View>

      <Text className="font-psemibold ml-3 mt-2">{title}</Text>

      <View className="flex-row gap-2">
        <View className="flex-row justify-center items-center">
          <Image
            source={icons.power}
            className="w-7 h-7"
            resizeMode="contain"
          />
          <Text>{power} Cal</Text>
        </View>
        <View className="flex-row justify-center items-center space-x-2">
          <Image source={icons.time} className="w-5 h-5" resizeMode="contain" />
          <Text>{minute} min</Text>
        </View>
      </View>
    </View>
  );
};

export default Food;
