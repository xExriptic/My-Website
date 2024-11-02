
// Hier werden die Routen definiert
// name: Text, welcher im Men� angezeigt wird
// path: ./pages/ + der Name der Datei (relativer Pfad zur Datei)
const ROUTES = [
    { name: 'Willkommen', path: './pages/Willkommen.html'},
    { name: 'Über mich', path: './pages/Über mich.html'},
    { name: 'Nützliche Sachen', path: './pages/Nützliche Sachen.html'},
]

// Speichert den vordefinierten Titel (html title element im head)
const TITLE = document.title;

// Benutzte Elemente werden definiert
const menu = document.getElementById('navigation');
const content = document.getElementById('content');
const anchors = new Map();

// Entfernt das Highlighting von allen Buttons
function resetClickedClass() {
    for(const anchor of anchors.values()) {
        anchor.classList.remove('clicked');
    }
}

function setContent(routeIndex) {
    resetClickedClass();
    // Setzt das Highlighting auf den Link der ge�ffneten Seite
    anchors.get(ROUTES[routeIndex].path).classList.add('clicked');
    // Setzt den Titel des Browsertabs
    document.title = TITLE + ' - ' + ROUTES[routeIndex].name;
    // Ladet den Inhalt der ge�ffneten Seite
    content.src = ROUTES[routeIndex].path;
}

function setContentSize() {
    content.height = content.contentWindow.document.scrollingElement.scrollHeight;
}

function main() {
    content.onload = setContentSize;

    // Wird f�r jede Route ausgef�hrt
    for (const route of ROUTES) {
        // Erstellt einen Link
        const anchor = document.createElement('a');
        anchors.set(route.path, anchor);
        anchor.textContent = route.name;
        // Definiert, was passiert, wenn der Link gedr�ckt wird
        anchor.setAttribute('href', 'javascript:setContent(' + ROUTES.indexOf(route) + ')');
        // F�gt den Link zum Men� hinzu
        menu.appendChild(anchor);
    }
}

// F�hrt die Hauptfunktion aus
main();
setContent(0);
