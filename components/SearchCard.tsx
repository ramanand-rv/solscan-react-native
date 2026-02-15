import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
        {/* Search button */}
        <TouchableOpacity>
          <FontAwesome
            style={styles.iconSearch}
            name="search"
            size={24}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
      {/* copy address button */}
      {/* displayed if address.length >= 30  */}
      <TouchableOpacity>
        <AntDesign
          style={styles.iconCopy}
          name="copy"
          size={24}
          color="#ffffff"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    width: "95%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#001e3d",
    alignSelf: "flex-start",
  },

  addressSearch: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 0.3,
    borderStyle: "dotted",
    borderColor: "#ffffff",
    borderRadius: 50,
    maxWidth: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addressInput: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#ada9a5",
    marginLeft: 10,
    width: "80%",
  },

  iconSearch: {
    backgroundColor: "#14F195",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: "#ada9a5",
    borderStyle: "dotted",
  },

  iconCopy: {
    backgroundColor: "#A9AAB0",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: "#ffff",
    marginLeft: 10,
    borderStyle: "dotted",
    display: "none",
  },
});

export default SearchCard;
