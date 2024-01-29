import './home.styles.scss';
import HeroSection from '../../components/sections/hero-section/hero-section.component';
import MainSection from '../../components/sections/main-section/main-section.component';

export default function Home () {
  return (
    <main>
      <HeroSection />
      <MainSection />
    </main>
  )
}
