import React from "react";

import AppRoutes from "./src/presentation/routes";
import AppProvider from "./src/presentation/providers";

import { 
  useFonts,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

import { 
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) return <></>;

  return (
    <AppProvider>
        <AppRoutes />
    </AppProvider>
  );
}
