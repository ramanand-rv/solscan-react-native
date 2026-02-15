import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

interface SearchCardProps {
  value: string;
  onSearchChange: (text: string) => void;
}

const SearchCard = ({ value, onSearchChange }: SearchCardProps) => {
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.addressSearch}>
        {/* Address input */}
        <TextInput
          style={styles.addressInput}
          placeholder="Solana wallet address..."
          placeholderTextColor="#ffffff"
          value={value}
          onChangeText={onSearchChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {/* Search button */}
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome
            style={styles.iconSearch}
            name="search"
            size={24}
            color="#ffffff"
          />
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
        {/* copy address button */}
        {/* displayed if address.length >= 30  */}
        <TouchableOpacity style={styles.copyBtn}>
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
    marginHorizontal: 5,
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
    gap: 10,
    alignItems: "center",
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
