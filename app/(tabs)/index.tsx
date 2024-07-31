import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

interface ExpenseType {
  id: string;
  name: string;
  amount: string;
  percentage: string;
}

const Page = () => {
  const [selectedExpense, setSelectedExpense] = useState<ExpenseType | null>(
    null
  );

  const pieData = (ExpensList as ExpenseType[]).map((expense) => ({
    value: parseFloat(expense.percentage),
    color:
      expense.name === "Thức ăn"
        ? Colors.blue
        : expense.name === "Tiết kiệm"
        ? Colors.white
        : expense.name === "Lặt vặt"
        ? Colors.pink
        : Colors.tintColor,
    text: `${expense.percentage}%`,
    focused: expense.name === selectedExpense?.name,
  }));

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
                focusOnPress
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
                        {selectedExpense
                          ? `${selectedExpense.percentage}%`
                          : "61%"}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock
            expensList={ExpensList as ExpenseType[]}
            onSelectExpense={(expense: ExpenseType) =>
              setSelectedExpense(expense)
            }
          />
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
