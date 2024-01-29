// Styling
import './main-section.styles.scss';
// Elements
import IconArrow from '../../../assets/icons/icon-arrow.component';
import Button from '../../button/button.component';

const MainSection = () => {

  return (
    <aside>
      <h2>Discover innovatiove ways to decorate</h2>
      <p>We provide unmatched quality, confort and style for property owners across the country. Our experts combine rom and function in bringin your vision to life. Create a room in your own style with our collection and make your propperty a reflection of you and what you love.</p>
      <Button buttonType={'heroButton'}>Shop Now <IconArrow/></Button>

    </aside>
  )
}

export default MainSection;
