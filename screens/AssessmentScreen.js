import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AssessmentScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="rounded-full bg-gray-100 absolute top-3 right-5 "
      >
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AssessmentScreen;
