import { AboutSummary } from '../../components/AboutSummary/about-summary';
import { Navbar } from '../../components/Navbar/navbar';
import { Testimonials } from '../../components/Testimonial/testimonial';
import { ImageLinks } from '../../components/ImageLinks/image-links';
import { SponsorMarquee } from '../../components/SponsorMarquee/sponsor-marquee';
import { Footer } from '../../components/Footer/footer';
import { ToTop } from '../../components/ToTop/to-top';
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

const links = [
    'https://react.dev/learn/conditional-rendering',
    'https://designcode.io/figma-handbook-figma-design-tool',
    'https://realpython.com/get-started-with-django-1/'
]

export function About() {
    return (
        <div id="about-page-contianer">
            <ToTop />
            <div id='about-navbar'>
                <Navbar />
            </div>
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
                <div className='why-info-container'>
                    <h3>Not yet convinced to start? Well...</h3>
                    Learning about waste segregation is important because it empowers you to be part of a solution for several environmental issues. {`Here's`} a breakdown of the benefits:
                </div>
                <div id='about-image-links'>
                    <ImageLinks imageAdress={'https://plus.unsplash.com/premium_photo-1661775594535-64ee3e132fd9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    links={links}
                    text='Our impact! ->'/>
                    <ImageLinks imageAdress={'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    links={links}
                    text='Volunteer Programs! ->'/>
                    <ImageLinks imageAdress={'https://images.unsplash.com/photo-1610141160723-d2d346e73766?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    links={links}
                    text='More ->'/>
                </div>
                <div className='why-info-container'>
                    <ul>
                        <li>Reduces landfill waste:  Landfills take up a lot of space and can contaminate soil and water if not properly managed. Segregating waste allows for recycling of materials like paper, plastic, and metal, which means less ends up in landfills.</li>

                        <li>Conservation of resources: Recycling materials  uses less energy and resources than creating new ones from scratch.  For instance, recycled aluminum cans use around 95% less energy than producing new ones from mined materials.</li>

                        <li>Environmental benefits:  By reducing reliance on landfills and  consumption of virgin resources, waste segregation helps combat climate change and air and water pollution.</li>
                    </ul>
                    Learning about waste segregation also promotes responsible waste management habits.  By understanding what can be recycled or composted, you can reduce your overall environmental footprint. 
                </div>
                <div className='vector-container'>
                    <svg width="2866" height="745" viewBox="0 0 2866 745" fill="none" xmlns="http://www.w3.org/2000/svg" className='vector-bg'>
                        <path d="M76 197.5C104.833 316 274.4 540.1 722 488.5C1281.5 424 1659.5 -23.5 1956 52C2252.5 127.5 2431.5 471 2563 552.5C2694.5 634 2839.5 595 2865 592M20 743C325 614 255 136 537.5 94C820 52 1446.5 642.5 1642.5 634C1838.5 625.5 2280 -9.5 2484.5 94C2689 197.5 2719.5 337 2865 312M0.5 488.5C316.5 592 526 781.5 736 717.5C946 653.5 1141.5 79.5 1427 7C1712.5 -65.5 1919.5 656.5 2163 687C2406.5 717.5 2641 18 2761.5 35" strokeWidth="5"/>
                    </svg>
                </div>
            </div>
            <div id='about-testimonial-contianer'>
                <h2>Still unconvinced? Hear from past students...</h2>
                <Testimonials testimonials={testimonials} />
            </div>
            <div id='sponsors'>
                <h2>Thanks to our amazing sponsors!</h2>
                <SponsorMarquee />
                They've been the backbone of our operation. We are very grateful to them!
            </div>
            <Footer/>
        </div>
    )
}