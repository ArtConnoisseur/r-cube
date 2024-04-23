import { ModuleLink } from '../../components/ModuleLink/module-link';
import { Navbar } from '../../components/Navbar/navbar';
import { Footer } from '../../components/Footer/footer';


import './course-modules.css';

function CourseQuiz() {
    return (
        <div className='course-quiz-container'>
            <div className='quiz-info'>
                <h3>Ready to tackle the quiz?</h3>
                Take the course quiz and get certified if you score 
                aboove 50%!
                <br />
                Indefinite attempts allowed!
            </div>
            <button className='quiz-attempt-button' onClick={() => window.location='/quiz'}>Attempt Now!</button>
        </div>
    )
}

export function CourseModules() {
    const Modules = Array(); 

    for (let i = 0; i < 10; ++i) {
        Modules.push(
            <ModuleLink 
                moduleName={`Module ${i+1}`}
                chaptersComplete={5}
                percentComplete={33}
                to={`/module/${i+1}`}
                key={i}
            />
        )
    }
    return (
        <div className='course-modules-container'>
            <Navbar />
            <div className='course-modules-intro'>
                <h2>Course Page</h2>
                <p>
                    Welcome to the course page! This provides you and overview of the 
                    modules of this course you have completed and how much you have left. 
                </p>
                <p>
                    Please reach out if you have any questions about completions percentages.
                </p>
            </div>
            <div className='modules-container'>
                {Modules}
                <CourseQuiz />
            </div>
            <Footer />
        </div>
    )
}