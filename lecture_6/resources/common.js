function menuComponent() {
    return `<nav class='menu'>
    <a href="../index.html">Home</a>
    <a href="./about">About</a>
    <a href="./news_and_events">News and Events</a>
    <a href="./services/">Service</a>
    </nav>`;
}

function footerComponent() {
    return `<footer>
    <p>&copy; 2020</p>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('common.js loaded');
    document.getElementById('menu').innerHTML = menuComponent();
    document.getElementById('footer').innerHTML = footerComponent();
})