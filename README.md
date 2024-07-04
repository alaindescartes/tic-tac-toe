
# Tic-Tac-Toe Game Components

This README outlines the components used in the Tic-Tac-Toe game built with React. It includes details about `GameBoard`, `GameOver`, and `Player` components.

## Components

### GameBoard

**Props:**
- `currentPlayer`: Function that handles the player's move when a cell is clicked.
- `board`: Array representing the current state of the game board.

**Usage:**
```jsx
<GameBoard currentPlayer={handlePlayerMove} board={currentBoard} />
```

### GameOver

**Props:**
- `winner`: Symbol of the winning player if there is a winner.
- `onRestart`: Function to reset the game and start a new one.

**Usage:**
```jsx
<GameOver winner={winner} onRestart={restartGame} />
```

### Player

**Props:**
- `name`: Name of the player.
- `symbol`: Player's symbol (e.g., 'X' or 'O').
- `isActive`: Boolean indicating if it is this player's turn.
- `changeName`: Function to update the player's name.

**Usage:**
```jsx
<Player
  name={playerName}
  symbol={playerSymbol}
  isActive={isPlayerActive}
  changeName={handleNameChange}
/>
```

## Styling

Each component should have corresponding CSS classes defined in a `.css` file linked to your project. Below are suggested CSS snippets for each component:

```css
#game-board li, #game-over, .player {
  /* Basic styling properties */
}

.active {
  /* Styles for highlighting the active player */
}

.player-name, .player-symbol {
  /* Styling for displaying player details */
}
```

## Integration

Ensure that you manage the state appropriately in a parent component to coordinate interactions between these components. Properly handle states and effects to ensure functionality.

## Dependencies

- React setup in your project.
- Proper state management for functionality.

## Conclusion

These components provide a complete interface for a Tic-Tac-Toe game, including game logic, player interaction, and visual feedback. Customize and expand upon this basic structure to fit the specific needs of your project.
