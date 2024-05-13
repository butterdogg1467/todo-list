import '../styles/styles.css';
import createTask from './createtask';
import createProject from './createproject';

let projects = document.querySelector('.projects')
let addTaskDefault = document.querySelector('.defaultaddtaskbutton')
let defaultProjectsTitle = document.querySelector('#defaultprojectstitle')
let createProjectBtn = document.querySelector('.addprojectbutton')
let defaultTasks = document.querySelector('.defaulttasks')


defaultProjectsTitle.addEventListener('change', function() {
    addTaskDefault.textContent = 'Add Task to ' + defaultProjectsTitle.value
})

addTaskDefault.addEventListener('mouseover', function() {
    addTaskDefault.textContent = '+'
})

addTaskDefault.addEventListener('mouseleave', function() {
    addTaskDefault.textContent = 'Add Task to ' + defaultProjectsTitle.value
})

createProjectBtn.addEventListener('click', createProject)

addTaskDefault.addEventListener('click', createTask)

export { projects, defaultTasks }

