import PropTypes from 'prop-types';

 



const Player = ({player}) => {
    const {cover, author, Rating, price, button } = player;
    
    return (
        <div className=''>
            <img className='rounded-xl' src={cover} alt="" />
            <p> Name:{author}</p>
               
            <p>Rating: {Rating}</p>
            <p>Price:{price}</p>
            <button className='border rounded-md bg-yellow-300 text-black '>{button}</button>

        </div>
    );
};

Player.propTypes = {
    player:PropTypes.object.isRequired
}
export default Player;