import { Stack } from "expo-router";
import { LeadProvider } from "./context/LeadContext";




export default function RootLayout() {
  return (
    <LeadProvider>
      <Stack />
    </LeadProvider>
  );
}
