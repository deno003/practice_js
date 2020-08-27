// ユニークIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {
	/**
	 * @param {string} title
	 * @param {boolean} completed
	 */
	constructor({ title, completed }) {
		// idは自動的に連番かつインスタンスごとに異なる
		this.id = todoIdx++;
		this.title = title;
		this.completed = completed;
	}

	/**
	 * タイトルから空文字の時にtrue
	 */
	isEmptyTitle() {
		return this.title.length === 0;
	}
}
