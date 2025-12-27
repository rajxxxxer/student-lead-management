import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useLeads } from '../context/LeadContext';


export default function LeadDetailScreen() {
  const { id } = useLocalSearchParams();
  const { leads, deleteLead } = useLeads();

  const lead = leads.find((l) => l.id === id);

  if (!lead) {
    return <Text>Lead not found</Text>;
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {lead.name}
      </Text>
      <Text>Email: {lead.email}</Text>
      <Text>Phone: {lead.phone}</Text>

      <Pressable
        onPress={() => {
          deleteLead(lead.id);
          router.back();
        }}
        style={{ marginTop: 20, padding: 12, backgroundColor: 'red' }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Delete Lead
        </Text>
      </Pressable>
    </View>
  );
}
