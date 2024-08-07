import React from 'react'
import {useState} from 'react'
function Player({initialName,symbol}) {
   const [playerName , setPlayerName]= useState(initialName);
const [isEditting , setIsEditting]=useState(false);
function handleEditClick(){ 
    // setIsEditting(!isEditting);  //to toggle value normaly
    // setIsEditting(isEditting ? false : true);  //to toggle value it is too complex 
    setIsEditting((editing)=>!editing)
} 
  return (
    <li>
            <span className="player">
          {isEditting?(<input type="text" required defaultValue={name} />):(<span className="player-name">{name}</span>)}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditting?("Save"):("Edit")}</button>
          </li>
  )
}

export default Player
