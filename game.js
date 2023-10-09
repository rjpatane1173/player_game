const player = document.getElementById("player");

let playerX = 150; // Initial player position (X-coordinate) within the game container
let playerY = 150; // Initial player position (Y-coordinate) within the game container
const playerSpeed = 5; // Adjust the player's movement speed as needed

function updatePlayerPosition() {
    // Restrict player's position within the game container boundaries
    playerX = Math.max(0, Math.min(gameContainer.clientWidth - player.clientWidth, playerX));
    playerY = Math.max(0, Math.min(gameContainer.clientHeight - player.clientHeight, playerY));

    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}

function handleMove(direction) {
    switch (direction) {
        case "left":
            playerX -= playerSpeed;
            break;
        case "up":
            playerY -= playerSpeed;
            break;
        case "down":
            playerY += playerSpeed;
            break;
        case "right":
            playerX += playerSpeed;
            break;
    }
    updatePlayerPosition();
}

// Event listeners for movement buttons
document.getElementById("move-left").addEventListener("click", () => {
    handleMove("left");
});

document.getElementById("move-up").addEventListener("click", () => {
    handleMove("up");
});

document.getElementById("move-down").addEventListener("click", () => {
    handleMove("down");
});

document.getElementById("move-right").addEventListener("click", () => {
    handleMove("right");
});

updatePlayerPosition();
