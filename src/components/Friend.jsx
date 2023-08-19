import React from "react";
import Button from "./Button";

function Friend({ friend, children }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You own {friend.name} {Math.abs(friend.balance)}€. 😑
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend {friend.name} owes you {Math.abs(friend.balance)}€. 🤑
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You and {friend.name} are even. 😛
        </p>
      )}

      {/* <button className="button">Select</button> */}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
