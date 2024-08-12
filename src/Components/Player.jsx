import React from 'react'
import {useState} from 'react'

function Player({initialName,symbol,isActive}) {
   const [playerName , setPlayerName]= useState(initialName);
   const [isEditting , setIsEditting]=useState(false);

function handleEditClick(){ 
    // setIsEditting(!isEditting);  //to toggle value normaly
    // setIsEditting(isEditting ? false : true);  //to toggle value it is too complex 
    setIsEditting((editing)=>!editing);   //best practice when working with element is changing besed on previous value
}

function handleChange(event){
  setPlayerName(event.target.value);
}
    let editatblePlayerName= (<span className="player-name">{playerName}</span>);

    if(isEditting){
      editatblePlayerName = (<input type="text" required value={playerName} onChange={handleChange} />)
    }
  return (
    <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editatblePlayerName}
          {/* {isEditting?(<input type="text" required Value={name} />):(<span className="player-name">{name}</span>)} */}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditting?("Save"):("Edit")}</button>
          </li>
  )
}

export default Player
