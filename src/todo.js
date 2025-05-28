
export class Todo {

  static #isAllowedInstance = false;
  #id;
  #title;
  #description;
  #status;
  #createdAt;
  #updatedAt;

  /**
   * @private
   * @summary Creates a new Todo instances
   * @param { string } id - Todo's ID 
   * @param { string } title - Todo's title
   * @param { string } description - Todo's description
   * @param { string } status - Todo's Current state 
   * @param { Date } createdAt - Todo's creation date
   * @param { Date } updatedAt - last updated of Todo
   * @throws { Error } if the class is not allowed to be instantiated directly
   */
  constructor(
    id,
    title,
    description,
    status,
    createdAt,
    updatedAt,
  ) {
    if (Todo.#isAllowedInstance) {
      throw new Error('This class is not allowed to be instantiated directly');
    }
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#status = status;
    this.#createdAt = createdAt;
    this.#updatedAt = updatedAt;
  }

  /**
   * @summary Creates a new Todo instance
   * @param { string } title - Todo's title
   * @param { string } description - Todo's description
   * @param { string } status - Todo's Current state
   * @returns { Todo } - A new Todo instance
   * @throws { Error } if any of the required parameters are missing
   */
  static createTodo(
    title,
    description,
    status,
  ) {
    if (!title) throw new Error('title is required!');
    if (!description) throw new Error('description is required!');
    if (!status) throw new Error('status is required!');

    Todo.#isAllowedInstance = true;
    const todo = new Todo(
      title,
      description,
      status,
      new Date(),
      new Date(),
    );
    Todo.#isAllowedInstance = false;
    return todo;
  }

  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get status() {
    return this.#status;
  }
  get createdAt() {
    return this.#createdAt;
  }

  get updatedAt() {
    return this.#updatedAt;
  }

  set title(title) {
    this.#title = title;
    this.updatedAt = new Date();
  }

  set description(description) {
    this.#description = description;
    this.updatedAt = new Date();
  }

  set status(status) {
    this.#status = status;
    this.updatedAt = new Date();
  }
}