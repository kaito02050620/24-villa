
function loadedPage() {
    const loadingID = document.getElementById('js_loading');
    loadingID.classList.add('hide');
    const content = document.querySelector('#global-container');
    content.style.opacity = 1;
}

if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', 'first');
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(loadedPage, 1500)
    });
    setTimeout(loadedPage, 5000);
} else {
    loadedPage();
}