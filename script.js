function openSection(categoryTitle) {
    // 1. Aggiorna il titolo sul libro
    const titleDisplay = document.getElementById('dynamic-title');
    titleDisplay.innerText = categoryTitle;

    // 2. Scorri la "telecamera" verso il basso
    document.body.classList.add('is-viewing-detail');
}

function closeSection() {
    // Torna alla home (fiori sciolti)
    document.body.classList.remove('is-viewing-detail');
}
