import Container from "./Container/Container";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json";
import friends from "../data/friendList.json";
import data from "../data/data.json";
import user from '../data/user.json';



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
    
      <TransactionHistory items={transactions} />
      
  </Container>
  );
};
