import { element } from "./html-util.js";

export class TodoItemView {
	/**
	 * @param  {} todoItem
	 * @param  {} {onUpdateTodo
	 * @param  {} onDeleteTodo}
	 * @param  {element`<li><inputtype="checkbox"class="checkbox">${item.title}<buttonclass="delete">x</button></li>`;constinputCheckboxElement=todoItemElement.querySelector(".checkbox"} {consttodoItemElement=item.completed?element`<li><inputtype="checkbox"class="checkbox"checked><s>${item.title}</s><buttonclass="delete">x</button></li>`
	 */
	createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
		const todoItemElement = todoItem.completed
			? element`<li><input type="checkbox" class="checkbox" checked>
        <s>${todoItem.title}</s>
        <button class="delete">x</ button></ li>`
			: element`<li><input type="checkbox" class="checkbox">
        ${todoItem.title}
        <button class="delete">x</ button></ li>`;

		// 更新
		const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
		inputCheckboxElement.addEventListener("change", () => {
			// 指定したTodoItemの完了状態を反転させる
			onUpdateTodo({
				id: todoItem.id,
				completed: !todoItem.completed,
			});
		});

		// 削除
		const deleteButtonElement = todoItemElement.querySelector(".delete");
		deleteButtonElement.addEventListener("click", () => {
			onDeleteTodo({
				id: todoItem.id,
			});
		});

		// 作成したhtml要素を返却する
		return todoItemElement;
	}
}
