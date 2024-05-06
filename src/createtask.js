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
        taskTitle.classList.add('tasktitle')
        taskBackground.appendChild(taskTitle)

        let taskDate = document.createElement('input')
        taskDate.type = 'date'
        taskDate.classList.add('taskdate')
        taskBackground.appendChild(taskDate)

        let taskNote = document.createElement('input')
        taskNote.classList.add('tasknote')
        taskBackground.appendChild(taskNote)
    } else if (taskCount >= 63) {
        return
    }
    
}

export { taskCount }