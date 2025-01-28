
import { useState } from 'react';
import './App.css'

function App() {
  
  let post = '역삼 우동 맛집';
  let [글제목, b] = useState('여자 코트 추천');
  let [간식, c] = useState('겨울 간식 추천');
  let [노래, d] = useState('노래 플레이리스트 추천'); //자주 바뀔거 같은 html은 state로 만들어주는게 좋다.
  let [따봉, 따봉변경] = useState(0); //좋아요 useState

  return (
    <div className="App">
      <div className="black-nav">
        <h4>LES_Blog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목 } <span onClick={ () => { 따봉변경(따봉+1) }}>👍</span>{ 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 간식 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 노래 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App
