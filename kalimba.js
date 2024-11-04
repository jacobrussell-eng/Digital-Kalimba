// Note reference:
const notes = {
    1: "wavs/1.wav",
    2: "wavs/2.wav",
    3: "wavs/3.wav",
    4: "wavs/4.wav",
    5: "wavs/5.wav",
    6: "wavs/6.wav",
    7: "wavs/7.wav",
    8: "wavs/8.wav"
}
let isKeyPressed = {};

// gif reference:
const gifs = {
    1: "gifs/daybreak.gif",
    2: "gifs/fungus.gif",
    3: "gifs/pier.gif",
    4: "gifs/rolling-tide.gif",
    5: "gifs/shoreline.gif",
    6: "gifs/sunset.gif",
    7: "gifs/woods.gif"
}

// HTML element connect:
const tabs = document.querySelectorAll(".tab");

// Assign event listeners on loading:
window.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundImage = "url(" + gifs[Math.floor(Math.random()*7+1)];
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => playNote(event.target.dataset.value));
    })
})

// Assign keypress events:
window.addEventListener("keydown", (event) => {
    // Check if key is currently being held down:
    if (isKeyPressed[event.key]) { return }
    isKeyPressed[event.key] = true;
    switch (event.key.toLowerCase()) {
        case "s":
        case "1":
            playNote(1);
            break;
        case "d":
        case "2":
            playNote(2);
            break;
        case "f":
        case "3":
            playNote(3);
            break;
        case "g":
        case "4":
            playNote(4);
            break;
        case "h":
        case "5":
            playNote(5);
            break;
        case "j":
        case "6":
            playNote(6);
            break;
        case "k":
        case "7":
            playNote(7);
            break;
        case "l":
        case "8":
            playNote(8);
            break;
    }
})

// Release key:
window.addEventListener('keyup', (event) => {
    isKeyPressed[event.key] = false;
})

// Note playing function:
function playNote(num) {
    let newNote = new Audio(notes[num]);
    newNote.play()
}