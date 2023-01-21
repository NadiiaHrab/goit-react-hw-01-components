
import Container from "./Container/Container";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList";
import friends from "friendList.json";
import data from "data.json";
import user from 'user.json';
export const App = () => {
  return (
  <Container>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
  <Statistics title="Upload stats" stats={data} />
  <FriendList friends={friends} />
  </Container>
  );
};
