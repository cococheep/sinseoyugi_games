import React from 'react';
import Unicode from './comp/Unicode';

class MovieList extends React.Component {
    state = {
        list: [
            "명량",
            "극한직업",
            "신과함께-죄와 벌",
            "국제시장",
            "어벤져스: 엔드게임",
            "겨울왕국 2",
            "베테랑",
            "아바타",
            "도둑들",
            "7번방의 선물",
            "알라딘",
            "암살",
            "광해, 왕이 된 남자",
            "신과함께-인과 연",
            "택시운전사",
            "부산행",
            "변호인",
            "해운대",
            "어벤져스: 인피니티 워",
            "괴물",
            "왕의 남자",
            "어벤져스: 에이지 오브 울트론",
            "기생충",
            "인터스텔라",
            "겨울왕국",
            "보헤미안 랩소디",
            "검사외전",
            "엑시트",
            "설국열차",
            "관상",
            "아이언맨 3",
            "캡틴 아메리카: 시빌 워",
            "해적: 바다로 간 산적",
            "수상한 그녀",
            "백두산",
            "과속스캔들",
            "국가대표",
            "스파이더맨: 파 프롬 홈",
            "디워",
            "공조",
            "트랜스포머 3",
            "히말라야",
            "미션임파서블:고스트프로토콜",
            "밀정",
            "최종병기 활",
            "트랜스포머",
            "트랜스포머: 패자의 역습",
            "써니",
            "스파이더맨: 홈 커밍",
            "1987",
            "베를린",
            "마스터",
            "터널",
            "어벤져스",
            "내부자들",
            "인천상륙작전",
            "럭키",
            "은밀하게 위대하게",
            "범죄도시",
            "곡성",
            "화려한 휴가",
            "좋은 놈, 나쁜 놈, 이상한 놈",
            "늑대소년",
            "군함도",
            "미션 임파서블: 폴아웃",
            "웰컴 투 동막골",
            "다크 나이트 라이즈",
            "사도",
            "아저씨",
            "킹스맨 : 시크릿 에이전트",
            "미션 임파서블: 로그네이션",
            "미녀는 괴로워",
            "전우치",
            "연평해전",
            "인셉션",
            "레미제라블",
            "캡틴 마블",
            "타짜",
            "쥬라기 월드: 폴른 킹덤",
            "청년경찰",
            "숨바꼭질",
            "덕혜옹주",
            "더 테러 라이브",
            "쥬라기 월드",
            "감시자들",
            "앤트맨과 와스프",
            "닥터 스트레인지",
            "검은 사제들",
            "안시성",
            "의형제",
            "블랙 팬서",
            "2012",
            "더 킹",
            "완득이",
            "트랜스포머: 사라진 시대",
            "완벽한 타인",
            "조커",
            "월드 워 Z",
            "타워",
            "미녀와 야수",
            "미션 임파서블 3",
            "투사부일체",
            "쿵푸팬더 2",
            "독전",
            "추격자",
            "아쿠아맨",
            "공작",
            "인사이드 아웃",
            "킹스맨: 골든 서클",
            "바람과 함께 사라지다",
            "마션",
            "토르: 라그나로크",
            "어메이징 스파이더맨",
            "님아, 그 강을 건너지 마오",
            "봉오동 전투",
            "조선명탐정 : 각시투구꽃의 비밀",
            "군도: 민란의 시대",
            "남산의 부장들",
            "라이온 킹",
            "범죄와의 전쟁: 나쁜놈들 전성시대",
            "주토피아",
            "엣지 오브 투모로우",
            "신세계",
            "신비한 동물사전",
            "도가니",
            "쿵푸 팬더",
            "내 아내의 모든 것",
            "스파이더맨 3",
            "판도라",
            "맘마미아!",
            "나쁜 녀석들: 더 무비",
            "캐리비안의 해적: 세상의 끝에서",
            "가문의 위기(가문의 영광2)",
            "연가시",
            "터미네이터 : 미래전쟁의 시작",
            "강철비",
            "아이언맨 2",
            "해리포터와 죽음의 성물2",
            "엑스맨: 데이즈 오브 퓨처 패스트",
            "강철중: 공공의 적 1-1",
            "아이언맨",
            "아가씨",
            "박물관이 살아있다!",
            "다크 나이트",
            "말아톤",
            "어메이징 스파이더맨 2",
            "용의자",
            "건축학개론",
            "인디아나 존스 4 : 크리스탈 해골의 왕국",
            "미이라 3:황제의 무덤",
            "댄싱퀸",
            "다만 악에서 구하소서",
            "7급 공무원",
            "우리 생애 최고의 순간",
            "꾼",
            "타짜-신의 손",
            "혹성탈출: 반격의 서막",
            "쿵푸팬더3",
            "캡틴 아메리카: 윈터 솔져",
            "매드 맥스: 분노의 도로",
            "캐리비안의 해적 : 망자의 함",
            "박수건달",
            "베놈",
            "조선명탐정 : 사라진 놉의 딸",
            "역린",
            "남한산성",
            "반도",
            "암수살인",
            "데드풀 2",
            "국가부도의 날",
            "쌍화점",
            "라라랜드",
            "너의 이름은.",
            "신기전",
            "해리 포터와 불사조 기사단",
            "미이라",
            "82년생 김지영",
            "분노의 질주: 더 익스트림",
            "분노의 질주: 홉스&쇼",
            "인턴",
            "귀향",
            "리얼 스틸",
            "신의 한 수",
            "코코",
            "태풍",
            "킹콩",
            "비긴 어게인",
            "부러진 화살",
            "끝까지 간다",
            "어바웃 타임",
            "스파이",
            "해리포터와 불의 잔",
            "그것만이 내 세상",
            "토이 스토리 4",
            "돈",
            "맨 인 블랙 3",
            "악인전",
            "이끼",
            "한반도",
            "포화속으로"
        ]
    }

    render(){
        return(
            <div className = "chosungGame_container">
                <Unicode list = {this.state.list} />
            </div>
        )
    }
}

export default MovieList;