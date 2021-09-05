import React,{useState} from 'react';
import './style.css';
import cover from './assets/cover.mp4';

function index() {
    const [mute, setMute] = useState(true);
    return (
        <div id="cover">
            <video id="coverVideo" autoPlay="true" loop muted={mute}>
                <source src={ cover } type="video/mp4" />
            </video>
            <div className="coverContent">
                <div className="coverEl">
                    <h3>Aways <em>one step</em> ahead.</h3>
                    <h3><em>Join us!</em></h3>
                    <i onClick={ () => {setMute(!mute)} } class={`las vol la-volume-${mute?'off':'up'}`}></i>
                    {/* <i class="las la-volume-up"></i> */}
                </div>
            </div>
        </div>
    )
}

export default index
