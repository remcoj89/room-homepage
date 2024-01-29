import { createContext, useContext, useState } from 'react';

// Create a context with initial values
const ScreenPositionContext = createContext({
  x: 0,
  y: 0,
  setScreenPosition: () => {},
});

// Custom hook to simplify using the context
export const useScreenPosition = () => {
  return useContext(ScreenPositionContext);
};

// ScreenPositionProvider component to wrap your application with
export const ScreenPositionProvider = ({ children }) => {
  const [screenPosition, setScreenPosition] = useState({ x: 0, y: 0 });

  const contextValue = {
    x: screenPosition.x,
    y: screenPosition.y,
    setScreenPosition: (newX, newY) => setScreenPosition({ x: newX, y: newY }),
  };

  return (
    <ScreenPositionContext.Provider value={contextValue}>
      {children}
    </ScreenPositionContext.Provider>
  );
};
