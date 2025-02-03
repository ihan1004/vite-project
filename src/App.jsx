/* eslint-disable */
import { useState } from 'react';
import './App.css'

function App() {
  
  let post = '역삼 우동 맛집';
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '겨울 간식 추천', '겨울 노래']);//자주 바뀔거 같은 html은 state로 만들어주는게 좋다.
  let [따봉, 따봉변경] = useState([0,0,0]); //좋아요 useState
  let [modal, setModal] = useState(false); // 페이지 로드 시 모달창이 닫혀있는 상태
  let [modalTilte, setModalTitle] = useState(0); //모달창의 제목을 바꾸기 위한 state
  let [입력값, 입력값변경] = useState(''); //입력값을 받아오기 위한 state

  return (
    
    <div className="App">
      <div className="black-nav">
        <h4>LES_Blog</h4>
      </div>
      <button onClick={() => {
          let copy = [...글제목];
          copy.sort(function(a, b){
            return a.localeCompare(b);
          });
          글제목변경(copy);
        }}>가나다 제목 정렬</button>
      {/* <div className="list">
        <h4> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) }}>👍</span>{ 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
      글제목.map(function(a, i){
        return(
          <div className="list" key={i}>
          <h4 onClick={() => { 
            setModal(!modal); setModalTitle(i); }}>
              { 글제목[i] }  
            <span onClick={ (e) => { e.stopPropagation(); // 이벤트 버블링을 막아줌
               let copy = [...따봉]; // 따봉 배열을 복사
               copy[i] = copy[i] + 1; // 복사한 배열의 i번째 요소에 +1
               따봉변경(copy); // 상태 업데이트
               }}>👍</span>{ 따봉[i] }
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={() => {
            let copy = [...글제목];
            copy.splice(i, 1); //splice는 배열의 i번째 요소부터 1개를 삭제
            글제목변경(copy);
          }}>삭제</button>
        </div>
        )
      })
      }

      <input  onChange={(e) => {입력값변경(e.target.value); console.log(입력값)}}/>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값); //unshift는 배열의 맨 앞에 추가
        글제목변경(copy);
      }}>등록</button>

{/* 
      <button onClick={() => { setModalTitle(0)}}>글제목0</button>
      <button onClick={() => { setModalTitle(1)}}>글제목1</button>
      <button onClick={() => { setModalTitle(2)}}>글제목2</button> */}
     {
        modal == true ? <Modal modalTilte={modalTilte} 글제목={글제목}/> : null
      }
    </div>

  );
}
/*
* 컴포넌트 만드는 법
* 1. function() 만들고
* 2. return() 안에 html 담기
* 3. <함수명></함수명> 쓰기*/
function Modal(props){
    return(
        <div className="modal" style={{background: props.color}}>
            <h4>{props.글제목[props.modalTilte]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    )
}


export default App
