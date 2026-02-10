import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <TextInput
            style={styles.addressInput}
            placeholder="Solana wallet address..."
            placeholderTextColor="#555"
            value={address}
            onChangeText={setAddress}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View></View>
        <View></View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32363a",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    // flex: 1,

    margin: 10,
    maxWidth: "90%",
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#52565a",
  },

  addressInput: {
    
  }
});
