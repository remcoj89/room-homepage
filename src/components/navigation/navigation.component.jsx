// Importing Styling
import './navigation.styles.scss';

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
    <nav className={ navMenuIsOpen ? 'nav nav-open' : 'nav nav-closed'}>
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

      <ul className={ navMenuIsOpen ? 'navigation-links nav-links-dark' : 'navigation-links nav-links-white'}>
        <li className='navigation-link' onClick={handleNavLink}>home</li>
        <li className='navigation-link' onClick={handleNavLink}>shop</li>
        <li className='navigation-link' onClick={handleNavLink}>about</li>
        <li className='navigation-link' onClick={handleNavLink}>contact</li>
      </ul>
    </nav>
  )
}
