

export class Todo {

    static count = 1;

    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        this.id = Todo.count++;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}