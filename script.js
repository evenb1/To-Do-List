let addButton = document.querySelector('button');
let inputField = document.querySelector('input').value;
let myDiv = document.getElementsByClassName('todoContainer');

addButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `- ${inputField}`;
    document.querySelector('p').appendChild;
})