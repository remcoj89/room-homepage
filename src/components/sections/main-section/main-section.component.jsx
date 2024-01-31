// Styling
import './main-section.styles.scss';

// Import Contexts
import { useContext } from 'react';
import { appScreenWidthContext } from '../../../contexts/screen-size-context/screen-size-context';

// Elements
import IconArrow from '../../../assets/icons/icon-arrow.component';
import Button from '../../button/button.component';
import ButtonContainer from '../../buttons-container/buttons-container.component'


const MainSection = () => {
const { screenWidth } = useContext(appScreenWidthContext)
const postion = {
  bottom: 0,
  left: 0
}

  return (
    <aside>
      <h2>Discover innovatiove ways to decorate</h2>
      <p>We provide unmatched quality, confort and style for property owners across the country. Our experts combine rom and function in bringin your vision to life. Create a room in your own style with our collection and make your propperty a reflection of you and what you love.</p>
      <Button buttonType={'heroButton'}>Shop Now <IconArrow/></Button>
      { screenWidth >= 375 && <ButtonContainer postion={postion} /> }
    </aside>
  )
}

export default MainSection;
