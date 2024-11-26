// recommended way to add event listener
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    // if I really found the body in my document
    if(app){
        createGoogleSearch('html')
        createGoogleSearch('javascript')
        createGoogleSearch('css')
        createGoogleSearch('astro')
        createGoogleSearch('boostrap')
    }
})

function createGoogleSearch(param) {
    const li = document.createElement('li');
    li.innerHTML = `<a target='_blank' href='http://www.google.com/search?q=${param}'>${param}</a>`;
    app.appendChild(li);
}
