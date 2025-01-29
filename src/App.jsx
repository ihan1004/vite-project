
import { useState } from 'react';
import './App.css'

function App() {
  
  let post = '역삼 우동 맛집';
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '겨울 간식 추천', '겨울 노래']);//자주 바뀔거 같은 html은 state로 만들어주는게 좋다.
  let [따봉, 따봉변경] = useState(0); //좋아요 useState

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
      <div className="list">
        <h4> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) }}>👍</span>{ 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App
