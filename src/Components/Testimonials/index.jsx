import React from 'react';
import './style.css';
import quote from './assets/quote.svg'
import david from './assets/david.jpg'

// https://www.primeit.pt/public/uploads/2015/06/David_Developer.jpg

function index() {
    return (
        <div>
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
            <div className="team">
                <div className="teamgroup">
                    <ul class="list-team">
                        <li class="list-team-person tp01">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/team-34.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp02">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/ialves.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp03">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/team-16.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp04">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/team-3.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp05">
                        <img src="https://www.primeit.pt/public/uploads/2020/11/rnunes_2.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp06">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/tguedes.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp07">
                        <img src="https://www.primeit.pt/public/uploads/2020/11/vnavarro_2.jpg" alt=""/>
                        </li>
                        
                        <span className="hole">
                            <div className="text">
                                <div className="h">
                                    <h1>Fazemos a diferença.</h1>
                                    <h1>Todos os dias.</h1>
                                </div>
                                <div className="minif">
                                    <div className="line"/>
                                    <p>Os nossos valores</p>
                                </div>
                            </div>
                        </span>

                        <li class="list-team-person tp08">
                        <img src="https://www.primeit.pt/public/uploads/2020/11/mcaldeano_2.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp09">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/bferreira4.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp10">
                        <img src="https://www.primeit.pt/public/uploads/2020/11/bcoimbra_2.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp11">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/team-18.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp12">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/jcouto.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp13">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/team-23.jpg" alt=""/>
                        </li>

                        <li class="list-team-person tp14">
                        <img src="https://www.primeit.pt/public/uploads/2015/06/team-37.jpg" alt="" />
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="clients">
                <div className="clientsTitle">
                    <p>MAIS DE 150 CLIENTES ACTIVOS CONFIAM EM NÓS.</p>
                </div>
                <div className="clientsIcon">
                    <div className="pt" />
                    <div className="tap" />
                    <div className="nos" />
                </div>
            </div>
        </div>
    )
}

export default index
