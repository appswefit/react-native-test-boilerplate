import React from "react";
import StackRouter from "./Stack.router";
import { NavigationContainer } from "@react-navigation/native";
import UserSelectionModal from "../components/UserSelectionModal";
import { useUserModal } from "../hooks/useUserModal";

export default function AppRoutes() {
  const { showModal, closeUserSelectionModal } = useUserModal();

  return (
    <>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
      <UserSelectionModal visible={showModal} onClose={closeUserSelectionModal} />
    </>
  );
}
