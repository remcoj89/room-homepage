// Styling
import './main-section.styles.scss';

// Import Contexts
import { useContext } from 'react';
import { appScreenWidthContext } from '../../../contexts/screen-size-context/screen-size-context';
import { appDataContext } from '../../../contexts/data-context/data-context';

// Elements
import IconArrow from '../../../assets/icons/icon-arrow.component';
import Button from '../../button/button.component';
import ButtonContainer from '../../buttons-container/buttons-container.component'


const MainSection = () => {
const { screenWidth, screenBreakPoint } = useContext(appScreenWidthContext)
const { slideContent } = useContext(appDataContext)
if(!slideContent) {
  return;
}

const {title, description} = slideContent

const postion = {
  bottom: 0,
  left: 0
}

  return (
    <aside>
      <div className="aside-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button buttonType={'heroButton'}>Shop Now <IconArrow/></Button>
      </div>
      { screenWidth >= screenBreakPoint && <ButtonContainer postion={postion} /> }
    </aside>
  )
}

export default MainSection;
