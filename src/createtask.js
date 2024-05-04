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
    } else if (taskCount >= 63) {
        return
    }
    
}

export { taskCount }