import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { COLORS, RADIUS } from "../theme/colors";

function PlayerRow({ player }) {
  const online = player.status === "online";
  return (
    <View style={styles.playerRow}>
      <Image source={{ uri: player.avatar }} style={styles.playerAvatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.playerName}>{player.name}</Text>
        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: online ? COLORS.online : COLORS.offline },
            ]}
          />
          <Text
            style={[
              styles.statusText,
              { color: online ? COLORS.online : COLORS.offline },
            ]}
          >
            {online ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function ServerDetailsScreen({ route, navigation }) {
  const { match } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={{ uri: match.cover }} style={styles.banner}>
        <SafeAreaView style={styles.bannerHeader}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.bannerTitle}>Detalhes</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-social" size={18} color={COLORS.primary} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.bannerOverlay} />
        <View style={styles.bannerTextBlock}>
          <Text style={styles.matchTitle}>{match.title}</Text>
          <Text style={styles.matchDescription} numberOfLines={2}>
            {match.description}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <View style={styles.playersHeader}>
          <Text style={styles.playersTitle}>Jogadores</Text>
          <Text style={styles.playersTotal}>Total {match.players.length}</Text>
        </View>

        <FlatList
          data={match.players}
          keyExtractor={(p) => p.id}
          renderItem={({ item }) => <PlayerRow player={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <SafeAreaView style={styles.footer}>
        <TouchableOpacity style={styles.joinButton} activeOpacity={0.85}>
          <FontAwesome5 name="discord" size={18} color={COLORS.text} />
          <Text style={styles.joinButtonText}>Entrar na partida</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  banner: {
    height: 260,
    justifyContent: "flex-end",
  },
  bannerHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  bannerTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.pill,
    backgroundColor: "rgba(18,22,58,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(13,17,48,0.15)",
  },
  bannerTextBlock: {
    padding: 20,
  },
  matchTitle: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: "800",
  },
  matchDescription: {
    color: COLORS.textSecondary,
    fontSize: 13,
    marginTop: 6,
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  playersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  playersTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  playersTotal: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  playerAvatar: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.pill,
  },
  playerName: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "600",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 3,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: RADIUS.pill,
  },
  statusText: {
    fontSize: 12,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  joinButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.pill,
    paddingVertical: 16,
  },
  joinButtonText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "700",
  },
});
