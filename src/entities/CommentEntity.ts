import Entity from "@/fondation/Entity";
import PersonEntity from "@/entities/PersonEntity";

export default class CommentEntity extends Entity {
    getAuthor(): PersonEntity {
        return new PersonEntity(this.data.author);
    }
}