import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
function index() {
    return (
        <div id="section">
            <Container>
                <div className="squareGroup">
                    <div className="col1">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="col2">
                        <div>
                            <div>
                                <h4>14 anos.</h4>
                                <h4>Obrigado!</h4>
                            </div>
                            <div className="minifooter">
                                <div className="line"/>
                                <p>Faz a tua equipa</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                O pilar da PrimeIT são pessoas que nela trabalham e o valor que criamos para os nossos clientes. Mais de 14 anos de experiência permitem-nos oferecer as melhores soluções, através de uma equipa de 1900 Primers que nos representam diariamente.
                            </p>
                        </div>
                    </div>
                    <div className="col3">
                        <div className="call">
                            <h4>Criamos uma poderosa equipa para o seu projecto</h4>
                            <div className="minifooter">
                                <div className="line"/>
                                <p>Faz a tua equipa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default index
