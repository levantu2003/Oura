import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Page</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
