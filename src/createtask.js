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

        let editButton = document.createElement('button')
        editButton.classList.add('editbutton')
        editButton.textContent = 'Edit'
        taskBackground.appendChild(editButton)

        let saveButton = document.createElement('button')
        saveButton.classList.add('savebutton')
        saveButton.textContent = 'Save'
        taskBackground.appendChild(saveButton)
    } else if (taskCount >= 63) {
        return
    }
    
}

export { taskCount }