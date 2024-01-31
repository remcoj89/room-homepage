// Import Stylesheet
import './hero-section.styles.scss';

// Import Hooks
import { useContext } from 'react';

// Import Components
import NavigationBar from '../../navigation/navigation.component';
import ButtonsContainer from '../../buttons-container/buttons-container.component';

// Import Context
import { appScreenWidthContext }  from '../../../contexts/screen-size-context/screen-size-context';

export default function HeroSection() {
  const {screenWidth} = useContext(appScreenWidthContext)
  const postion = {
    bottom: 0,
    right: 0
  }

  return(
    <header>
      <NavigationBar />
      {screenWidth <375 && <ButtonsContainer postion={postion} />}
    </header>
  )
}
