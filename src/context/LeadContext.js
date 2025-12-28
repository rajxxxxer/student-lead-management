import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);

  // Load leads from AsyncStorage when app starts
  useEffect(() => {
    const loadLeads = async () => {
      try {
        const storedLeads = await AsyncStorage.getItem("leads");
        if (storedLeads) {
          setLeads(JSON.parse(storedLeads));
        }
      } catch (e) {
        console.error("Failed to load leads:", e);
      }
    };
    loadLeads();
  }, []);

  // Save leads to AsyncStorage whenever they change
  useEffect(() => {
    const saveLeads = async () => {
      try {
        await AsyncStorage.setItem("leads", JSON.stringify(leads));
      } catch (e) {
        console.error("Failed to save leads:", e);
      }
    };
    saveLeads();
  }, [leads]);

  const addLead = (lead) => {
    const newLead = { ...lead, id: Date.now().toString(), createdAt: new Date() };
    setLeads((prev) => [...prev, newLead]);
  };

  const deleteLead = (id) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  return (
    <LeadContext.Provider value={{ leads, addLead, deleteLead }}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = () => useContext(LeadContext);
