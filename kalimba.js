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
        tab.addEventListener('mousedown', (event) => {
            playNote(event.target.dataset.value);
            // Add button-clicked style set:
            event.target.classList.add("pressed");
            setTimeout(()=>{event.target.classList.remove("pressed")},50);
        });
        // tab.addEventListener('mouseup', (event) => {
        //     // Undo button-click styles:
        // });
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
            playNote(8);
            document.querySelector(".t1").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t1").classList.remove("pressed")},50);
            break;
        case "d":
        case "2":
            playNote(6);
            document.querySelector(".t2").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t2").classList.remove("pressed")},50);
            break;
        case "f":
        case "3":
            playNote(4);
            document.querySelector(".t3").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t3").classList.remove("pressed")},50);
            break;
        case "g":
        case "4":
            playNote(2);
            document.querySelector(".t4").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t4").classList.remove("pressed")},50);
            break;
        case "h":
        case "5":
            playNote(1);
            document.querySelector(".t5").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t5").classList.remove("pressed")},50);
            break;
        case "j":
        case "6":
            playNote(3);
            document.querySelector(".t6").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t6").classList.remove("pressed")},50);
            break;
        case "k":
        case "7":
            playNote(5);
            document.querySelector(".t7").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t7").classList.remove("pressed")},50);
            break;
        case "l":
        case "8":
            playNote(7);
            document.querySelector(".t8").classList.add("pressed");
            setTimeout(()=>{document.querySelector(".t8").classList.remove("pressed")},50);
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