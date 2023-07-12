const taskLIst = document.querySelector('#task-list')
const taskForm = document.querySelector('#task-form')
const taskBtn= document.querySelector('#task-btn')


let task = []

function renderTask(){

    taskLIst.innerHTML = ''

    task.forEach((task , index) => {
        const taskItem = document.createElement('div')
        taskItem.classList.add('flex' , 'items-center' , 'jusrify-between', 'mb-4' , 'bg-gray-300' , 'rounded')

    const taskText = document.createElement('span')
    taskText.textContent = task


    const deleteButton = document.createElement('button')
    deleteButton.classList.add('text-red-600')
    deleteButton.innerHTML = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M5.99999 6L5.99999 4C5.99999 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 7.99999 2L15.999 2C16.5294 2 17.0381 2.21071 17.4132 2.58579C17.7883 2.96086 17.999 3.46957 17.999 4L17.999 6M9.99999 6L9.99999 18C9.99999 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 11.999 20L13.999 20C14.5294 20 15.0381 19.7893 15.4132 19.4142C15.7883 19.0391 15.999 18.5304 15.999 18L15.999 6M7.99999 6L7.99999 18M11.999 6L11.999 18" /></svg>
    deleteButton.addEventListener('click', () => { deleteTask(index) 
    })



    taskItem.appendChild(taskItem)
    taskItem.appendChild(deleteButton)
    

    taskLIst.appendChild(taskItem)

    })
}


function addTask(e){

    e.preventDefault()


    newTask = taskInput.value.trim()


    if(newTask == ''){
        task.push(newTask)
        taskInput.value = ''
        renderTask()
    }

    function deletTask(index){
        task.splice(index , 1)
        renderTask()
    }

    taskForm.addEventListener('submit' , addTask)

    renderTask()

}

