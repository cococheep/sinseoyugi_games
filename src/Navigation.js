import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className = "navigation">
            <Link to = '/'>Home</Link>
            {/* <Link to ='/Chosung'>초성 게임</Link> */}
        </div>
    );
}

export default Navigation;