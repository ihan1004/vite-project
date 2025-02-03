/* eslint-disable */
import { useState } from 'react';
import './App.css'

function App() {
  
  let post = '역삼 우동 맛집';
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '겨울 간식 추천', '겨울 노래']);//자주 바뀔거 같은 html은 state로 만들어주는게 좋다.
  let [따봉, 따봉변경] = useState([0,0,0]); //좋아요 useState
  let [modal, setModal] = useState(false); // 페이지 로드 시 모달창이 닫혀있는 상태


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
          <h4 onClick={() => { setModal(!modal) }}>{ 글제목[i] }  
            <span onClick={ () => {
               let copy = [...따봉];
               copy[i] = copy[i] + 1;
               따봉변경(copy); 
               }}>👍</span>{ 따봉[i] }
          </h4>
          <p>2월 17일 발행</p>
        </div>
        )
      })
      }
     {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}
/*
* 컴포넌트 만드는 법
* 1. function() 만들고
* 2. return() 안에 html 담기
* 3. <함수명></함수명> 쓰기*/
function Modal(){
    return(
        <div className="modal">
            <h4>title</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}


export default App
