import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { useLeads } from './context/LeadContext';


export default function AddLeadScreen() {
  const { addLead } = useLeads();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submit = () => {
    if (!name || !email || phone.length < 10) {
      Alert.alert('Validation Error', 'Enter valid details');
      return;
    }

    addLead({
      id: Date.now().toString(),
      name,
      email,
      phone,
    });

    router.back();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />

      <Pressable
        onPress={submit}
        style={{ padding: 12, backgroundColor: 'green' }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Save Lead
        </Text>
      </Pressable>
    </View>
  );
}
