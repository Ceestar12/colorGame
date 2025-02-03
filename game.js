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
            COLORS.forEach(color => {
                const button = document.createElement("button");
                button.className = "colorOption";
                button.style.backgroundColor = color;
                button.innerText = color;
                button.dataset.testid = "colorOption";
                button.onclick = () => handleGuess(color);
                colorOptionsContainer.appendChild(button);
            });
        }

        function handleGuess(color) {
            const gameStatus = document.getElementById("gameStatus");
            const buttons = document.querySelectorAll(".colorOption");
            buttons.forEach(btn => btn.classList.remove("selected"));
            if (color === targetColor) {
                gameStatus.innerText = "Correct!";
                gameStatus.className = "celebrate";
                score++;
                document.getElementById("score").innerText = `Score: ${score}`;
            } else {
                gameStatus.innerText = "Wrong, try again!";
                gameStatus.className = "fade-out";
            }
            event.target.classList.add("selected");
        }

        document.getElementById("newGameButton").addEventListener("click", startNewGame);
        
        startNewGame();