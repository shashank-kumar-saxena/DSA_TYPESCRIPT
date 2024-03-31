export class Block<T> {
    public val:T;
    public next: Block<T> | null;
    constructor(val:T) {
        this.val = val;
        this.next = null;
    }
}