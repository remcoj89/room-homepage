// Importing Styling
import './mobile-navigation.styles.scss';

// Importing React hook(s)
import { useState } from 'react';

// Importing Components
import Logo from '../../assets/images/others/logo.component';
import BurgerMenu from '../../assets/icons/icon-hamburger.component';
import Close from '../../assets/icons/icon-close.component';

export default function NavigationBar() {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  const handleToggleNavMenu = () => {
    setNavMenuIsOpen(!navMenuIsOpen);
  }

  const handleNavLink = () => {
    setNavMenuIsOpen(false)
  }

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
          <li className='mobile-navigation-link' onClick={handleNavLink}>home</li>
          <li className='mobile-navigation-link' onClick={handleNavLink}>shop</li>
          <li className='mobile-navigation-link' onClick={handleNavLink}>about</li>
          <li className='mobile-navigation-link' onClick={handleNavLink}>contact</li>
        </ul>
      }
    </nav>
  )
}
