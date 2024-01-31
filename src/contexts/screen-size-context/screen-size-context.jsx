/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';

// Create a context with initial values
export const appScreenWidthContext = createContext({
  screenWidth: 0,
})

// Screenwidth provider
export const AppScreenWidthProvider = (({children}) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const value = {screenWidth}

  return (
    <appScreenWidthContext.Provider value={value}>
      {children}
    </appScreenWidthContext.Provider>
  )
})
