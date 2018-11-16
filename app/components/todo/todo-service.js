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
				console.log('ToDo' + res)
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
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//var todo = {completed: } ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todo._id, todo)//MARK <<-----------------------
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				callback()//MARK <<-----------------------
			})
			.catch(logError)
	}

	removeTodo(todoId) {
		// Umm this one is on you to write.... The method is a DELETE
		todoApi.delete('', todoId)

	}

}
