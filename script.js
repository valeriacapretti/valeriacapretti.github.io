function goToDetail(categoryName) {
    // Inserisce il testo
    const bookTitle = document.getElementById('title-on-book');
    bookTitle.innerText = categoryName;

    // Scorrimento: l'immagine sale rivelando il libro
    document.getElementById('scroll-container').style.transform = 'translateY(-100vh)';
}

function goBackHome() {
    document.getElementById('scroll-container').style.transform = 'translateY(0)';
}
