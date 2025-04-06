import { success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const keys = ['q', 'w', 'e', 'r', 't', 'y', 'a', 's', 'd', 'f'];
let currentKeyIndex = 0;

const keyElement = document.querySelector("#key");
const newGameButton = document.querySelector(".newGame");

function updateKeyDisplay() {
    keyElement.textContent = keys[currentKeyIndex];
}

function startNewGame() {
    currentKeyIndex = 0;
    updateKeyDisplay();
    success({
        text: "Гра розпочата! Натисніть правильну клавішу."
    });
}

window.addEventListener("keydown", (event) => {
    const pressedKey = event.key.toLowerCase();
    const expectedKey = keys[currentKeyIndex];

    if (pressedKey === expectedKey) {
        currentKeyIndex++;

        if (currentKeyIndex < keys.length) {
            updateKeyDisplay();
            success({
                text: `Правильно! Натисніть "${keys[currentKeyIndex]}".`
            });
        } else {
            success({
                text: "Вітаємо! Ви завершили гру!"
            });
            keyElement.textContent = "-";
        }
    } else {
        error({
            text: `Помилка! Ви натиснули "${pressedKey}", а треба "${expectedKey}".`
        });
    }
});

window.addEventListener("keypress", (event) => {
    event.preventDefault();
});

newGameButton.addEventListener("click", startNewGame);

startNewGame();



