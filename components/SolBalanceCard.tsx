import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface SolBalanceProps {
  balance: any;
  address: string;
}

export default function SolBalanceCard({ balance, address }: SolBalanceProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.balanceLabel}>SOL BALANCE</Text>
      <View>
        <Text style={styles.balanceFigure}>{balance}</Text>
        <Text style={styles.balanceUnit}>SOL</Text>
      </View>
      <View>
        <Text>{address}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {},

  balanceLabel: {},

  balanceFigure: {},

  balanceUnit: {},
});
