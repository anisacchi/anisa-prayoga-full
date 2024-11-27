'use client';

import React, { createContext, useContext, useState } from 'react';

type GuestContextType = {
  guestName: string | undefined;
  setGuestName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const GuestContext = createContext<GuestContextType | undefined>(undefined);

export const GuestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [guestName, setGuestName] = useState<string | undefined>('');
  return (
    <GuestContext.Provider value={{ guestName, setGuestName }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuestName = () => {
  const context = useContext(GuestContext);

  if (!context) {
    throw new Error('useGuestName must be used within a GuestProvider');
  }

  return context;
};
