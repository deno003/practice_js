import { render } from "./view/html-util.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { TodoListView } from "./view/TodoListView.js";

export class App {
	constructor({
		formElement,
		formInputElement,
		todoListContainerElement,
		todoCountElement,
	}) {
		this.todoListView = new TodoListView();
		this.todoListModel = new TodoListModel([]);
		// bind to Element
		this.formElement = formElement;
		this.formInputElement = formInputElement;
		this.todoListContainerElement = todoListContainerElement;
		this.todoCountElement = todoCountElement;
		// handle呼び出しの際に常にAppのhandleを指すようにbindする
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	/**
	 * todo追加時リスナー
	 */
	handleAdd(title) {
		this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
	}

	/**
	 * todo更新時リスナー
	 */
	handleUpdate({ id, completed }) {
		this.todoListModel.updateTodo({ id, completed });
	}

	/**
	 * todo削除時リスナー
	 */
	handleDelete({ id }) {
		this.todoListModel.deleteTodo({ id });
	}

	/**
	 * submit
	 */
	handleSubmit(event) {
		event.preventDefault();
		const inputElement = this.formInputElement;
		this.handleAdd(inputElement.value);
		inputElement.value = "";
	}

	/**
	 * onChange
	 */
	handleChange() {
		const todoCountElement = this.todoCountElement;
		const todoListContainerElement = this.todoListContainerElement;
		const todoItems = this.todoListModel.getTodoItems();
		const todoListElement = this.todoListView.createElement(todoItems, {
			onUpdateTodo: ({ id, completed }) => {
				this.handleUpdate({ id, completed });
			},
			onDeleteTodo: ({ id }) => {
				this.handleDelete({ id });
			},
		});
		render(todoListElement, todoListContainerElement);
		todoCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
	}

	mount() {
		this.todoListModel.onChange(this.handleChange);
		this.formElement.addEventListener("submit", this.handleSubmit);
	}

	unmount() {
		this.todoListModel.offChange(this.handleChange);
		this.formElement.removeEventListener("submit", this.handleSubmit);
	}
}
