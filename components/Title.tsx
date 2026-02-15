import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface TitleProps {
  title: string;
  subtitle: String;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.titleContainer}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>
        {/* Subtitle */}
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Title;

const styles = StyleSheet.create({
  safe: {
    marginHorizontal: 5,
  },

  titleContainer: {
    marginTop: -32,
  },

  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 14,
    color: "rgba(235, 235, 245, 0.6)",
  },
});
