//  Import Styles
import './App.scss';
// Import Hooks
import { useContext } from 'react';

// Import Context
import { appNavModalContext } from './contexts/nav-modal-context/nav-modal-context';


// Import Components
import HomeView from './views/home/home.component';
import NavigationModal from './components/navigation-modal/navigation-modal.component';
function App() {
  const {navMenuIsOpen} = useContext(appNavModalContext)
  return (
    <>
      <HomeView />
      {navMenuIsOpen && <NavigationModal />}

    </>
  )
}

export default App
