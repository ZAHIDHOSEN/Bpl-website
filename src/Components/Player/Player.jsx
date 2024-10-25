import PropTypes from 'prop-types';



const Player = ({player}) => {
    const {cover, author} = player;
    
    return (
        <div>
            <img src={cover} alt="" />
            <p>{author}</p>
        </div>
    );
};

Player.propTypes = {
    player:PropTypes.object.isRequired
}
export default Player;