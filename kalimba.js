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

// HTML element connect:
const tabs = document.querySelectorAll(".tab");

// Assign event listeners on loading:
window.addEventListener("DOMContentLoaded", () => {
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => playNote(event.target));
    })
})

// Assign keypress events:
window.addEventListener("keydown", (event) => {
    // playNote + event.key, assign a connection, or use switch case ie: switch(event.key) { case "A": xxx break; }
})

// Note playing function:
function playNote(target) {
    let newNote = new Audio(notes[target.dataset.value]);
    newNote.play()
}