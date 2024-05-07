import '../styles/styles.css';
import createTask from './createtask';
// import saveTask from './save';
// import editTask from './edit';

let defaultProjects = document.querySelector('.projects')
let addTaskDefault = document.querySelector('.addprojectbutton')


// saveButton.addEventListener('click', saveTask)

// editButton.addEventListener('click', editTask)

addTaskDefault.addEventListener('click', createTask)

export { defaultProjects }

