import { View, Text, FlatList, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useLeads } from '../context/LeadContext';


export default function HomeScreen() {
  const { leads } = useLeads();

  return (
    <View style={{ padding: 16 }}>
      {/* ADD LEAD */}
      <Pressable
        onPress={() => router.push('../add-lead')}
        style={{ padding: 12, backgroundColor: '#007bff', marginBottom: 16 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          + Add Lead
        </Text>
      </Pressable>

      <FlatList
        data={leads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: '../lead/[id]',
                params: { id: item.id },
              })
            }
            style={{
              padding: 12,
              borderWidth: 1,
              marginBottom: 8,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.phone}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
