import css from "./FriendList.module.css";
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className={css.status}>{friend.isOnline ? "🟢": "🔴"}</span>
                    
                    <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                    <p className={css.name}>{friend.name}</p>
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