import {success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

success({
    text: "Гра розпочата! Натисніть правильну клавішу."
});
error({
    text: "Помилка! Натисніть правильну клавішу."
});

PNotify.success({ text: "Гра розпочата! Натисніть правильну клавішу." });
window.addEventListener("keypress", (event) => {
    event.preventDefault();
});


const keys = ['q', 'w', 'e', 'r', 't', 'y', 'a', 's', 'd', 'f'];
        let currentKeyIndex = 0;

        const keyElement = document.querySelector("#key");
        const newGameButton = document.querySelector(".newGame");

        

