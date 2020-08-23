import React from "react";
import "./Unicode.css";

class Unicode extends React.Component{
    state = {
        isRight: false,
        movieNum: 0,
        movies: ["명량", "극한직업", "신과함께-죄와 벌", "국제시장", "어벤져스:엔드게임"],
    };

    convertToChosung = (str) => {
        const GA_KOR = 44032; // 0xAC00
        const HIH_KOR = 55203; // 0xD7A3
        const GIYEOK_KOR = 4352; //0x1100
        let result = "";

        for(let char of str){
            let unicode = char.charCodeAt(0);
            if(unicode < GA_KOR || unicode > HIH_KOR){
                result += char;
            }
            else{
                let chosung = parseInt((unicode - GA_KOR) / 588) + GIYEOK_KOR;
                result += String.fromCharCode(chosung);        
            }
        }

        return result;
    }

    showQusetion = () => {
        const {isRight, movieNum, movies} = this.state;
        return isRight ? movies[movieNum] : this.convertToChosung(movies[movieNum]);
    }

    showAnswer = () => {
        this.setState({isRight: true});
    }

    showNext = () => {
        if(this.state.movieNum === this.state.movies.length - 1) alert("The End");
        else{
            this.setState({movieNum: this.state.movieNum + 1, isRight: false});
        }
    }

    render (){
        return(
            <div>
                <p className = "display_text">{this.showQusetion()}</p>
                <div className = "btn">
                    <button className = "answer_btn" onClick = {this.showAnswer}>Answer</button>
                    <button className = "next_btn" onClick = {this.showNext}>Next</button>
                </div>
            </div>
        ) 
    }
}

export default Unicode;