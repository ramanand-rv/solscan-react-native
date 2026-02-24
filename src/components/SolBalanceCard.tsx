import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { shortAddress } from "../utils/HelperFunctions";

interface SolBalanceProps {
  balance: number | null;
  address: string;
}

export default function SolBalanceCard({ balance, address }: SolBalanceProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.balanceLabel}>SOL BALANCE</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceFigure}>{balance?.toFixed(6)}</Text>
        <Text style={styles.balanceUnit}>SOL</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{shortAddress(address, 6)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#2A2A35",
    padding: 14,
    borderRadius: 12,
  },

  balanceLabel: {
    marginTop: -34,
    color: "rgba(235, 235, 245, 0.6)",
    textAlign: "center",
    fontSize: 12,
  },

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    gap: 10,
  },

  balanceFigure: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  balanceUnit: {
    color: "#14F195",
    fontWeight: "600",
    fontSize: 14,
  },

  addressContainer: {
    marginTop: 10,
    alignItems: "center",
  },

  addressText: {
    backgroundColor: "#353542",
    color: "#7070FF",
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: 12,
  },
});
