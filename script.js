function openSection(title) {
    document.getElementById('dynamic-title').innerText = title;
    document.body.classList.add('is-viewing-detail');
}

function closeSection() {
    document.body.classList.remove('is-viewing-detail');
}
