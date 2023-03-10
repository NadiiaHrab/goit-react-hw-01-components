import css from "./FriendListItem.module.css";
import PropTypes from 'prop-types';


function FriendListItem({avatar, name, isOnline}) {
    return (
<li className={css.item}>
                    <span className={isOnline ? css.online: css.ofline}>{isOnline}</span>
                    
                    <img className={css.avatar} src={avatar} alt={name} width="48" />
                    <p className={css.name}>{name}</p>
           </li>  
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;