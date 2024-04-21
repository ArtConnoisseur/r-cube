import { AboutSummary } from '../../components/AboutSummary/about-summary';
import { Navbar } from '../../components/Navbar/navbar';
import { Testimonials } from '../../components/Testimonial/testimonial';
import './about.css';

const testimonials = [
    {
      name: 'John Doe',
      content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
      date: '19-05-24'
    },
    {
      name: 'John Doe',
      content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
      date: '19-05-24'
    },
    {
      name: 'John Doe',
      content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
      date: '19-05-24'
    },
    {
      name: 'John Doe',
      content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
      date: '19-05-24'
    },
    {
      name: 'John Doe',
      content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
      date: '19-05-24'
    },
    {
        name: 'John Doe',
        content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
        date: '19-05-24'
    },
    {
        name: 'John Doe',
        content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
        date: '19-05-24'
    },
    {
        name: 'John Doe',
        content: 'This course was absolutely amazing! Loved every bit of it! Well written and well paced!',
        date: '19-05-24'
    }
]

export function About() {
    return (
        <div id="about-page-contianer">
            <Navbar />
            <div id='about-us-hero'>
                <div id='about-us-intro'>
                    <h1>About Us!</h1>
                    <p>
                        Welcome to the <span className='accent'>R<sup>3</sup></span> project. This is an inititive to educate people about the wonders of 
                        waste segregation and its many benefits. This is a website meant to teach you via a multimedia course covering diverse topics such as 
                        basics of waste segregation, the {`5 R's`} of Waste Management, Different Methods of Waste Management etc.  
                    </p>
                    <button>Get Started Learning!</button>
                </div>
                <AboutSummary />
            </div>
            <div id='why-learn'>
                <h3>Not yet convinced to start? Well...</h3>
                Learning about waste segregation is important because it empowers you to be part of a solution for several environmental issues. {`Here's`} a breakdown of the benefits:
                <ul>
                    <li>Reduces landfill waste:  Landfills take up a lot of space and can contaminate soil and water if not properly managed. Segregating waste allows for recycling of materials like paper, plastic, and metal, which means less ends up in landfills.</li>

                    <li>Conservation of resources: Recycling materials  uses less energy and resources than creating new ones from scratch.  For instance, recycled aluminum cans use around 95% less energy than producing new ones from mined materials.</li>

                    <li>Environmental benefits:  By reducing reliance on landfills and  consumption of virgin resources, waste segregation helps combat climate change and air and water pollution.</li>
                </ul>
                Learning about waste segregation also promotes responsible waste management habits.  By understanding what can be recycled or composted, you can reduce your overall environmental footprint. 
            </div>
            <div id='about-testimonial-contianer'>
                <h2>Still unconvinced? Hear from past students...</h2>
                <Testimonials testimonials={testimonials} />
            </div>
        </div>
    )
}