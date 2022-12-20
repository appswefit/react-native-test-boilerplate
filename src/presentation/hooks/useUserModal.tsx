import { useContext, useState, ReactNode } from "react";
import { UserModalContext, UserModalContextData } from "../context/userModal";

type UserModalProviderProps = { children: ReactNode };

export const UserModalProvider = ({ children }: UserModalProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  const openUserSelectionModal = () => setShowModal(true);

  const closeUserSelectionModal = () => setShowModal(false);

  return (
    <UserModalContext.Provider
      value={{
        showModal,
        openUserSelectionModal,
        closeUserSelectionModal,
      }}
    >
      {children}
    </UserModalContext.Provider>
  );
};

export const useUserModal = (): UserModalContextData => {
  const context = useContext(UserModalContext);

  if (!context) {
    throw new Error('useUserModal must be used within UserModalProvider');
  }

  return context;
}
