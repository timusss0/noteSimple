const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
      // array kosong
      let tasks = [];

      function renderTask() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('flex', 'items-center', 'justify-between', 'mb-4', 'p-4', 'bg-gray-200', 'rounded');

            const taskText = document.createElement('span');
            taskText.textContent = task;

           const deleteButton = document.createElement('button');
    deleteButton.classList.add('text-red-500');
    deleteButton.innerHTML = '<img src="svg/icons8-trash.svg" class="w-12">'
    deleteButton.addEventListener('click', () => {
        deleteTask(index);
      });


         taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
            
    taskList.appendChild(taskItem);
        });
        
      }

      function addTask(e) {
        e.preventDefault();

        const newTask = taskInput.value.trim();


        if (newTask !== '') {
          tasks.push(newTask);
          taskInput.value = '';
          renderTask();
        }
      }

        function deleteTask(index) {
          tasks.splice(index, 1);
          renderTask();
        }

        taskForm.addEventListener('submit', addTask);

        renderTask();

        
    
              