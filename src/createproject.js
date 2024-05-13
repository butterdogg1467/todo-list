import { projects } from "."
import createTask from "./createtask"

export default function createProject() {
    let projectName = document.createElement('input')
    projectName.placeholder = 'Click To Rename'
    projectName.classList.add('projectstitle')
    projects.appendChild(projectName)

    let taskCreateBtn = document.createElement('button')
    taskCreateBtn.classList.add('addtaskbutton')
    taskCreateBtn.textContent = 'Add Task To'
    projects.appendChild(taskCreateBtn)
    taskCreateBtn.addEventListener('click', createTask)

    let tasks = document.createElement('div')
    tasks.classList.add('tasks')
    projects.appendChild(tasks)
    
}