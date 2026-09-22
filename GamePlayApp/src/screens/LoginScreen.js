import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, RADIUS } from "../theme/colors";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{ uri: "https://picsum.photos/seed/gamehero/800/900" }}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <View style={styles.heroOverlay} />
      </ImageBackground>

      <SafeAreaView style={styles.content}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>
            Conecte-se{"\n"}e organize suas{"\n"}jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games favoritos com seus amigos
          </Text>
        </View>

        <TouchableOpacity
          style={styles.discordButton}
          activeOpacity={0.85}
          onPress={() => navigation.replace("Home")}
        >
          <FontAwesome5 name="discord" size={20} color={COLORS.text} />
          <Text style={styles.discordButtonText}>Entrar com Discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDarker,
  },
  hero: {
    flex: 1.1,
  },
  heroImage: {
    resizeMode: "cover",
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(13,17,48,0.35)",
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: "space-between",
    paddingBottom: 24,
    paddingTop: 24,
  },
  textBlock: {
    gap: 12,
  },
  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 38,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  discordButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.discord,
    borderRadius: RADIUS.pill,
    paddingVertical: 16,
    gap: 12,
  },
  discordButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
});
