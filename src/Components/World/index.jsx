import React from 'react';
import TextLoop from 'react-text-loop';
import { Carousel } from 'react-bootstrap';

import basel from './assets/basel.webp'
import bordeaux from './assets/bordeaux.webp'
import genebra from './assets/genebra.webp'
import katowice from './assets/katowice.webp'
import lille from './assets/lille.webp'
import lisbon from './assets/lisbon.webp'
import lyon from './assets/lyon.webp'
import london from './assets/london.webp'
import madrid from './assets/madrid.webp'
import nantes from './assets/nantes.webp'
import paris from './assets/paris.webp'
import porto from './assets/porto.webp'
import provence from './assets/provence.webp'

import './style.css'

function index() {
    return (
        <div className="city">
            <div className="textBox">

                <h3 className="textCity">
                    Nós estamos em
                    {" "}
                    <br />
                    <TextLoop interval={5650}>
                        <span>BASEL</span>
                        <span>BORDEAUX</span>
                        <span>GENÈVE</span>
                        <span>KATOWISE</span>
                        <span>LILLE</span>
                        <span>LISBOA</span>
                        <span>LONDON</span>
                        <span>LYON</span>
                        <span>MADRID</span>
                        <span>NANTES</span>
                        <span>PARIS</span>
                        <span>PORTO</span>
                        <span>AIX-EN-PROVENCE</span>
                    </TextLoop>{" "}
                </h3>
            </div>
            <div className="images">
                <Carousel fade>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={basel}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={bordeaux}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={genebra}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block footerSlide"
                        src={katowice}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={lille}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={lisbon}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={london}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={lyon}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={madrid}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={nantes}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={paris}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={porto}
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block footerSlide"
                        src={provence}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default index
