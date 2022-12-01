import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex mt-7 bg-white h-full">
      <View className="w-full p-4 ">
        <Text className="text-2xl text-center font-bold">
          LearnWARECenter APL
        </Text>
      </View>
      <View className="flex-row space-x-2 pl-2 item-center mr-2">
        <View className="rounded-full border-2 border-blue-500 w-12 h-12 ">
          <Text className="text-center text-blue-500 text-lg font-bold p-2">
            FP
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Assessment")}
          className="flex-1 rounded-full items-center space-x-2 bg-blue-400  "
        >
          <Text className="text-center text-white text-lg font-bold p-2">
            Registrera ditt delmoment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
