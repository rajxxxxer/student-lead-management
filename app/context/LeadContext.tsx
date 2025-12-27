import React, { createContext, useContext, useState } from 'react';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type LeadContextType = {
  leads: Lead[];
  addLead: (lead: Lead) => void;
  deleteLead: (id: string) => void;
};

const LeadContext = createContext<LeadContextType | null>(null);

export const LeadProvider = ({ children }: { children: React.ReactNode }) => {
  const [leads, setLeads] = useState<Lead[]>([]);

  const addLead = (lead: Lead) => {
    setLeads((prev) => [...prev, lead]);
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <LeadContext.Provider value={{ leads, addLead, deleteLead }}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = () => {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error('useLeads must be used inside LeadProvider');
  return ctx;
};
