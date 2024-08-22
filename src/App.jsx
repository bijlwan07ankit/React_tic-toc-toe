import Player from "./Components/Player";
import {useState} from 'react';
import GameBoard from "./Components/GameBoard";
import Log from './Components/Log';
function App() {
const [gameTurns,setGameturns]=useState([]);
const [activePlayer,setActivePlayer]=useState('X');

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer)=> curActivePlayer==="X" ? "O" :"X");
    setGameturns(prevTurns=>{
      const updatedTurnes =[
        {square : {row:rowIndex , col: colIndex }, player: activePlayer },
        ...prevTurns]
    })};
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialName="player2" symbol="O" isActive={activePlayer==='O'}/>
          </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
