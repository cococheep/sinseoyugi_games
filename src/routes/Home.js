import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css";

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1 className = "title">신서유기 게임</h1>
                <div>
                    <Link to = '/Chosung'>초성 게임</Link>
                </div>
                <div>
                    <Link to = '/Proverb'>속담 이어 말하기</Link>
                </div>
            </div>
        );
    }
}

export default Home;