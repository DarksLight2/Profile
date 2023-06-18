import CommentEntity from "@/entities/CommentEntity";
import Collection from "@/fondation/Collection";

export default class CommentCollection extends Collection{
    commentaries: Array<CommentEntity>

    constructor(commentaries: Array<CommentEntity>) {
        super(commentaries);
        this.commentaries = commentaries;
    }

    getData(): Array<CommentEntity> {
        return this.commentaries;
    }



}