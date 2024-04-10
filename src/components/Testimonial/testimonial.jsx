import './testimonial.css';

function Testimonial({ content, name, date }) {
    return (
        <div className="testimonial-container">
            <div className='content'>
                <span className='accent'><h2>"</h2></span>
                <div className="testimonial-content">
                    {content}
                </div>
                <br />
                <div className="person-info">
                    <strong>-{name}</strong>•    
                    {date}
                </div>
                <span className='accent'><h2>"</h2></span>
            </div>
        </div>
    )
}

export function Testimonials({ testimonials }) {
    const testElements = testimonials.map((element, index) => {
        return (
            <Testimonial name={element.name} content={element.content} date={element.date} key={`testimonial-${index}`}/>
        )
    })

    return (
        <div id="testimonials-container">
            <h2>Don't take our word for it,<br />hear from past students!</h2>
            <div className='testimonials'>
                {testElements}
            </div>
        </div>
    )
}