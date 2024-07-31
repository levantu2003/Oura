import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 70 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ gap: 10 }}>
            <Text style={{ color: Colors.white, fontSize: 16 }}>
              <Text style={{ fontWeight: 700 }}>Chi tiêu</Text> của tôi
            </Text>
            <Text
              style={{ color: Colors.white, fontSize: 22, fontWeight: 700 }}
            >
              24.758.000 VND
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
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
