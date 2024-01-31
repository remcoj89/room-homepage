// Import Stylesheet
import './hero-section.styles.scss';

// Import Hooks
import { useContext } from 'react';

// Import Components
import NavigationBar from '../../navigation/navigation.component';
import ButtonsContainer from '../../buttons-container/buttons-container.component';

// Import Context
import { appScreenWidthContext }  from '../../../contexts/screen-size-context/screen-size-context';
import { appDataContext } from '../../../contexts/data-context/data-context';

export default function HeroSection() {
  const {screenWidth} = useContext(appScreenWidthContext)
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
      backgroundImage: `url(${screenWidth < 375 ? imageMobile : imageDesktop})`
    }}>
      <NavigationBar />
      {screenWidth <375 && <ButtonsContainer postion={postion} />}
    </header>
  )
}
