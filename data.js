let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let home = document.getElementById("home");
let beranimode = document.getElementById("beranimode");


const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

// Theme Dark
function darkMode() {
    if (darkRemainingLeft == 1) {
        info.textContent = "JATAH FITUR DARKMODE ANDA SUDAH HABIS !"
        mode.style.display = "none";
        beranimode.style.display = "none";
        home.textContent = "RESTART";
        return;
    }

    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;

    //render ke info element
    info.textContent = `Darkmode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}`
    body.classList.toggle("dark");
}
// Theme Berani
function beraniMode() {
    if (darkRemainingLeft == 1) {
        info.textContent = "JATAH FITUR MODEBERANI ANDA SUDAH HABIS !"
        mode.style.display = "none";
        beranimode.style.display = "none";
        home.textContent = "RESTART";
        return;
    }

    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;

    //render ke info element
    info.textContent = `Modeberani dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}`
    body.classList.toggle("berani");
}











function switchButton() {
    if (darkRemainingLeft == 4) {
        mode.textContent = "MODE-LIGHT";
    }

    else if (darkRemainingLeft == 2) {
        mode.textContent = "MODE-LIGHT";
    }

    else {
        mode.textContent = "MODE-DARK";
    }
    return

}

function reRender() {
    location.reload();
}