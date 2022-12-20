
import React, { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';
import { RepositoryProvider } from '../hooks/useRepository';
import { UserModalProvider } from '../hooks/useUserModal';
import theme from "../styles/theme";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserModalProvider>
        <RepositoryProvider>
          {children}
        </RepositoryProvider>
      </UserModalProvider>
    </ThemeProvider>
  );
};

export default Providers;