import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import SearchCard from "../../components/SearchCard";
import Title from "../../components/Title";
import SolBalanceCard from "../../components/SolBalanceCard";

const RPC = "http://api.mainnet-beta.solana.com";

const rpc = async (method: string, params: any[]) => {
  const res = await fetch(RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error.message);
  return json.result;
};

const getBalance = async (addr: string) => {
  const result = await rpc("getBalance", [addr]);
  return result.value / 1_000_000_000;
};

const getTokens = async (addr: string) => {
  const result = await rpc("getTokenAccountsByOwner", [
    addr,
    { programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" },
    { endcoding: "jsonParsed" },
  ]);
  return (result.value || [])
    .map((a: any) => ({
      mint: a.account.data.parsed.info.mint,
      amount: a.account.data.parsed.info.tokenAmount.uiAmount,
    }))
    .filter((t: any) => t.amount > 0);
};

const getTxns = async (addr: string) => {
  const sigs = await rpc("getSignaturesForAdress", [addr, { limit: 10 }]);
  return sigs.map((s: any) => ({
    sig: s.signature,
    time: s.blockTime,
    ok: !s.err,
  }));
};

const short = (s: string, n = 4) => `${s.slice(0, n)}...${s.slice(-n)}`;

const timeAgo = (ts: number) => {
  const s = Math.floor(Date.now() / 1000 - ts);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
};

export default function App() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
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
          <SearchCard value={address} onSearchChange={setAddress} />
        </View>

        {/* Sol balance card */}
        <View>
          <SolBalanceCard address="xyzasdasmnaasmncddaklsjd" balance="123456789" />
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

  searchComponent: {},

  titleComponent: {},
});
