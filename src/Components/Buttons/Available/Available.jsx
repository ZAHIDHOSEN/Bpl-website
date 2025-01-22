import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Player from '../../Player/Player';

const Available = ({choosePlayer}) => {
    const [players, setPlayers] = useState([])

    useEffect(() =>{
        fetch('players.json')
        .then(res =>res.json())
        .then(data =>{
            setPlayers(data.players)
        })
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold'>Available players</h1>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 lg:px-6 py-3 items-center justify-center">
         {
            players.map((player)=> 
            <Player
            key={player.playerId} 
            player={player}
            choosePlayer={choosePlayer}
            ></Player>)
         }
      </div>
        </div>
    );
};

export default Available;