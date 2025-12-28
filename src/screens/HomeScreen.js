import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useLeads } from "../context/LeadContext";

export default function HomeScreen({ navigation }) {
  const { leads } = useLeads();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddLead")}
      >
        <Text style={styles.addButtonText}>+ Add Lead</Text>
      </TouchableOpacity>

      {leads.length === 0 ? (
        <Text style={styles.empty}>No leads yet</Text>
      ) : (
        <FlatList
          data={leads}
          keyExtractor={(item) => item.id}
          extraData={leads} // ✅ ensures re-render after delete
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("LeadDetail", { leadId: item.id })
              }
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>{item.leadName}</Text>
              <Text style={styles.sub}>{item.phone}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  addButton: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
  },
  card: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "700" },
  sub: { color: "#555", marginTop: 2 },
});
