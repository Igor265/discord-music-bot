export default class Command {
    constructor(name) {
        this.name = name;
    }

    execute(message, args) {
        throw new Error('Method "execute()" must be implemented.');
    }
}