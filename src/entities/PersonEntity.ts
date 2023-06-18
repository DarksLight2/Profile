import Entity from "@/fondation/Entity";

export default class PersonEntity extends Entity {
    getUsername(): string {
        return this.data.username;
    }
}