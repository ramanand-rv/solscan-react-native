import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import SearchCard from "../../components/SearchCard";
import Title from "../../components/Title";
import SolBalanceCard from "../../components/SolBalanceCard";

export default function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [tokens, setTokens] = useState<any[]>([]);
  const [txns, setTxns] = useState<any[]>([]);

  const inset = useSafeAreaInsets();

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={[styles.scroll, { top: inset.top }]}>
        {/* Title component */}
        <View style={styles.titleComponent}>
          <Title title="Solscan" subtitle="Explore any Solana wallet" />
        </View>

        {/* Search component */}
        <View style={styles.searchComponent}>
          <SearchCard
            value={address}
            onSearchChange={setAddress}
          />
        </View>

        {/* Sol balance card */}
        <View style={styles.balanceCard}>
          <SolBalanceCard
            address="xyzasdasmnaasmncddaklsjd"
            balance={1234.567856789}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },

  scroll: {
    marginHorizontal: 5,
  },

  titleComponent: {},

  searchComponent: {},

  balanceCard: {
    marginTop: 20,
  },
});
