import React from 'react';
import tel from './assets/tel.png';
import it from './assets/it.png';
import inf from './assets/inf.png';
import en from './assets/ener.png';


import './style.css';

function index() {
    return (
        <div id="section">
                <div className="squareGroup">
                    <div className="col1">
                        <div>
                            <h4>Sucesso</h4>
                            <p>A receita é simples:</p>
                            <p>Somos apaixonados por pessoas e por tecnologia.</p>
                            <p>Os nossos resultados são o reflexo disso.</p>
                        </div>
                        <div className="jobs">
                            <h4>React.js</h4>
                            <p> <i class="las la-map-marker"></i> Porto</p>
                            <p> <i class="las la-clock"></i> Full-time</p>
                        </div>
                    </div>
                    <div className="center">
                        <div className="squareTitle">
                            <div >
                                <h4>14 anos.</h4>
                                <h4>Obrigado!</h4>
                            </div>
                            <div className="minifooter">
                                <div className="line"/>
                                <p>Ver Oportunidades de Emprego (214)</p>
                            </div>
                        </div>
                        <div className="resume">
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
                <div id="Area">
                    <div className="featuresText">
                        <h3>As nossas áreas de actividade</h3>
                        <div className="line" />
                        <p>A experiência adquirida nas áreas de actividade onde actuamos, permite-nos fazer face a qualquer tipo de desafio. Conheça o que fazemos.</p>
                    </div>
                    <div className="icons">
                        <div>
                            <img src={tel} alt="Telecom" />
                            <p>
                                TELECOM
                            </p>
                        </div>
                        <div>
                            <img src={it} alt="IT" />
                            <p>
                                IT
                            </p>
                        </div>
                        <div>
                            <img src={en} alt="Energy" />
                            <p>ENERGIA</p>
                        </div>
                        <div>
                            <img className="infra" src={inf} alt="Infra" />
                            <p>
                                INFRAESTRUTURAS
                            </p>
                        </div>
                    </div>
                    </div>
            
        </div>
    )
}

export default index
