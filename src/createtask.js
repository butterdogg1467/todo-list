import { defaultProjects } from "."

let taskCount;
taskCount = 0


export default function createTask() {
    taskCount++
    if (taskCount < 63) {
        let taskBackground = document.createElement('div')
        taskBackground.classList.add('taskbackground')
        defaultProjects.appendChild(taskBackground)

        let taskTitle = document.createElement('input')
        taskTitle.placeholder = 'Task Name'
        taskTitle.classList.add('tasktitle')
        taskBackground.appendChild(taskTitle)

        let taskDate = document.createElement('input')
        taskDate.type = 'date'
        taskDate.classList.add('taskdate')
        taskBackground.appendChild(taskDate)

        let taskNote = document.createElement('textarea')
        taskNote.placeholder = 'Notes'
        taskNote.rows = 10
        taskNote.classList.add('tasknote')
        taskBackground.appendChild(taskNote)

        let markAsDoneButton = document.createElement('button')
        markAsDoneButton.classList.add('markasdonebutton')
        markAsDoneButton.style.backgroundColor = 'rgb(190, 37, 37)'
        markAsDoneButton.style.color = 'white'
        markAsDoneButton.textContent = 'Not Done'
        taskBackground.appendChild(markAsDoneButton)

        function markAsDone() {
            if (markAsDoneButton.textContent === 'Not Done') {
                markAsDoneButton.textContent = 'Done'
                markAsDoneButton.style.backgroundColor = 'green'
                markAsDoneButton.style.color = 'white'
            } else if (markAsDoneButton.textContent === 'Done') {
                markAsDoneButton.textContent = 'Not Done'
                markAsDoneButton.style.backgroundColor = 'rgb(190, 37, 37)'
                markAsDoneButton.style.color = 'white'
            }
        }

        markAsDoneButton.addEventListener('click', markAsDone)

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deletebutton')
        deleteButton.textContent = 'Delete'
        taskBackground.appendChild(deleteButton)

        function deleteTask() {
            defaultProjects.removeChild(taskBackground)
        }

        deleteButton.addEventListener('click', deleteTask)
        
        return taskBackground 

    } else if (taskCount >= 63) {
        return
    }

}

export { taskCount }