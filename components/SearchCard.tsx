import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SearchCardProps {
  value: string;
  onSearchChange: (text: string) => void;
}

const SearchCard = ({ value, onSearchChange }: SearchCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.addressSearch}>
        <TextInput
          style={styles.addressInput}
          placeholder="Solana wallet address..."
          placeholderTextColor="#ffffff"
          value={value}
          onChangeText={onSearchChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity>
          <FontAwesome
            style={styles.iconSearch}
            name="search"
            size={24}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <AntDesign
          style={styles.iconCopy}
          name="copy"
          size={24}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    maxWidth: "95%",
    minWidth: "90%",
    height: "auto",
    alignItems: "center",

    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#838383",
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#52565a",
    // overflow:"hidden"
  },

  addressSearch: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ffff",
    // marginLeft: "10%",
    // marginRight: "10%",
    width: "auto",
    height: "auto",
    borderRadius: 50,
    alignSelf: "center",
  },

  addressInput: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#ada9a5",
    marginLeft: 20,
    width: "auto",
  },

  iconSearch: {
    backgroundColor: "#3f8bb8",
    padding: 10,
    borderRadius: 50,
  },
  
  iconCopy: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ffff",
    // display: "none"
    marginLeft: 10
  },
});

export default SearchCard;
