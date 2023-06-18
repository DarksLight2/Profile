export default abstract class Iterator<T> {
    collection: T[];
    index: number;

    constructor(collection: Array<any> | undefined) {
        this.collection = collection;
        this.index = 0
    }

    next() {
        return this.collection[this.index + 1]
    }

    current() {
        return this.collection[this.index]
    }
}