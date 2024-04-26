import './root.css';
import { Navbar } from '../components/Navbar/navbar';
import { Footer } from '../components/Footer/footer'
import { Link } from 'react-router-dom';
import { ImageText } from '../components/ImageText/imageText';
import { ToTop } from '../components/ToTop/to-top';
import { SponsorMarquee } from '../components/SponsorMarquee/sponsor-marquee';
import { HomeInfo } from '../components/HomeInfo/home-info';

function Hero() {
  return (
      <div id="homepage">
          <div id="homepage-text">
              <h1>Learn Waste Segregation:<br></br><span id="typewriter">|</span></h1>
              <h5>Welcome to <span className='accent'>R<sup>3</sup></span>, where we teach you about the importance of <strong>Waste Segregation!</strong></h5>
              <span>
                  <Link to='/sign-up'><button>Start Learning Today!</button></Link>
              </span>
          </div>
          <div>
              <ImageText 
                  imageAddress={'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=2931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                  className='hero-image'
                  topText={'Save the planet!'}
                  lowerText={'See what you can do?'}
              />
          </div>
      </div>
  );
}

export function Root() {
  return (
      <div id='homepage-container'>
          <ToTop />
          <Navbar />
          <Hero />
          <HomeInfo 
            imageAddress={'https://plus.unsplash.com/premium_photo-1661573708898-85a03aa619ad?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            header={'Effective Waste Sorting Techniques'}
            infoPara={'Learn the basics of how to sort and segregate waste materials efficiently.'}
            learnLink={'/waste-sorting-techniques'}
          />
          <HomeInfo 
            imageAddress={'https://images.unsplash.com/photo-1607296393394-6e25d0fc15cc?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            header={'Types of Waste and Their Impact'}
            infoPara={'Explore various waste categories and their implications on the environment.'}
            learnLink={'/types-of-waste'}
          />
          <HomeInfo 
            imageAddress={'https://plus.unsplash.com/premium_photo-1664300326180-d15a41cc3607?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            header={'Effective Waste Sorting Techniques'}
            infoPara={'Learn the basics of how to sort and segregate waste materials efficiently.'}
            learnLink={'/waste-sorting-techniques'}
          />
          <div id='sponsors'>
                <h2>Thanks to our amazing sponsors!</h2>
                <SponsorMarquee />
                They've been the backbone of our operation. We are very grateful to them!
          </div>
          <Footer />
      </div>
  );
}

