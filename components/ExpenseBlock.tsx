import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

const ExpenseBlock = ({ expensList }: { expensList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addItemBtn}>
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name == "Thức ăn"
                ? Colors.blue
                : item.name == "Tiết kiệm"
                ? Colors.white
                : item.name == "Lặt vặt"
                ? Colors.pink
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockTxt1,
            {
              color:
                item.name == "Thức ăn"
                  ? Colors.black
                  : item.name == "Tiết kiệm"
                  ? Colors.black
                  : item.name == "Lặt vặt"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockTxt2,
            {
              color:
                item.name == "Thức ăn"
                  ? Colors.black
                  : item.name == "Tiết kiệm"
                  ? Colors.black
                  : item.name == "Lặt vặt"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.amount} VND
        </Text>
        <View style={styles.expenseBlock3View}>
          <Text
            style={[
              styles.expenseBlockTxt1,
              {
                color:
                  item.name == "Thức ăn"
                    ? Colors.black
                    : item.name == "Tiết kiệm"
                    ? Colors.black
                    : item.name == "Lặt vặt"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };
  const staticItem = [{ name: "Thêm mục" }];
  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(expensList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: 120,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
