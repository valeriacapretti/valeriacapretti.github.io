function transitionTo(category) {
    // 1. Inserisce il nome nel libro
    document.getElementById('book-title').innerText = category;

    // 2. Muove l'intero wrapper verso l'alto
    document.getElementById('scroll-wrapper').style.transform = 'translateY(-100vh)';
}

function resetView() {
    // Torna alla home
    document.getElementById('scroll-wrapper').style.transform = 'translateY(0)';
}
