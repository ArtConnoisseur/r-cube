import './module-link.css';

export function ModuleLink({ moduleName, chaptersComplete, percentComplete,to }) {
    return (
        <div className='module-container' onClick={() => window.location = to}>
            <i className="fa-solid fa-bars"></i>
            <h5>{moduleName}</h5>
            <span >{chaptersComplete} chapters completed</span>
            <span className='completion'>Completed: {percentComplete}%</span>
        </div>
    )
}