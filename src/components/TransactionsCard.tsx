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
import { shortAddress, timeAgo } from "../utils/HelperFunctions";

interface TransactionsProps {
  transactions: any;
}

const TransactionCard = ({ transactions }: TransactionsProps) => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.tokensHeader}>
        Recent Transactions ({transactions.length})
      </Text>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.flatList}
          data={transactions}
          keyExtractor={(t) => t.sig}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.listRow,
                item.ok
                  ? { backgroundColor: "#2A2A35" }
                  : { backgroundColor: "#fA2A15" },
              ]}
            >
              <Text style={styles.sigText}>{shortAddress(item.sig, 6)}</Text>
              <Text style={styles.timeText}>
                {item.time ? timeAgo(item.time) : "Pending"}
              </Text>

              {item.ok ? (
                <Ionicons
                  style={styles.okStatusIcon}
                  name="checkmark"
                  size={16}
                  color="#55ff55"
                />
              ) : (
                <Ionicons
                  style={styles.okStatusIcon}
                  name="close"
                  size={16}
                  color="#ff5555"
                />
              )}
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
    borderRadius: 12,
    paddingHorizontal: 5,
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
    justifyContent: "space-around",
    borderWidth: 0.5,
    borderColor: "#3E3E2A",
    borderRadius: 12,
    marginVertical: 2,
  },

  sigText: {
    color: "rgba(235, 235, 245, 0.5)",
    fontSize: 12,
    marginLeft: -38
  },

  timeText: {
    color: "#14F195",
    fontSize: 12,
  },

  okStatusIcon: {
    fontSize: 22,
    marginRight: -34,
  },
});
