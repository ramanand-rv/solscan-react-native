import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export function SwapScreen (){
  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.title}>Swap Tokens</Text>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
            <TouchableOpacity style={styles.fromTokenContainer}>
                <View style={styles.fromTokenIconContainer}>
                    <Text style={styles.fromTokenIconText}>X</Text>

                </View>

            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#0D0D12",
    alignContent:"center",
    borderWidth:1,
    borderColor: "red",
    

  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    marginLeft:20,
  },
  card: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cardHeader: {},
  fromTokenContainer: {},
  fromTokenIconContainer: {},
  fromTokenIconText: {},
});
