/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const appNavModalContext = createContext({
  navMenuOpen: false
})

export const AppNavModalProvider = (({children}) => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  const handleToggleNavMenu = () => {
    setNavMenuIsOpen(!navMenuIsOpen);
  }

  const value = {
    navMenuIsOpen,
    handleToggleNavMenu
  }

  return (
    <appNavModalContext.Provider value={value}>
      {children}
    </appNavModalContext.Provider>
  )
})
