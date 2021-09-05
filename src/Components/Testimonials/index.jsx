import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
import quote from './assets/quote.svg'
import david from './assets/david.jpg'

// https://www.primeit.pt/public/uploads/2015/06/David_Developer.jpg

function index() {
    return (
        <Container>
            <div className="testimonial">
                <div className="testimonialTitle">
                    <img src={quote} alt="Quote" />
                    <p>O espírito e missão que nos envolvem hoje, é o que nos motiva a ser mais e melhores amanhã. Nós somos a PrimeIT e a PrimeIT somos nós.</p>
                </div>
                <div className="person">
                    <img src={david} alt="david" />
                    <div>
                        <p>DAVID</p>
                        <p><span>FRONT END DEVELOPER</span></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default index
