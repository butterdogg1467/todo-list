import { defaultProjects } from "."

export default function createTask() {
    let taskBackground = document.createElement('div')
    taskBackground.classList.add('taskbackground')
    defaultProjects.appendChild(taskBackground)
}