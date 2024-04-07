
const lamp = document.getElementById("lamp");
const lampSwitch = document.getElementById("lamp-switch");

lampSwitch.addEventListener("click", () => {//"Lorsque le bouton ou l'élément 'lampSwitch' est cliqué, exécute la fonction suivante..."//
    if (lamp.src.includes("off")) {
        lamp.src = "onnnnn.jpeg";
        lampSwitch.textContent = "Éteindre";
    } else {
        lamp.src = "offff.jpeg";
        lampSwitch.textContent = "Allumer";
    }
    playSound(lampSwitch.dataset.sound);
});

function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}


