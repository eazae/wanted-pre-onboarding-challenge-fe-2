/**
 * Represents a Todo
 * @typedef Todo
 * @type {Object}
 * @property {string} id - To do id.
 * @property {string} contents - To do Contents.
 * @property {boolean} isCompleted - To do Completed.
 * @property {string} categorys - To do categorys.
 * @property {string} tags - To do tags.
 */

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @property {string} id - To do id.
 * @property {string} contents - To do Contents.
 * @property {boolean} isCompleted - To do Completed.
 * @property {string} categorys - To do categorys.
 * @property {string} tags - To do tags.
 */
function Todo(title, author) { }

/**
 * Create todo.
 * @function createTodo
 * @param {string} id - To do id.
 * @param {string} contents - To do Contents.
 * @param {string} categorys - To do categorys.
 * @param {string} tags - To do tags.
 */
function CreateTodo(id, contents, categorys, tags) { }

/**
 * Read todo.
 * @function readTodo
 * @param {string} id - To do id.
 */
function ReadTodo(id) { }

/**
 * Update todo.
 * @function updateTodo
 * @param {string} id - To do id.
 * @param {string} contents - To do Contents.
 * @param {boolean} isCompleted - To do Completed.
 * @param {string} categorys - To do categorys.
 * @param {string} tags - To do tags.
 */
function UpdateTodo(id, contents, isCompleted, categorys, tags) { }

/**
 * Update Delete.
 * @param {string} id - To do id.
 * @function deleteTodo
 */
function DeleteTodo(id) { }