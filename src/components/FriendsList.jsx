import React from "react";
import Friend from "./Friend";


function FriendsList({friends}) {
  // const friends = initialFriends;
  return(
    <>
      <ul>
        {friends.map((friend) => <Friend friend={friend} key={friend.id}/>)}
      </ul>
    </>

  );
}

export default FriendsList;
