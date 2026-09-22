import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, RADIUS } from "../theme/colors";
import { CATEGORIES, MOCK_SELECTED_SERVER } from "../data/matches";

export default function ScheduleScreen({ navigation }) {
  // Estado da categoria selecionada (Ranqueada / Duelo 1x1 / Diversão)
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Estado do servidor selecionado. O modal com a lista de servidores não
  // precisa ser desenvolvido — aqui simulamos a seleção ao tocar no botão.
  const [selectedServer, setSelectedServer] = useState(null);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  function handleSelectServerPress() {
    // Simula a escolha de um servidor sem abrir o modal de lista,
    // conforme pedido no enunciado do trabalho.
    setSelectedServer(MOCK_SELECTED_SERVER);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Agendar partida</Text>
          <View style={{ width: 36 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Se já houver um servidor selecionado, mostramos o card dele no topo */}
          {selectedServer && (
            <View style={styles.selectedServerBadge}>
              <Image
                source={{ uri: selectedServer.icon }}
                style={styles.selectedServerIcon}
              />
              <Text style={styles.selectedServerName}>
                {selectedServer.name}
              </Text>
            </View>
          )}

          <Text style={styles.label}>Categoria</Text>
          <View style={styles.categoriesRow}>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  style={[styles.categoryCard, active && styles.categoryCardActive]}
                  activeOpacity={0.85}
                  onPress={() => setSelectedCategory(cat.id)}
                >
                  {active && <View style={styles.activeDot} />}
                  <MaterialCommunityIcons
                    name={cat.icon}
                    size={24}
                    color={active ? COLORS.primary : COLORS.textSecondary}
                  />
                  <Text
                    style={[
                      styles.categoryLabel,
                      active && styles.categoryLabelActive,
                    ]}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.serverButton}
            activeOpacity={0.85}
            onPress={handleSelectServerPress}
          >
            {selectedServer ? (
              <View style={styles.serverButtonSelected}>
                <Image
                  source={{ uri: selectedServer.icon }}
                  style={styles.serverButtonIcon}
                />
                <Text style={styles.serverButtonTextSelected}>
                  {selectedServer.name}
                </Text>
              </View>
            ) : (
              <Text style={styles.serverButtonText}>Selecione um servidor</Text>
            )}
            <Ionicons name="chevron-forward" size={18} color={COLORS.textSecondary} />
          </TouchableOpacity>

          <View style={styles.row}>
            <View style={styles.field}>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.inlineInputs}>
                <TextInput
                  style={styles.smallInput}
                  placeholder="22"
                  placeholderTextColor={COLORS.textMuted}
                  keyboardType="number-pad"
                  maxLength={2}
                  value={day}
                  onChangeText={setDay}
                />
                <Text style={styles.separator}>/</Text>
                <TextInput
                  style={styles.smallInput}
                  placeholder="06"
                  placeholderTextColor={COLORS.textMuted}
                  keyboardType="number-pad"
                  maxLength={2}
                  value={month}
                  onChangeText={setMonth}
                />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Horário</Text>
              <View style={styles.inlineInputs}>
                <TextInput
                  style={styles.smallInput}
                  placeholder="19"
                  placeholderTextColor={COLORS.textMuted}
                  keyboardType="number-pad"
                  maxLength={2}
                  value={hour}
                  onChangeText={setHour}
                />
                <Text style={styles.separator}>:</Text>
                <TextInput
                  style={styles.smallInput}
                  placeholder="30"
                  placeholderTextColor={COLORS.textMuted}
                  keyboardType="number-pad"
                  maxLength={2}
                  value={minute}
                  onChangeText={setMinute}
                />
              </View>
            </View>
          </View>

          <View style={styles.descriptionHeader}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.charCount}>Max 100 caracteres</Text>
          </View>
          <TextInput
            style={styles.textArea}
            placeholder="É hoje que vamos chegar ao challenger sem perder uma partida da md10"
            placeholderTextColor={COLORS.textMuted}
            multiline
            maxLength={100}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={styles.scheduleButton} activeOpacity={0.85}>
            <Text style={styles.scheduleButtonText}>Agendar</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 14,
  },
  selectedServerBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: 10,
    marginBottom: 4,
  },
  selectedServerIcon: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.sm,
  },
  selectedServerName: {
    color: COLORS.text,
    fontWeight: "700",
    fontSize: 14,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },
  categoriesRow: {
    flexDirection: "row",
    gap: 12,
  },
  categoryCard: {
    flex: 1,
    height: 78,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  categoryCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.cardAlt,
  },
  activeDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primary,
  },
  categoryLabel: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: "600",
  },
  categoryLabelActive: {
    color: COLORS.text,
  },
  serverButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  serverButtonText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  serverButtonSelected: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  serverButtonIcon: {
    width: 26,
    height: 26,
    borderRadius: RADIUS.sm,
  },
  serverButtonTextSelected: {
    color: COLORS.text,
    fontWeight: "600",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 14,
  },
  field: {
    flex: 1,
  },
  inlineInputs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  smallInput: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.sm,
    color: COLORS.text,
    textAlign: "center",
    paddingVertical: 12,
    fontSize: 14,
  },
  separator: {
    color: COLORS.textSecondary,
    fontSize: 16,
  },
  descriptionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  charCount: {
    color: COLORS.textMuted,
    fontSize: 11,
  },
  textArea: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    color: COLORS.text,
    padding: 14,
    minHeight: 90,
    textAlignVertical: "top",
    fontSize: 13,
  },
  scheduleButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.pill,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  scheduleButtonText: {
    color: COLORS.text,
    fontWeight: "700",
    fontSize: 15,
  },
});
