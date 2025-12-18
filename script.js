function openSection(categoryTitle) {
    // Cambia il testo sul libro
    const titleElement = document.getElementById('dynamic-title');
    titleElement.innerText = categoryTitle;

    // Fa scorrere il wrapper per mostrare la sezione dettaglio
    document.body.classList.add('is-viewing-detail');
}

function closeSection() {
    // Torna alla schermata principale
    document.body.classList.remove('is-viewing-detail');
}
