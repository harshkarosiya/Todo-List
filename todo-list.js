let todoList = [];
var div = document.getElementById("js-none");
render();
function render(){
let todoHtml ='';
for (i = 0; i < todoList.length; i++){
    let todo = todoList[i];
    let name = todo.name;
    let date = todo.date;
    let html = `<div>
        ${name} </div> <div>${date} </div>
        <button class="del" onclick="
        todoList.splice(${i}, 1);
        render();
        appear();
        "> Remove </button>
        
        
    `;
    todoHtml += html;                   
}
// console.log(todoHtml);
document.querySelector('.js-kaam').
innerHTML = todoHtml;

}

function addTodo (){
 let inputElement =  document.querySelector('.js-todo');
 let name = inputElement.value;
 let dateElement = document.querySelector('.duedate');
 let date = dateElement.value;
 todoList.push({
    name,
    date
});
// console.log(todoList);
 inputElement.value ='';
 render();
 var div = document.getElementById("js-none");
 
 if(todoList.length >= 1){
    div.style.display = "none";
    
}

}
function appear(){
 if (todoList.length  === 0){
     div.style.display = "block";
     
 }
 console.log(todoList.length);
}