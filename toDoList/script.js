console.log('hello')



const addButton = document.querySelector('#inputButton')
const input = document.querySelector("#todoIput")
const priorityValue = document.querySelector('#priority')

const delLocalStorage = document.createElement('button')
delLocalStorage.innerText = 'DEBUG LS delete ALL storage button'


delLocalStorage.addEventListener('click', ()=>{
        localStorage.clear()
})



const todoTable = document.createElement('table')
const todoThead = document.createElement('thead')
const todoTr = document.createElement('tr')
const todoTh1 = document.createElement('th')
const todoTh2 = document.createElement('th')
const todoTh3 = document.createElement('th')
const todoTh4 = document.createElement('th')

todoTh1.innerText = 'Task';
todoTh2.innerText = 'priority';




todoTable.appendChild(todoThead)
todoThead.appendChild(todoTr)
todoTr.append(todoTh1, todoTh2, todoTh3, todoTh4)

addButton.addEventListener('click', () => {
    console.log(input.value);
    console.log(priorityValue.value);

    let task = JSON.parse(localStorage.getItem('List')) || [];
    
    const newTask = {
        task: input.value,
        priority: priorityValue.value
    };

    task.push(newTask);
    localStorage.setItem('List', JSON.stringify(task));

    addTaskToTable(newTask);
});


function addTaskToTable(item) {
    const row = todoTable.insertRow();
    const cell1 = row.insertCell(0);
    cell1.innerText = item.task;

    const cell2 = row.insertCell(1);
    cell2.innerText = item.priority;


//checks if check is check so it can show on page if check is check 
    const cell3 = row.insertCell(2);
    const checkButton = document.createElement('button');
    checkButton.innerText = 'Check';
    checkButton.classList.add('check-btn');

    if (item.checked) {
    row.classList.add('checkedOutText');
} else {
    row.classList.add('normal-text');
}

checkButton.addEventListener('click', () => {
    row.classList.toggle('checkedOutText');
    row.classList.toggle('normal-text');
    item.checked = !item.checked;

    let taskList = JSON.parse(localStorage.getItem('List')) || [];

    taskList = taskList.map(task =>
        task.task === item.task ? { ...task, checked: item.checked } : task
    );

    localStorage.setItem('List', JSON.stringify(taskList));
});



//this is a delete button and it deletes
    const cell4 = row.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', ()=>{
        row.remove()
        
        let taskList = JSON.parse(localStorage.getItem('List')) || [];
        taskList = taskList.filter(task => task.task !== item.task)
        localStorage.setItem('List', JSON.stringify(taskList));
    })

    cell3.appendChild(checkButton);
    cell4.appendChild(deleteButton);
}


window.onload = function () {
    const taskList = JSON.parse(localStorage.getItem('List')) || [];
    taskList.forEach(addTaskToTable);
};

todoDiv.append(todoTable, delLocalStorage)


