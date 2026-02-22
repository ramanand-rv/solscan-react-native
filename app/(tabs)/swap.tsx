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
  const [fromToken, setfromToken] = useState("");
  const [inputValue, setinputValue] = useState("");

  // Calculate font size based on length
  const getFontSize = () => {
    const baseSize = 24;
    // const minSize = 12;
    const length = inputValue.length;

    return baseSize - (length - 10);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Swap Tokens</Text>

        {/* Card */}
        <View style={styles.fromCard}>
          <View style={styles.tokenQtyContainer}>
            {/* token selection dropdown */}
            <TouchableOpacity style={styles.fromTokenContainer}>
              <Image
                source={{
                  uri: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
                }}
                style={[styles.fromTokenIcon]}
              />
              <Text style={styles.fromTokenName}>SOL</Text>
              <Ionicons name="chevron-down" color="#Ffffff" size={24} />
            </TouchableOpacity>

            {/* Token qty input */}
            <TextInput
              style={[styles.fromTokenInput, { fontSize: getFontSize() }]}
              keyboardType="number-pad"
              // value={inputValue}
              placeholder={inputValue.length == 0 ? "0.00" : ""}
              placeholderTextColor="#5f3cb0"
              onChangeText={(text) => setinputValue(text)}
            />
          </View>

          <View></View>
        </View>
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
    marginBottom: 32,
    paddingHorizontal: 5,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  fromCard: {
    backgroundColor: "#3A2A2A",
    paddingVertical: 40,
    paddingHorizontal: 5,
    borderRadius: 18,
  },

  tokenQtyContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  fromTokenContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#16161D",
    borderRadius: 50,
  },

  fromTokenIcon: {
    width: 24,
    height: 24,
  },

  fromTokenName: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  fromTokenInput: {
    color: "#FFFFFF",
    fontWeight: "800",
    paddingHorizontal: 10,
    textAlign:"right",

    borderWidth: 1,
    borderColor: "white",
  },
});
