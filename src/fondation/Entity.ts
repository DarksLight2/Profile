export default class Entity {

    data: any;

    constructor(data: string|Object) {
        this.data = this.parse(data);
    }

    parse(data: string | object) {
        if (typeof data === 'string') {
            return JSON.parse(data);
        }

        return data;
    }

    getCreatedAt(): string {
        return this.data.created_at;
    }


    getUpdatedAt(): string {
        return this.data.updated_at;
    }
}