import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  heroButton: 'heroButton',
  angleButton: 'angle-btn'
};

const Button = ({children, buttonType}) => {
  return (
    <button className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  )
}


export default Button;
