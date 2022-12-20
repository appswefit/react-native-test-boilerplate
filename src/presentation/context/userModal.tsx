
import { createContext } from "react";

export type UserModalContextData = {
  showModal: boolean,
  openUserSelectionModal: () => void;
  closeUserSelectionModal: () => void;
};

export const UserModalContext = createContext<UserModalContextData>(
  {} as UserModalContextData,
);



