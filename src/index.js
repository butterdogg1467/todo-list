import '../styles/styles.css';
import createTask from './createtask';
import createProject from './createproject';

let projects = document.querySelector('.projects')
let addTaskDefault = document.querySelector('.defaultaddtaskbutton')
let defaultProjectsTitle = document.querySelector('#defaultprojectstitle')
let createProjectBtn = document.querySelector('.addprojectbutton')
let tasks = document.querySelector('.defaulttasks')

defaultProjectsTitle.addEventListener('change', function() {
    addTaskDefault.textContent = 'Add Task to ' + defaultProjectsTitle.value
})

createProjectBtn.addEventListener('click', createProject)

addTaskDefault.addEventListener('click', createTask)


export { projects, tasks }

