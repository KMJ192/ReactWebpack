import React from 'react';
import './App.css';
import style from './tmp.module.scss';

function App() {
  return(
    <div className="app">
      <div className="test-container">
        <div className={style.tmp}>
          내용1
        </div>
        <div>
          내용2
        </div>
      </div>
    </div>
  );
}

export default App;