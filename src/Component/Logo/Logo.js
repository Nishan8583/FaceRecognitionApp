import React from 'react';
import Tilt from 'react-tilt';
import Snake from './snake.png';

const Logo = () => {
    return (
        <div>
             <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"> <img alt="no " src = {Snake}></img> </div>
            </Tilt>
        </div>
    );
}

export default Logo;