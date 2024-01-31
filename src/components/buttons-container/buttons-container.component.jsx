/* eslint-disable react/prop-types */
// Importing Styleheet
import './buttons-container.styles.scss';

// Importing Components
import Button from '../../components/button/button.component';
import IconAngleLeft from '../../assets/icons/icon-angle-left.component';
import IconAngleRigth from '../../assets/icons/icon-angle-right.component';

const ButtonsContainer = (props) => {
  const {postion} = props
  return (
    <div className="angle-btns" style={postion}>
    <Button buttonType={'angleButton'}><IconAngleLeft/></Button>
    <Button buttonType={'angleButton'}><IconAngleRigth/></Button>
  </div>
  )
}

export default ButtonsContainer;
