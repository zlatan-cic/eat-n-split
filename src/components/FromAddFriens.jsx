import React, { useState } from "react";
import Button from "./Button";

function FromAddFriens({ onAddfriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);
    onAddfriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend " onSubmit={handleSubmit}>
      <label>👬 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📸 Image URl</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FromAddFriens;
