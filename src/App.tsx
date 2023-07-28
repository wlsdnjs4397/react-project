import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '제육볶음';

  return (
    <div className="App">
        <div className="black-nav">
          <div style={{color: "greenyellow", fontSize : "25px"}}>React Blog</div>
        </div>
        <div className="list">
            <h4>{posts}</h4>
            <p>작성자 : 홍길동</p>
            <hr/>
        </div>
    </div>
  );
}

export default App;
