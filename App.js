import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://i.ibb.co/QFK95LyM/kenneth.jpg" }}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.name}>Kenneth Mejillano</Text>
          <Text style={styles.role}>
            3rd year BSIT — Colegio de San Juan de Letran
          </Text>
          <Text style={styles.bio}>
            A 3rd year BSIT student at Colegio de San Juan de Letran. Passionate
            about web development, databases, and building useful student
            projects.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover", // full cover
    justifyContent: "flex-end", // push text to bottom
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)", // dark transparent overlay for readability
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },
  role: {
    fontSize: 16,
    color: "#f1f1f1",
    marginTop: 4,
  },
  bio: {
    fontSize: 15,
    color: "#e0e0e0",
    marginTop: 10,
    lineHeight: 20,
  },
});
