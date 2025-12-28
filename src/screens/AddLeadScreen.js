import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLeads } from "../context/LeadContext";
import Toast from "react-native-toast-message"; 

export default function AddLeadScreen({ navigation }) {
  const { addLead } = useLeads();

  const [form, setForm] = useState({
    leadName: "",
    name: "",
    email: "",
    phone: "",
    source: "",
    notes: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = () => {
    // Name validation
    if (!form.name.trim()) {
      Toast.show({ type: "error", text1: "Full Name is required" });
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
      Toast.show({ type: "error", text1: "Name should contain only letters and spaces" });
      return;
    }

    // Phone validation
    if (!form.phone.trim()) {
      Toast.show({ type: "error", text1: "Phone number is required" });
      return;
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      Toast.show({ type: "error", text1: "Phone number must be 10 digits" });
      return;
    }

    // Email validation (optional)
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      Toast.show({ type: "error", text1: "Please enter a valid email address" });
      return;
    }

    // Add lead to context
    addLead(form);

    // Reset form
    setForm({
      leadName: "",
      name: "",
      email: "",
      phone: "",
      source: "",
      notes: "",
    });

    // Show success toast
    Toast.show({ type: "success", text1: "Lead added successfully!" });

    // Go back to Home after short delay
    setTimeout(() => navigation.goBack(), 500);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.card}>
        <Text style={styles.title}>Add New Lead</Text>

        <Input
          label="Lead Name"
          placeholder="Website Inquiry"
          value={form.leadName}
          onChangeText={(v) => handleChange("leadName", v)}
        />

        <Input
          label="Full Name"
          placeholder="John Doe"
          value={form.name}
          onChangeText={(v) => handleChange("name", v)}
        />

        <Input
          label="Email"
          placeholder="john@email.com"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(v) => handleChange("email", v)}
        />

        <Input
          label="Phone"
          placeholder="9876543210"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(v) => handleChange("phone", v)}
        />

        <Input
          label="Lead Source (optional)"
          placeholder="Instagram / Website / Referral"
          value={form.source}
          onChangeText={(v) => handleChange("source", v)}
        />

        <Input
          label="Notes (optional)"
          placeholder="Additional details..."
          multiline
          value={form.notes}
          onChangeText={(v) => handleChange("notes", v)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>SAVE LEAD</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Input({ label, ...props }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f7fb",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    maxWidth: 500,
    width: "100%",
    alignSelf: "center",
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
