import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FromAddFriens from './components/FromAddFriens';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';


function App() {

  const [showAddFriends, setShowAddFriends] = useState(false)

  function handleShowAddFriends(){
    setShowAddFriends(show => !show)
  }

  return(
    <>
      <div className='app'>
        <div className='sidebar'>
        <FriendsList />
        {showAddFriends && <FromAddFriens/>}
        <Button onClick={handleShowAddFriends}>{showAddFriends ? "Close" : "Add Friend"}</Button>
        </div>
        <FormSplitBill/>
      </div>
    </>

  );
}

export default App;

