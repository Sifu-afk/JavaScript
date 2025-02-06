console.log('hello')



const addButton = document.querySelector('#inputButton')
const input = document.querySelector("#todoIput")
const priorityValue = document.querySelector('#priority')

const delLocalStorage = document.createElement('button')

delLocalStorage.addEventListener('click', ()=>{
    localStorage.clear()
    renderTable();
})


const todoTable = document.createElement('table')
const todoThead = document.createElement('thead')
const todoTr = document.createElement('tr')
const todoTh1 = document.createElement('th')
const todoTh2 = document.createElement('th')

// todoTh1.setAttribute('class', 'table')
// todoTh2.setAttribute('class', 'table')

todoTh1.innerText = 'Task';
todoTh2.innerText = 'priority';

todoTh1.style.border = 'solid 1px purple';
todoTh2.style.border = 'solid 1px purple';



todoTable.appendChild(todoThead)
todoThead.appendChild(todoTr)
todoTr.append(todoTh1, todoTh2)

addButton.addEventListener('click', () =>{
    renderTable()

    console.log(input.value)
    console.log(priorityValue.value)

    //this shi checks data in local storage then pushes it
    let task = JSON.parse(localStorage.getItem('List')) || [];
    task.push({ 
        task: input.value,
         priority: priorityValue.value});
    
    localStorage.setItem('List', JSON.stringify(task))


    
    
 
  
})  


function renderTable() {
    const taskList = JSON.parse(localStorage.getItem('List')) || [];
    const newBody = document.createElement('tbody');
    
    taskList.forEach((item) => {
      const row = newBody.insertRow();
      const cell1 = row.insertCell(0);
      cell1.innerText = item.task;
    
      const cell2 = row.insertCell(1);
      cell2.innerText = item.priority;
    
    });
    
    todoTable.appendChild(newBody);
}



window.onload = function () {
    renderTable();
  };





todoDiv.append(todoTable, delLocalStorage)


