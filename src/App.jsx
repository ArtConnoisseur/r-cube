import './App.css';
import { Scenery } from './components/Scenery/scenery'
import { Navbar } from './components/Navbar/navbar';

function Homepage() {
  return (
    <div id="homepage">
      <div id="homepage-text">
        <h1>Learn Waste Segregation:<br></br><span  id="typewriter">|</span></h1>
        <h5>Welcome to <span className='accent'>R<sup>3</sup></span>, where we teach you about the importance of <strong>Waste Segregation!</strong></h5>
        <span>
          <button>Start Learning Today!</button>
        </span>
      </div>
      <Scenery />
    </div>
  )
}

function whyShouldYouLearn() {
  return (
    <div id="why-tho">
      <h2>Why should I learn about this?</h2>
      <p>
        It's a valid question. Why should you learn about this? For starters, our planet is dying. This is quite the loop. Literally. There's 
        only so many things that we can do, waste segreation is one of them.
      </p>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <whyShouldYouLearn />
    </>
  )
}

export default App;