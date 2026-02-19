import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { getBalance, getTokens, getTxns } from "../lib/sol";

interface SearchCardProps {
  address: string;
  onAddressChange: (text: string) => void;
  loading: boolean;
  onSearch: () => void;
}

const SearchCard = ({
  address,
  onAddressChange,
  onSearch,
  loading,
}: SearchCardProps) => {
  const handleLongPressDemo = () => {
    const testAddress = "3xqUaVuAWsppb8yaSPJ2hvdvfjteMq2EbdCc3CLguaTE";
    onAddressChange(testAddress);
    onSearch;
  };

  const handleCopyToClipboard = () => {};

  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.addressSearch}>
        {/* Address input */}
        <TextInput
          style={styles.addressInput}
          placeholder="Solana wallet address..."
          placeholderTextColor="#ffffff"
          value={address}
          onChangeText={onAddressChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {/* Search button */}
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={onSearch}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#000000" />
          ) : (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome
                style={styles.iconSearch}
                name="search"
                size={24}
                color="#ffffff"
              />
              <Text style={styles.btnText}>Search</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* copy address button */}
        {/* displayed if address.length >= 30  */}
        <TouchableOpacity
          style={styles.copyBtn}
          onLongPress={handleLongPressDemo}
          onPress={handleCopyToClipboard}
        >
          <AntDesign
            style={styles.iconCopy}
            name="copy"
            size={24}
            color="#ffffff"
          />
          <Text style={styles.btnText}>Copy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 5,
  },

  addressSearch: {
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#6B7280",
    borderRadius: 12,
    backgroundColor: "#16161D",
  },

  addressInput: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "rgba(235, 235, 245, 0.6)",
    padding: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
    alignItems: "center",
  },

  searchBtn: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#14F195",
    paddingVertical: 16,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderRadius: 12,
  },

  copyBtn: {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "#A9AAB0",
    paddingVertical: 16,
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    borderRadius: 12,
  },

  btnText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: 400,
  },

  iconSearch: {
    color: "#000000",
  },

  iconCopy: {
    color: "#000000",
  },
});

export default SearchCard;
