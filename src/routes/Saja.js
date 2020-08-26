import React, {Component} from 'react';

class Saja extends Component {
    state = {
        time: 3,
        timer: null,
        isHide: true,
        idx: 0,
        randomOrder: [0],
        list: [
            "개과천선",
            "견물생심",
            "결초보은",
            "경거망동",
            "경국지색",
            "고진감래",
            "과대망상",
            "과유불급",
            "구사일생",
            "권모술수",
            "권선징악",
            "금의환향",
            "금지옥엽",
            "노심초사",
            "다다익선",
            "대기만성",
            "동고동락",
            "동문서답",
            "동병상련",
            "동분서주",
            "두문불출",
            "무릉도원",
            "문전성시",
            "미풍양속",
            "배은망덕",
            "백년대계",
            "백년해로",
            "백전백승",
            "불철주야",
            "사면초가",
            "산전수전",
            "산해진미",
            "살신성인",
            "새옹지마",
            "선견지명",
            "선남선녀",
            "설상가상",
            "안하무인",
            "약육강식",
            "어부지리",
            "오리무중",
            "오매불망",
            "요지부동",
            "우왕좌왕",
            "유명무실",
            "유유상종",
            "이실직고",
            "이심전심",
            "이열치열",
            "인지상정",
            "일거양득",
            "일사천리",
            "일편단심",
            "일확천금",
            "자포자기",
            "자화자찬",
            "작심삼일",
            "적반하장",
            "전무후무",
            "전화위복",
            "조강지처",
            "주객전도",
            "주경야독",
            "죽마고우",
            "중구난방",
            "진퇴양난",
            "천고마비",
            "천방지축",
            "청천벽력",
            "청출어람",
            "초지일관",
            "칠전팔기",
            "타산지석",
            "탁상공론",
            "탐관오리",
            "토사구팽",
            "표리부동",
            "풍전등화",
            "학수고대",
            "허심탄회",
            "호시탐탐",
            "환골탈태",
            "횡설수설",
        ],
    };

    showHalf = (str) => {
        return str.slice(0, 2) + "□□";
    }

    reduceTime = () => {
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

    render() {
        const current = this.state.list[this.state.randomOrder[this.state.idx]];

        return(
            <div className = 'saja_container'>
                <div className = 'Proverb_title'>
                    <h1>사자성어 이어 말하기</h1>
                </div>
                <p className = 'Proverb_main'>{this.state.time !== 0 ? this.showHalf(current) : current}</p>
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

export default Saja;