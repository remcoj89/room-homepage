/* eslint-disable react/prop-types */
import './button.styles.scss';
// Import Hooks
import { useContext} from 'react';
// Import Context
import { appDataContext } from '../../contexts/data-context/data-context';

const BUTTON_TYPE_CLASSES = {
  heroButton: 'heroButton',
  angleButton: 'angle-btn'
};

const Button = (props) => {
  const {children, buttonType, direction} = props;
  const {handleSlidePage} = useContext(appDataContext);

  function handleClick() {
    handleSlidePage(direction)
  }

  return (
    <button className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`} onClick={handleClick}>
      {children}
    </button>
  )
}


export default Button;
