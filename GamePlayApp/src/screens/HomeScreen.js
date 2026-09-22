import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS, RADIUS } from "../theme/colors";
import { CATEGORIES, MATCHES } from "../data/matches";

const roleColor = (role) => (role === "Anfitrião" ? COLORS.primary : COLORS.online);

function CategoryCard({ item }) {
  return (
    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
      <MaterialCommunityIcons name={item.icon} size={26} color={COLORS.text} />
      <Text style={styles.categoryLabel}>{item.label}</Text>
    </TouchableOpacity>
  );
}

function MatchRow({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.matchRow} activeOpacity={0.8} onPress={onPress}>
      <Image source={{ uri: item.icon }} style={styles.matchIcon} />
      <View style={styles.matchInfo}>
        <View style={styles.matchTopLine}>
          <Text style={styles.matchTitle}>{item.title}</Text>
          <Text style={styles.matchCategory}>{item.category}</Text>
        </View>
        <View style={styles.matchBottomLine}>
          <Ionicons name="calendar-outline" size={14} color={COLORS.textSecondary} />
          <Text style={styles.matchDate}>{item.date}</Text>
          <Ionicons
            name="person"
            size={13}
            color={roleColor(item.role)}
            style={{ marginLeft: 10 }}
          />
          <Text style={[styles.matchRole, { color: roleColor(item.role) }]}>
            {item.role}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=12" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>
              Olá, <Text style={styles.greetingName}>Tiago</Text>
            </Text>
            <Text style={styles.greetingSub}>Hoje é dia de vitória</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Schedule")}
        >
          <Ionicons name="add" size={26} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesRow}
      >
        {CATEGORIES.map((c) => (
          <CategoryCard key={c.id} item={c} />
        ))}
      </ScrollView>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Partidas agendadas</Text>
        <Text style={styles.listTotal}>Total {MATCHES.length}</Text>
      </View>

      <FlatList
        data={MATCHES}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <MatchRow
            item={item}
            onPress={() => navigation.navigate("Details", { match: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.pill,
  },
  greeting: {
    color: COLORS.text,
    fontSize: 16,
  },
  greetingName: {
    fontWeight: "800",
  },
  greetingSub: {
    color: COLORS.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesRow: {
    gap: 14,
    paddingBottom: 24,
  },
  categoryCard: {
    width: 96,
    height: 84,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  categoryLabel: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "600",
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  listTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  listTotal: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  matchRow: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    gap: 12,
  },
  matchIcon: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.sm,
  },
  matchInfo: {
    flex: 1,
    gap: 6,
  },
  matchTopLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  matchTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: "700",
  },
  matchCategory: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  matchBottomLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  matchDate: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginLeft: 6,
  },
  matchRole: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: "600",
  },
});
