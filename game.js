const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];
        let targetColor = "";
        let score = 0;

        function startNewGame() {
            targetColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            document.getElementById("colorBox").style.backgroundColor = targetColor;
            document.getElementById("gameStatus").innerText = "";
            document.getElementById("gameStatus").className = "";
            renderColorOptions();
        }

        function renderColorOptions() {
            const colorOptionsContainer = document.getElementById("colorOptions");
            colorOptionsContainer.innerHTML = "";
        
            // Shuffle colors array
            const shuffledColors = [...COLORS].sort(() => Math.random() - 0.5);
        
            shuffledColors.forEach(color => {
                const button = document.createElement("button");
                button.className = "colorOption";
                button.style.backgroundColor = color;
                button.dataset.testid = "colorOption";
                button.onclick = () => handleGuess(color);
                colorOptionsContainer.appendChild(button);
            });
        }
        

        function handleGuess(color) {
            const gameStatus = document.getElementById("gameStatus");
            if (color === targetColor) {
                gameStatus.innerText = "Correct!";
                gameStatus.className = "celebrate";
                score++;
                document.getElementById("score").innerText = `Score: ${score}`;
        
                // Start a new game after a short delay (e.g., 1 second)
                setTimeout(startNewGame, 1000);
            } else {
                gameStatus.innerText = "Wrong, try again!";
                gameStatus.className = "fade-out";
            }
        }
        

        document.getElementById("newGameButton").addEventListener("click", startNewGame);
        
        startNewGame();