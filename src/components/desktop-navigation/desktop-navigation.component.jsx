// Import Stylesheet
import './desktop-navigation.styles.scss';


// Importing Components
import Logo from '../../assets/icons/logo.component';

const DesktopNavigationBar = () => {
  return (
    <nav className='desktop-navigation'>
      <Logo />
      <ul className="desktop-navigation-links">
        <li className='desktop-navigation-link'>home</li>
        <li className='desktop-navigation-link'>shop</li>
        <li className='desktop-navigation-link'>about</li>
        <li className='desktop-navigation-link'>contact</li>
      </ul>
    </nav>
  )
}

export default DesktopNavigationBar;
