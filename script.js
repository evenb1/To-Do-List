let addButton = document.querySelector('button');
let myDiv = document.querySelector('.todoContainer');

addButton.addEventListener('click', function(){
    let inputField = document.querySelector('input').value;
    let paragraph = document.createElement('p');
    let removeButton = document.createElement('button');
    removeButton.textContent = "remove";
    paragraph.textContent = `- ${inputField}`;
    paragraph.appendChild(removeButton); 
    myDiv.appendChild(paragraph);
})
removeButton.addEventListener('click' function(){

})