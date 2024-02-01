// Importing Styling
import './mobile-navigation.styles.scss';
// Import Hooks
import { useContext } from 'react';
// Import Context
import { appNavModalContext } from '../../contexts/nav-modal-context/nav-modal-context';

// Importing Components
import Logo from '../../assets/icons/logo.component';
import BurgerMenu from '../../assets/icons/icon-hamburger.component';
import Close from '../../assets/icons/icon-close.component';

export default function NavigationBar() {
  const {navMenuIsOpen, handleToggleNavMenu} = useContext(appNavModalContext)

  return (
    <nav className={ navMenuIsOpen ? 'mobile-navigation mobile-navigation-open' : 'mobile-navigation mobile-navigation-closed'}>
      <div id="burger-menu" onClick={handleToggleNavMenu}>
        { navMenuIsOpen ? <Close /> : <BurgerMenu /> }
      </div>
      {
        navMenuIsOpen ? "" :
        <div id="logo-container">
          <div id="logo">
            <Logo />
          </div>
        </div>
      }

      {
        navMenuIsOpen &&
        <ul className='mobile-navigation-links'>
          <li className='mobile-navigation-link' onClick={handleToggleNavMenu}>home</li>
          <li className='mobile-navigation-link' onClick={handleToggleNavMenu}>shop</li>
          <li className='mobile-navigation-link' onClick={handleToggleNavMenu}>about</li>
          <li className='mobile-navigation-link' onClick={handleToggleNavMenu}>contact</li>
        </ul>
      }
    </nav>
  )
}
