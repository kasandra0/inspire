import TodoService from "./todo-service.js";
import Todo from "../../models/todo.js";


var _todoService = new TodoService
let _display = false;

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	_todoService.getTodos(draw)
}

function draw(todos) {
	let template = `To Do List: (${todos.length})<ul>`
	todos.forEach(todo => {
		let checked = ''
		if (todo.completed) { checked = 'checked' }
		template += `
			<li>
			<input type="checkbox" name="status" id="${todo._id}" ${checked} onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
			${todo.description}
			<i class="far fa-times-circle" onclick="app.controllers.todoController.removeTodo('${todo._id}')"></i>
			</li>
			`
	})
	document.getElementById('todo-list').innerHTML = '</ul>' + template;
}


export default class TodoController {
	constructor() {
		_todoService.getTodos(draw)
	}
	addTodoFromForm(e) {
		e.preventDefault()
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		let todo = {
			description: form.inputText.value
		};
		form.reset()

		//YOU SHOULDN'T NEED TO CHANGE THIS
		_todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		let updatedData = {
			completed: document.getElementById(todoId).checked,
			_id: todoId
		}
		_todoService.toggleTodoStatus(updatedData, getTodos)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId, getTodos)
	}
	// could not get Bootstrap Collapse to work!
	toggleDisplay() {
		_display = !_display;
		if (_display) {
			document.getElementById('todo-frame').style.display = 'block'
		}
		else {
			document.getElementById('todo-frame').style.display = 'none'
		}
	}


}
