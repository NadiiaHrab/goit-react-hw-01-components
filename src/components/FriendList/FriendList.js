// import css from "./FriendList.module.css";
import PropTypes from 'prop-types';

function FriendList({friends}) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p class="name">{friend.name}</p>
           </li>  
         ))}  
</ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
     PropTypes.shape({
     id: PropTypes.number.isRequired,
     isOnline: PropTypes.bool.isRequired,
     avatar: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
    
    })
  
  )
}


export default FriendList;