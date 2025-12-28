import { View, Text, Button, Alert } from "react-native";
import { useLeads } from "../context/LeadContext";
import { useEffect } from "react";

export default function LeadDetailScreen({ route, navigation }) {
  const { leadId } = route.params;
  const { leads, deleteLead } = useLeads();

  const lead = leads.find((l) => l.id === leadId);

  // ✅ If lead is deleted, navigate back automatically


 const handleDelete = () => {
  deleteLead(lead.id); // remove from context
  navigation.goBack(); // go back to HomeScreen
};


  if (!lead) return null; // safeguard

  return (
    <View style={{ padding: 16 }}>
      <Text>Name: {lead.name}</Text>
      <Text>Email: {lead.email}</Text>
      <Text>Phone: {lead.phone}</Text>
      <Text>Source: {lead.source}</Text>
      <Text>Notes: {lead.notes}</Text>

      <Button title="Delete Lead" color="red" onPress={handleDelete} />
    </View>
  );
}
