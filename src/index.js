import '../styles/styles.css';
import createTask from './createtask';

let defaultProjects = document.querySelector('.projects')
let addTaskDefault = document.querySelector('.addprojectbutton')

addTaskDefault.addEventListener('click', createTask)

export { defaultProjects }

