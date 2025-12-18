function scrollToSection(title) {
    // Aggiorna il titolo sul libro
    document.getElementById('dynamic-title').innerText = title;
    
    // Scorrimento fluido verso il basso
    document.getElementById('main-container').style.transform = 'translateY(-100vh)';
}

function goHome() {
    // Torna su
    document.getElementById('main-container').style.transform = 'translateY(0)';
}
