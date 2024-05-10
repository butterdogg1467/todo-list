import '../styles/styles.css';
import createTask from './createtask';

let defaultProjects = document.querySelector('.projects')
let addTaskDefault = document.querySelector('.addtaskbutton')
let defaultProjectsTitle = document.querySelector('#defaultprojectstitle')


defaultProjectsTitle.addEventListener('change', function() {
    addTaskDefault.textContent = 'Add Task to ' + defaultProjectsTitle.value
})

addTaskDefault.addEventListener('mouseover', function() {
    addTaskDefault.textContent = '+'
})

addTaskDefault.addEventListener('mouseleave', function() {
    addTaskDefault.textContent = 'Add Task to ' + defaultProjectsTitle.value
})

addTaskDefault.addEventListener('click', createTask)

export { defaultProjects }

