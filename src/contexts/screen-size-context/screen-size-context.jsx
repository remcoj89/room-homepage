import { createContext, useEffect, useState } from 'react';
// Create a context with initial values
export const appScreenWidthContext = createContext({
  screenWidth: 0,
  screenBreakPoint: 928,
})
// Screenwidth provider
export const AppScreenWidthProvider = (({children}) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const screenBreakPoint = 928

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const value = {
    screenWidth,
    screenBreakPoint
  }

  return (
    <appScreenWidthContext.Provider value={value}>
      {children}
    </appScreenWidthContext.Provider>
  )
})
