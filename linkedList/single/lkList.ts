import { Block } from "./node";

class LkList<T> {
    private head:Block<T> | null = null;
    public insertAtBeginning(val:T) {
        const node = new Block<T>(val);
        if(!this.head) {
            node.next = null;
            this.head = node;
            return {success: "Element insert successfully"};
        }
        node.next = this.head;
        this.head = node;
        return {success: "Element insert successfully"};
    }
    public traverse() {
        if(!this.head)
        {
            return {
                success: "[]"
            }
        }
        let temp: Block<T> | null = this.head;
        let arr: T[] = [];
        while(temp!=null) {
            arr.push(temp.val);
            temp= temp.next;
        }
        return {success: `${arr.join('->')}`}
    }
}
export const lkList= new LkList<number>();