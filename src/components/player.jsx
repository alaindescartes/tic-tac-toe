import { useState } from "react";

export default function Player({ name, symbol, isActive, changeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  // Toggle the editing state
  function handleClick() {
    if (isEditing) {
      // Save the new name when moving from editing to viewing
      changeName(symbol, editedName);
    }
    setIsEditing(!isEditing);
  }

  // Handle input changes by updating local state
  function handleChange(event) {
    setEditedName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            type="text"
            required
            value={editedName}
            onChange={handleChange}
            autoFocus
          />
        ) : (
          <span className="player-name">{editedName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
