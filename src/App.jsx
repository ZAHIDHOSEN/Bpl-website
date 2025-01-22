
import './App.css'

import Header from './Components/Header/Header'
import Footer from './Components/footer/footer'
import { useState } from 'react'
import Banner from './Components/Banner/Banner'
import ToggolesBtn from './Components/Buttons/ToggolesBtn'
import { toast } from 'react-toastify'




function App() {

  const [coins, setCoins] = useState(0);

  const claimButton = ()=>{
    const newCoins = coins + 50000
    setCoins(newCoins)
    toast.success(`Claim free Coins `,{
      position:'top-center'
    })
    
  }

  const [choosePlayers , setChoosePlayers] = useState([])

  const choosePlayer =( player )=>{
    const playerChoose = choosePlayers.find(p=> p.playerId === player.playerId)
    if(coins > player.biddingPrice){
      if(playerChoose){
        toast.error(`You hav added ${player.name}`,{
          position:'top-center'
        })
      }
      else if(choosePlayers.length >=6){
        toast.error(`You cannot Add More Then Players`,{
          position:'top-center'
        })
      }
      else{
        const newPlayers = [...choosePlayers,player]
        setChoosePlayers(newPlayers)
        const coinsNewValue = coins - player.biddingPrice
        setCoins(coinsNewValue)
        toast.success(`Congrats!! ${player.name} is now in your squad`,{
          position:'top-center'
        })
      }
    }
    else{
      toast.error(`Not enough money to buy This Plyar!Claim Some Credit`,{
        position:'top-center'
      })
    }
  }


    // btn reamove
      const handlePlayerBtnRemove =(player) =>{
      const remainingPlayer = choosePlayers.filter((playerId)=> playerId.playerId !== player)
      setChoosePlayers(remainingPlayer)
    } 



    //  Toggoles button 
      const [isActiveBtn , setActiveBtn] = useState({
       available: true,
       status: 'available'
      })


      const handaleToggoleBtn = (status) =>{
        if(status == 'available'){
          setActiveBtn({
            available: true,
              status: 'available'
          })
        }
        else{
          setActiveBtn({
            available: false,
             status: 'selected'
         })
        }
       }


  



  return (
    <>
    <Header coins={coins}></Header>

    <Banner claimButton={claimButton}></Banner>

    <ToggolesBtn
    isActiveBtn={isActiveBtn}
    handaleToggoleBtn={handaleToggoleBtn}
    choosePlayers={choosePlayers}
    choosePlayer={choosePlayer}
    handlePlayerBtnRemove={handlePlayerBtnRemove}
    ></ToggolesBtn>
    

    
    <Footer></Footer>
    

    

     

    </>
  )
}

export default App
