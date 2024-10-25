import logo from '../../assets/assets/logo.png'
import banner from '../../assets/assets/bg-shadow.png' 
import bannerMain from '../../assets/assets/banner-main.png'
import coin from '../../assets/assets/coin.png'

const Header = () => {

    return (
        <div>
            <div className='  flex w-10/12 mx-auto justify-between items-center'>
           
            <img src={logo} alt="" />
            <nav className='flex gap-x-3'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
               <div className='flex'>
               <p> 0 Coins</p>
               <img src={coin} alt="" />
               </div>
          
                


            </nav>
            </div>

            <div className='w-10/12  mx-auto  bg-black rounded-lg '>
                
                <div className='w-full block  relative'>
                    <img src={banner} alt="" />
               
            
               
                
                   <div className='w-10/12 h-full top-16   absolute text-center gap-y-3 justify-center'>
                    <img className='mx-auto'  src={bannerMain} alt="" />
                    <h2 className='text-2xl font-bold text-white '>Assemble your ultimate Dream 11 cricket Team</h2>
                    <p className='text-xl text-gray-300'>Beyond Boundaries Beyond Limits</p>
                    <button  className='bg-yellow-200 text-black border rounded-sm'>Claim Free Creadit</button>

                    </div>
            
                 
                 </div>
                 </div>
               
            
   
        </div>
      
    );
};

export default Header;