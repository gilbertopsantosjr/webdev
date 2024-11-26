
document.addEventListener('DOMContentLoaded', function(){
    const form1 = document.querySelector('form')
    form1.addEventListener('submit', (event) => {
        event.preventDefault()
    })
})


function checkFormValid(){
    const form1 = document.querySelector('form')

    let input = form1.getElementsByTagName('input');
    for(let i=0; i< input.length; i++){
        if(!input[i].value){
           input[i].className = 'error';
        } 
    }

    let label = document.createElement(`div`)
    label.innerText = 'Please fill the form';
    console.log(label.nodeValue)
    form1.appendChild(label);
}