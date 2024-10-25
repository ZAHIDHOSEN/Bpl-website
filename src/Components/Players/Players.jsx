import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    
    return (
        <div >
            <div className="flex justify-between w-10/12 mx-auto mt-5">
                <h3>Available Players</h3>
                <div>
                    <button className=" border rounded-xl border-black mr-2">Available</button>
                    <button className=" border rounded-xl border-black">selected</button>
                </div>

            

            </div>
            <div className="w-10/12 grid grid-cols-3 mx-auto">
            
            {
               players.map(player => <Player key={Player.id} player={player} ></Player>)
            }

            </div>

        </div>
    );
};

export default Players;