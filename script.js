function fetchHTML(url, callback) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(url);
        callback(data);
    });
}

fetchHTML('../../components/header/header.html', function(headerHTML) {
    document.getElementById('header').innerHTML = headerHTML;
});

fetchHTML('../../components/footer/footer.html', function(footerHTML) {
    document.getElementById('footer').innerHTML = footerHTML;
});