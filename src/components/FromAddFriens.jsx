import React from "react";
import Button from "./Button";

function FromAddFriens() {
  return (
    <form className="form-add-friend">
      <label>👬 Friend name</label>
      <input type="text"/>

      <label>📸 Image URl</label>
      <input type="text"/>
      
      <Button>Add</Button>
    </form>
  );
}

export default FromAddFriens;
