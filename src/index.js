import '../styles/styles.css';
import createTask,{ taskCount } from './createtask';

let defaultProjects = document.querySelector('.projects')
let addTaskDefault = document.querySelector('.addprojectbutton')

addTaskDefault.addEventListener('click', createTask)

export { defaultProjects }

