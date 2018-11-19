import Todo from "../../models/todo.js";


const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/kasandra/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		todoApi.get('')
			.then((res) => {
				let todoList = res.data.data
				todoList = todoList.map(todoData => new Todo(todoData))
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, callback) {
		todoApi.post('', todo)
			.then(function (res) {
				callback()
			})
			.catch(logError)
	}

	toggleTodoStatus(todo, callback) {
		todoApi.put(todo._id, todo)
			.then(callback)
			.catch(logError)
	}

	removeTodo(todoId, callback) {
		todoApi.delete(todoId)
			.then(callback)
			.catch(logError)
	}
}
