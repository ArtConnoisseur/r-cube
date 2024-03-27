import './root.css';
import { Scenery } from '../components/Scenery/scenery'
import { Navbar } from '../components/Navbar/navbar';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div id="homepage">
      <div id="homepage-text">
        <h1>Learn Waste Segregation:<br></br><span  id="typewriter">|</span></h1>
        <h5>Welcome to <span className='accent'>R<sup>3</sup></span>, where we teach you about the importance of <strong>Waste Segregation!</strong></h5>
        <span>
          <Link to='/sign-up'><button>Start Learning Today!</button></Link>
        </span>
      </div>
      <Scenery />
    </div>
  )
}

function WhyTho() {
  return(
    <div id="why-tho">
      <h2>Why Should I Learn About <span className='accent'>Waste Segregation?</span></h2>
      <p>Landfills overflowing, pollution on the rise – the state of our planet demands action. While the problems seem daunting, individual steps can make a big difference. Enter waste segregation, the practice of separating waste for proper disposal and recycling. Its a small action with a powerful impact.</p>

      <p>Think of unsorted waste: landfills overflow, methane gas (a potent greenhouse gas) is emitted, and hazardous materials contaminate our environment. Yikes! Segregation tackles these issues head-on.</p>

      <p>Ready to join the movement? Learning about segregation is simple. Many municipalities and waste management companies offer resources on sorting guidelines and collection procedures. Start by familiarizing yourself with your local waste categories and invest in separate bins.</p>

      <p>Remember, every little bit counts. By segregating your waste, you contribute to a healthier planet, a more sustainable future, and inspire others to do the same. Lets create a ripple effect of positive change, one bin at a time!</p>

      <Link to='/sign-up'><button>Start Learning Today!</button></Link>
    </div>
  )
}

export function Root() {
  return (
    <>
      <Navbar />
      <Homepage />
      <WhyTho />
    </>
  )
}
