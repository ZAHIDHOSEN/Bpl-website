import React from 'react';
import Available from './Available/Available';
import Selected from './Selected/Selected';

const ToggolesBtn = ({ handaleToggoleBtn ,isActiveBtn ,choosePlayer ,choosePlayers ,handlePlayerBtnRemove}) => {
    return (
        <div className='container m-auto mt-5  px-3 lg:px-0  '>
        <div className='text-right mt-4 gap-4 sticky z-10 backdrop-blur-md top-16 bg-white/5 mb-5 '>
              <button onClick={()=>handaleToggoleBtn('available')} className={`${isActiveBtn.available?'btn bg-yellow-400':'btn btn-active '}`}>Available</button>
              <button onClick={()=>handaleToggoleBtn('about')} className={`${isActiveBtn.available?'btn btn-active':'btn bg-yellow-400 '}`} >Selected({choosePlayers.length})</button>
        </div>
        <div>
          {
            isActiveBtn.available?<Available choosePlayer={choosePlayer}
            ></Available>:<Selected 
            choosePlayers={choosePlayers}
            handlePlayerBtnRemove={handlePlayerBtnRemove}
            handaleToggoleBtn={handaleToggoleBtn}
  
            ></Selected>
          }
        </div>
      </div>
    );
};

export default ToggolesBtn;