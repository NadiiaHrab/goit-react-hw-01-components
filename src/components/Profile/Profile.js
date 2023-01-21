import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
    return (
    <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
      
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}@pmarica</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,

}

export default Profile;