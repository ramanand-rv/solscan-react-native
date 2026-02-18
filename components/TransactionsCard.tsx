import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { shortAddress } from "../utils/HelperFunctions";

interface TransactionsProps {
  transactions: any;
}

const TransactionCard = ({ transactions }: TransactionsProps) => {
  // Sort tokens by amount (highest first) and take top 3
  //   const topTokens = [...transactions].sort((a, b) => b.amount - a.amount).slice(0, 3);
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.tokensHeader}>
        Recent Transactions ({transactions.length})
      </Text>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.flatList}
          data={transactions}
          // keyExtractor={(t) => t.mint}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={[[styles.listRow]]}>
              <Text style={styles.mintText}>{shortAddress(item.sig, 6)}</Text>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceFigure}>{item.amount}</Text>
                <Ionicons
                  style={styles.chevronForwardIcon}
                  name="chevron-forward"
                  size={16}
                  color="#6B7280"
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  safe: {
    // flex: 1,
    borderRadius: 12,
    padding: 5,
  },

  listContainer: {
    overflow: "hidden",
  },

  tokensHeader: {
    marginTop: -30,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  flatList: {
    flex: 1,
    marginTop: 10,
  },

  listRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#2A2A35",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "#3E3E2A",
    borderRadius: 12,
    marginVertical: 2,
  },

  mintText: {
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 12,
  },

  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  balanceFigure: {
    color: "#14F195",
    fontWeight: "500",
  },

  chevronForwardIcon: {
    fontSize: 22,
    marginRight: -8,
  },
});
