
export class Todo {
  static Status = ['Pending', 'Completed', 'In Progress'];
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
   * @param { Date } updatedAt - Todo's last updated 
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
    if (!Todo.#isAllowedInstance) {
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
    if (!Todo.Status.includes(status)) throw new Error('status is invalid!');

    Todo.#isAllowedInstance = true;
    const todo = new Todo(
      crypto.randomUUID(),
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

  /**
   * @param {string} title - Todo's title
   */
  set title(title) {
    this.#title = String(title);
    this.#updatedAt = new Date();
  }

  /**
   * @param {string} description - Todo's description
   */
  set description(description) {
    this.#description = String(description);
    this.#updatedAt = new Date();
  }

  /**
   * @param {string} status - Todo's Current state
   */
  set status(status) {
    this.#status = String(status);
    this.#updatedAt = new Date();
  }
}