// Import Stylesheet
import './hero-section.styles.scss';

// Import Hooks
import { useContext } from 'react';

// Import Components
import MobileNavigationBar from '../../mobile-navigation/mobile-navigation.component';
import DesktopNavigationBar from '../../desktop-navigation/desktop-navigation.component';
import ButtonsContainer from '../../buttons-container/buttons-container.component';

// Import Context
import { appScreenWidthContext }  from '../../../contexts/screen-size-context/screen-size-context';
import { appDataContext } from '../../../contexts/data-context/data-context';

export default function HeroSection() {
  const {screenWidth, screenBreakPoint} = useContext(appScreenWidthContext)
  const { slideContent } = useContext(appDataContext)
  if(!slideContent) {
    return;
  }
  const {imageDesktop, imageMobile} = slideContent

  const postion = {
    bottom: 0,
    right: 0
  }

  return(
    <header style={{
      backgroundImage: `url(${screenWidth < screenBreakPoint ? imageMobile : imageDesktop})`
    }}>
      {screenWidth < screenBreakPoint ? <MobileNavigationBar /> : <DesktopNavigationBar />}
      {screenWidth < screenBreakPoint && <ButtonsContainer postion={postion} />}
    </header>
  )
}
