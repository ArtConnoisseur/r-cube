import './root.css';
import { Navbar } from '../components/Navbar/navbar';
import { Footer } from '../components/Footer/footer'
import { Link } from 'react-router-dom';
import { ImageText } from '../components/ImageText/imageText';
import { ToTop } from '../components/ToTop/to-top';
import { SponsorMarquee } from '../components/SponsorMarquee/sponsor-marquee';

function Hero() {
  return (
    <div id="homepage">
      <div id="homepage-text">
        <h1>Learn Waste Segregation:<br></br><span  id="typewriter">|</span></h1>
        <h5>Welcome to <span className='accent'>R<sup>3</sup></span>, where we teach you about the importance of <strong>Waste Segregation!</strong></h5>
        <span>
          <Link to='/sign-up'><button>Start Learning Today!</button></Link>
        </span>
      </div>
      <div>
        <ImageText imageAddress={'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=2931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
        className='hero-image'
        topText={'Save the planet!'}
        lowerText={'See what you can do?'}
        />
      </div>
    </div>
  )
}



export function Root() {
  return (
    <div id='homepage-container'>
      <ToTop />
      <Navbar />
      <Hero />
      <SponsorMarquee />
      <Footer />
    </div>
  )
}
