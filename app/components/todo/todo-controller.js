import TodoService from "./todo-service.js";
import Todo from "../../models/todo.js";


var _todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	_todoService.getTodos(draw)
}

function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	//DONT FORGET TO LOOP
	let template = `To Do List: (${todos.length})<ul>`
	todos.forEach(todo => {
		let checked = ''
		if (todo.completed) { checked = 'checked' }
		template += `
			<li>
			<input type="checkbox" name="status" id="${todo._id}" ${checked} onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
			${todo.description}
			<button onclick="app.controllers.todoController.removeTodo('${todo._id}')">delete</button>
			</li>
			`
	})
	document.getElementById('todo-list').innerHTML = '</ul>' + template;
}


export default class TodoController {
	constructor() {
		_todoService.getTodos(draw)
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again



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

	toggleTodoStatus(todoId) { //MARK <<-----------------------
		// asks the service to edit the todo status
		let updatedData = {
			completed: document.getElementById(todoId).checked,
			_id: todoId
		}
		_todoService.toggleTodoStatus(updatedData, getTodos) //MARK <<-----------------------
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
