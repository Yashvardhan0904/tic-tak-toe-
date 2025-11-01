import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
  const data = useRef(["", "", "", "", "", "", "", "", ""]); 
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) return;
    if (data.current[num] !== "") return; // prevent overwriting

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' />`;
      data.current[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' />`;
      data.current[num] = "o";
    }

    setCount(count + 1);
    checkWin();
  };

  const checkWin = () => {
    const d = data.current;
    if (d[0] === d[1] && d[1] === d[2] && d[2] !== "") won(d[0]);
    else if (d[3] === d[4] && d[4] === d[5] && d[5] !== "") won(d[3]);
    else if (d[6] === d[7] && d[7] === d[8] && d[8] !== "") won(d[6]);
    else if (d[0] === d[3] && d[3] === d[6] && d[6] !== "") won(d[0]);
    else if (d[1] === d[4] && d[4] === d[7] && d[7] !== "") won(d[1]);
    else if (d[2] === d[5] && d[5] === d[8] && d[8] !== "") won(d[2]);
    else if (d[0] === d[4] && d[4] === d[8] && d[8] !== "") won(d[0]);
    else if (d[2] === d[4] && d[4] === d[6] && d[6] !== "") won(d[2]);
  };

  const won = (winner) => {
    setLock(true);
    setTimeout(() => {
      alert(`🎉 ${winner.toUpperCase()} Wins!`);
    }, 100);
  };

  return (
    <div className='container'>
      <h1 className="title" > lock?winner={(count%2===0)?"x":"0"}:Tic Tac <span>Toe</span> </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
};

export default TicTacToe;
