import React from "react";
import "./Unicode.css";

class Unicode extends React.Component{
    state = {
        isListLoaded: false,
        isRight: false,
        idx: 0,
        randomOrder : [0],
        movies: ["Loading"],
    };

    loadMovieList = (movieList) =>{
        this.setState({
            isListLoaded: true,
            movies: movieList
        });

        this.makeRandomNum();
    }

    makeRandomNum = () => {
        let order = [];
        const len = this.props.list.length;
        for(let i = 0; i < len; i++){
            order[i] = i;
        }

        for(let i = 0; i < len; i++){
            let randIndex = Math.floor(Math.random() * (len - i));
            [order[len - 1 - i], order[randIndex]] = [order[randIndex], order[len - 1 - i]];
        }

        this.setState({
            randomOrder: order
        });
    }

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
        const {isRight, idx, movies, randomOrder} = this.state;
        return isRight ? movies[randomOrder[idx]]: this.convertToChosung(movies[randomOrder[idx]]);
    }

    showAnswer = () => {
        this.setState({isRight: true});
    }

    showNext = () => {
        if(this.state.idx === this.state.movies.length - 1) alert("The End");
        else{
            this.setState({
                isRight: false,
                idx: this.state.idx + 1, 
            });
        }
    }

    componentDidMount() {
        if(!this.state.isListLoaded){
            const list = this.props.list;
            this.loadMovieList(list);    
        }
    }

    render (){
        return(
            <div>
                <h1 className = "unicode_title">초성게임: 영화</h1>
                <p className = "unicode_chosung">{this.showQusetion()}</p>
                <div className = "btn">
                    <button className = "answer_btn" onClick = {this.showAnswer}>Answer</button>
                    <button className = "next_btn" onClick = {this.showNext}>Next</button>
                </div>
            </div>
        ) 
    }
}

export default Unicode;