import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function swap() {
  const [fromToken, setfromToken] = useState("SOL");
  const [fromAmount, setfromAmount] = useState("0.28679");
  const [toToken, setToToken] = useState("ETH");
  const [toAmount, setToAmount] = useState("0.4782");

  // Calculate font size based on length
  const getFontSize = (isFrom: boolean) => {
    const baseSize = 16;
    // const minSize = 12;
    const length = isFrom ? fromAmount.length : toAmount.length;

    return baseSize - (length * 0.6 - 10);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.title}>Swap Tokens</Text>
      <ScrollView style={styles.scroll}>
        {/* From card */}
        <View style={styles.fromToToken}>
          <View style={styles.tokenQtyContainer}>
            {/* token selection dropdown */}
            <TouchableOpacity style={styles.fromToTokenContainer}>
              <Image
                source={{
                  uri: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
                }}
                style={[styles.fromToTokenIcon]}
              />
              <Text style={styles.fromToTokenName}>{fromToken}</Text>
              <Ionicons name="chevron-down" color="#Ffffff" size={24} />
            </TouchableOpacity>

            {/* Token qty input */}
            <TextInput
              style={[styles.fromToTokenInput, { fontSize: getFontSize(true) }]}
              keyboardType="number-pad"
              value={fromAmount}
              placeholder={"0"}
              placeholderTextColor="#666"
              onChangeText={setfromAmount}
              maxLength={18}
            />
          </View>
          {/* Balance text */}
          <View style={styles.tokenBalanceContainer}>
            <Text style={styles.balanceText}>Balance: 0.80085 {fromToken}</Text>
            <Text style={styles.usdText}>${455.796}</Text>
          </View>
        </View>

        {/* Swap arrow  */}
        <View style={styles.swapArrowContainer}>
          <TouchableOpacity style={styles.swapArrow}>
            <Ionicons name="swap-vertical" color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        {/* To card */}
        <View style={styles.fromToToken}>
          <View style={styles.tokenQtyContainer}>
            {/* token selection dropdown */}
            <TouchableOpacity style={styles.fromToTokenContainer}>
              <Image
                source={{
                  uri: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
                }}
                style={[styles.fromToTokenIcon]}
              />
              <Text style={styles.fromToTokenName}>{toToken}</Text>
              <Ionicons name="chevron-down" color="#Ffffff" size={24} />
            </TouchableOpacity>

            {/* Token qty input */}
            <TextInput
              style={[styles.fromToTokenInput, { fontSize: getFontSize(false) }]}
              keyboardType="number-pad"
              value={toAmount}
              placeholder={"0"}
              placeholderTextColor="#666"
              onChangeText={setToAmount}
              maxLength={18}
            />
          </View>
          {/* Balance text */}
          <View style={styles.tokenBalanceContainer}>
            <Text style={styles.balanceText}>Balance: 0.80085 {toToken}</Text>
            <Text style={styles.usdText}>${455.796}</Text>
          </View>
        </View>

        {/* Swap button */}
        <TouchableOpacity style={styles.swapBtn}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Swap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },

  scroll: {
    flex: 1,
    paddingHorizontal: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  fromToToken: {
    backgroundColor: "#3A2A2A",
    paddingVertical: 40,
    paddingHorizontal: 5,
    borderRadius: 18,
    height: "38%",
  },

  tokenQtyContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -28,
  },

  fromToTokenContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#16161D",
    borderRadius: 50,
    marginLeft: 20,
  },

  fromToTokenIcon: {
    width: 24,
    height: 24,
  },

  fromToTokenName: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  fromToTokenInput: {
    color: "#FFFFFF",
    fontWeight: "600",
    paddingHorizontal: 10,
    textAlign: "right",
    width: "50%",
    marginRight: 10,
    height: "80%",
  },

  tokenBalanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 14,
    marginBottom: -18,
  },

  balanceText: {
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 14,
    marginLeft: 10,
  },

  usdText: {
    color: "#14F195",
    fontSize: 14,
    marginRight: 10,
  },

  swapArrowContainer: {
    alignItems: "center",
    marginVertical: -20,
    zIndex: 1,
  },

  swapArrow: {
    backgroundColor: "#16161D",
    padding: 10,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: "rgba(235, 235, 245, 0.3)",
  },

  swapBtn: {
    backgroundColor: "#14F195",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 5,
  },
});
