import './about-section.styles.scss';

const AboutSection = () => {
  return (
    <div className="about-section">
      <img className='about-section--image' src="src/assets/images/about/image-about-dark.jpg" alt="Room Homepage" />
      <div className='about-section-content'>
        <h3 className='about-section-content--title'>About our furniture</h3>
        <p className='about-section-content--paragraph'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img className='about-section--image' src="src/assets/images/about/image-about-light.jpg" alt="Room Homepage" />
    </div>
  )
}

export default AboutSection;
