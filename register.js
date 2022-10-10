

let id = 0

document.getElementById('add').addEventListener('click', () => {

let table = document.getElementById('list');
let row = table.insertRow(1);


row.insertCell(0).innerHTML = document.getElementById('firstName').value;
row.insertCell(1).innerHTML = document.getElementById('lastName').value;
row.insertCell(2).innerHTML = document.getElementById('formUsername').value;
row.insertCell(3).innerHTML = document.getElementById('formEmail').value;
let actions = row.insertCell(4);
actions.appendChild(createDeleteButton(id));
document.getElementById('firstName').value = ""
document.getElementById('lastName').value = ""
document.getElementById('formUsername').value = ""
document.getElementById('formEmail').value = ""


});



function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className =  'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Unregister';
    
    btn.onclick = () => {
        document.getElementById("list").deleteRow(1);
    };
    return btn;
}