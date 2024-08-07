import Player from "./Components/Player";
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player1" symbol="X"/>
          <Player name="player2" symbol="O"/>
          </ol>
        GAMEBOARD
      </div>
      LOG 
    </main>
  )
}

export default App
