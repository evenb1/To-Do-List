let addButton = document.querySelector('button');
let myDiv = document.getElementsByClassName('todoContainer');

addButton.addEventListener('click', function(){
    let inputField = document.querySelector('input').value;
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `- ${inputField}`;
    document.querySelector('p').appendChild;
})