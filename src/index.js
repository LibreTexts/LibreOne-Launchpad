import "./index.css";

init();
function init() {
    const element = document.getElementById('widget');
    if(!element) return;

    element.addEventListener('click', () => goToLibreOneLaunchpad());
}

function goToLibreOneLaunchpad() {
    window.open("https://one.libretexts.org/home", "_blank");
}

export { goToLibreOneLaunchpad };