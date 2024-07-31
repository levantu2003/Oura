import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from "@/components/ExpenseBlock";
import IncomeBlock from "@/components/IncomeBlock";
import SpendingBlock from "@/components/SpendingBlock";

import ExpensList from "@/data/expenses.json";
import incomeList from "@/data/income.json";
import spendingList from "@/data/spending.json";

const Page = () => {
  const pieData = [
    {
      value: 61,
      color: Colors.tintColor,
      focused: true,
      text: "61%",
    },
    {
      value: 19,
      color: Colors.blue,
      text: "19%",
    },
    {
      value: 13,
      color: Colors.white,
      text: "13%",
    },
    { value: 5, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "5%" },
  ];
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 70 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                <Text style={{ fontWeight: 700 }}>Chi tiêu</Text> của tôi
              </Text>
              <Text
                style={{ color: Colors.white, fontSize: 22, fontWeight: 700 }}
              >
                38.640.000 VND
              </Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: "center" }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        61%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock expensList={ExpensList} />
          <IncomeBlock incomeList={incomeList} />
          <SpendingBlock spendingList={spendingList} />
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
