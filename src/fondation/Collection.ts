import Iterator from "@/fondation/Iterator";
import Entity from "@/fondation/Entity";

export default abstract class Collection extends Iterator<Object>{
    abstract getData(): Array<object>

    protected constructor(commentaries: Array<any>|undefined, entity: Entity|undefined = undefined) {
        // if(typeof commentaries === undefined && typeof entity !== undefined) {
        //
        // }

        super(commentaries);

    }

    first(): Object {
        return this.getData()[0];
    }

    last() {
        return this.getData()[this.getData().length - 1]
    }

    fromEntity() {
        return this;
    }
}