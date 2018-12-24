// a key map of allowed keys
let allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
}

// just a little easter egg involving the Konami Code
let konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"]
let konamiCodePosition = 0

document.addEventListener("keydown", function(e) {
    let key = allowedKeys[e.keyCode]
    let requiredKey = konamiCode[konamiCodePosition]
    if (key == requiredKey) {
        konamiCodePosition++
        if (konamiCodePosition == konamiCode.length) {
            activateCheats()
            konamiCodePosition = 0
        }
    } else {
        konamiCodePosition = 0
    }
})

function activateCheats() {
    let url = "https://www.youtube.com/watch?v=q6EoRBvdVPQ"
    window.open(url, "_blank")
}