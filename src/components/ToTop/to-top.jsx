function handleToTop(event) {
    event.preventDefault();

    window.scrollTo(0,0);
}

export function ToTop() {
    return <a className='to-top' onClick={(event) => handleToTop(event)}><i className="fa-solid fa-arrow-up"></i></a>
}