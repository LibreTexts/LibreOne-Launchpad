import "./index.css";

createLaunchpadWidget();
function createLaunchpadWidget() {
    console.log('running')
    const element = document.getElementById('widget-parent');

    if(!element) {
        console.error('LibreOne Launchpad Widget: Parent element not found. Please add a div with id="widget-parent" to your page.');
        return;
    }

    const widget = document.createElement('button');
    const widgetImg = document.createElement('img');

    // Create icon image
    widgetImg.src = 'https://cdn.libretexts.net/Icons/launchpad-rocket-icon.svg'
    widgetImg.alt = 'LibreOne Launchpad';
    widgetImg.className = 'app-switcher-icon';

    // Create widget
    widget.id = 'widget';
    widget.role = 'link';
    widget.className = 'app-switcher';
    widget.appendChild(widgetImg)
    widget.addEventListener('click', () => goToLibreOneLaunchpad());

    // Add widget to page
    element.appendChild(widget);
}

function goToLibreOneLaunchpad() {
    window.open("https://one.libretexts.org/home", "_blank");
}