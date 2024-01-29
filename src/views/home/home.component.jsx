import './home.styles.scss';
import HeroSection from '../../components/sections/hero-section/hero-section.component';
import MainSection from '../../components/sections/main-section/main-section.component';
import AboutSection from '../../components/sections/about-section/about-section.component';
import Button from '../../components/button/button.component';

import IconAngleLeft from '../../assets/icons/icon-angle-left.component';
import IconAngleRigth from '../../assets/icons/icon-angle-right.component';

export default function Home () {
  return (
    <>
    <main>
      <HeroSection />
      <MainSection />
      <div className="angle-btns">
        <Button buttonType={'angleButton'}><IconAngleLeft/></Button>
        <Button buttonType={'angleButton'}><IconAngleRigth/></Button>
      </div>
    </main>
    <AboutSection />
    </>
  )
}
