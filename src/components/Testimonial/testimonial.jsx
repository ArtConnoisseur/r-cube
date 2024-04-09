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
        <div className='testimonials'>
            {testElements}
        </div>
    )
}