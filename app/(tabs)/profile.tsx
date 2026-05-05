import CustomHeader from "@/components/CustomHeader";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-5 pt-5">
      <CustomHeader title="Profile" />
      <Text className="text-lg font-bold">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
