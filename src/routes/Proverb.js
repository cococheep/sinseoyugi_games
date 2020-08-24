import React from 'react';
import './Proverb.css';

class Proverb extends React.Component {
    state = {
        time: 3,
        timer: null,
        isHide: true,
        idx: 0,
        randomOrder: [0],
        list: [
            "뛰는 놈 위에, 나는 놈 있다",
            "달면 삼키고, 쓰면 뱉는다",
            "가는 날이, 장날이다",
            "가는 말이 고와야, 오는 말이 곱다",
            "같은 값이면, 다홍치마 ",
            "개천에서, 용 난다",
            "고래 싸움에, 새우 등 터진다",
            "달면 삼키고, 쓰면 뱉는다",
            "닭 잡아 먹고, 오리발 내민다",
            "되로 주고, 말로 받는다",
            "똥 묻은 개가, 겨 묻은 개 나무란다",
            "믿는 도끼에, 발등 찍힌다",
            "바늘 도둑이, 소 도둑 된다",
            "백지장도, 맞들면 낫다",
            "보기 좋은 떡이, 먹기도 좋다",
            "사공이 많으면, 배가 산으로 올라간다",
            "서당 개 삼 년이면, 풍월을 읊는다",
            "세 살 버릇, 여든까지 간다",
            "소 잃고, 외양간 고친다",
            "어물전 망신은, 꼴뚜기가 시킨다",
            "열 길 물 속은 알아도, 한 길 사람 속은 모른다",
            "윗물이 맑아야, 아랫물도 맑다",
            "오르지 못할 나무는, 쳐다보지도 말아라",
            "자라 보고 놀란 가슴, 솥뚜껑 보고 놀란다",
            "될성부른 나무는, 떡잎부터 알아본다",
            "지렁이도 밟으면, 꿈틀한다",
            "하늘이 무너져도, 솟아날 구멍이 있다",
            "한 귀로 듣고, 한 귀로 흘린다",
            "호랑이도 제 말 하면 온다",
        ]
    };

    showHalf = (str) => {
        let i = 0;
        while(str[i] !== ','){
            i++;
        }
        return str.slice(0, i) + " __________";
    }

    showFull = (str) => {
        let i = 0;
        while(str[i] !== ','){
            i++;
        }
        return str.slice(0, i) + str.slice(i+1);
    }

    reduceTime =  () => {
        if(this.state.time === 0){
            this.setState({
                time: 3,
                idx: (this.state.idx + 1) % this.state.list.length,
            })
        }
        else{
            this.setState({
                time: this.state.time - 1
            });    
        }
    }

    stopTime = () => {
        this.setState({
            timer: clearInterval(this.state.timer)
        });
    }

    makeRandomOrder = (len) => {
        let order = [];
        for(let i = 0; i < len; i++){
            order[i] = i;
        }
    
        for(let i = 0; i < len; i++){
            let randIndex = Math.floor(Math.random() * (len - i));
            [order[len - 1 - i], order[randIndex]] = [order[randIndex], order[len - 1 - i]];
        }
    
        return order;
    }

    componentDidMount(){
        const order = this.makeRandomOrder(this.state.list.length);

        this.setState({
            timer: setInterval(this.reduceTime.bind(this), 1000),
            randomOrder: order,
        }) 
    }

    render () { 
        const currentProverb = this.state.list[this.state.randomOrder[this.state.idx]];

        return(
            <div className = 'Proverb_container'>
                <div className = 'Proverb_title'>
                    <h1>속담 이어 말하기</h1>
                </div>
                <p className = 'Proverb_main'>{this.state.time !== 0 ? this.showHalf(currentProverb) : this.showFull(currentProverb)}</p>
                <div className = 'Proverb_time'>
                    {this.state.time === 0 ? '다음!' : this.state.time}
                </div>
                <div className = 'Proverb_btn'>
                    <button className = 'Proverb_stopBtn' onClick = {this.stopTime}>Stop</button>
                </div>
            </div>
        );
    }
}

export default Proverb;