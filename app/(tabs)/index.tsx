import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import SearchCard from "../../components/SearchCard";
import Title from "../../components/Title";
import SolBalanceCard from "../../components/SolBalanceCard";
import { getBalance, getTokens, getTxns } from "../../lib/sol";
import TokensCard from "../../components/TokensCard";
import TransactionCard from "../../components/TransactionsCard";

export default function App() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [tokens, setTokens] = useState<any[]>([]);
  const [txns, setTxns] = useState<any[]>([]);

  const inset = useSafeAreaInsets();

  const searchAddress = async () => {
    const walletAddress = address.trim();
    if (!walletAddress) return Alert.alert("Enter a wallet address");
    setLoading(true);

    try {
      const [balanceData, tokensData, transactionsData] = await Promise.all([
        getBalance(walletAddress),
        getTokens(walletAddress),
        getTxns(walletAddress),
      ]);
      setBalance(balanceData);
      setTokens(tokensData);
      setTxns(transactionsData);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

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
            address={address}
            onAddressChange={setAddress}
            onSearch={searchAddress}
            loading={loading}
          />
        </View>

        {/* Sol balance card */}
        <View style={styles.balanceCard}>
          <SolBalanceCard address={address} balance={balance ? balance : 0.0} />
        </View>

        {/* Tokens card */}
        <View style={styles.tokensCard}>
          <TokensCard tokens={tokens} />
        </View>

        {/* Recent transactions */}
        <View style={styles.transactionsCard}>
          <TransactionCard transactions={txns} />
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
    paddingHorizontal: 5,
    marginBottom: 32,
  },

  titleComponent: {},

  searchComponent: {
    marginTop: -10
  },

  balanceCard: {
    marginTop: 20,
  },

  tokensCard: {
    marginTop: 5,
  },

  transactionsCard: {
    marginTop: 5,
  },
});
