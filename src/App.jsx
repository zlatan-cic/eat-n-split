import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FromAddFriens from "./components/FromAddFriens";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);

  function handleShowAddFriends() {
    setShowAddFriends((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriends(false);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList friends={friends} />
          {showAddFriends && <FromAddFriens onAddfriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriends}>
            {showAddFriends ? "Close" : "Add Friend"}
          </Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
