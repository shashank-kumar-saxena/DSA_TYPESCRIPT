import { RESPONSE_MESSAGES } from "../../src/enum/response.messages";
import { Block } from "./node";

class LkList<T> {
    private head:Block<T> | null = null;

    public insertAtBeginning(val:T) {
        const node = new Block<T>(val);
        if(!this.head) {
            node.next = null;
            this.head = node;
            return {success: RESPONSE_MESSAGES.ELEMENT_INSERT_SUCCESS};
        }
        node.next = this.head;
        this.head = node;
        return {success: RESPONSE_MESSAGES.ELEMENT_INSERT_SUCCESS};
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

    public insertAtEnd(val: T) {
        const node = new Block<T>(val);
        node.next = null;
        if(!this.head) {
            node.next= null;
            this.head = node;
            return {success: RESPONSE_MESSAGES.ELEMENT_INSERT_SUCCESS};
        }
        let temp: Block<T> | null = this.head;
        while(temp.next!=null) {
            temp = temp.next;
        }
        temp.next = node;
        return {success: RESPONSE_MESSAGES.ELEMENT_INSERT_SUCCESS};
    }

    public deleteElementFromStart() {
        if(!this.head) {
            return {success: RESPONSE_MESSAGES.NO_ELEMENT_AVAILABLE_TO_DELETE};
        }
        this.head = this.head.next;
        return {success: RESPONSE_MESSAGES.ELEMENT_DELETE};
    }

    public insertElementAfterSpecificElement(value: T,searchElement: T) {
        if(!this.head) {
            return { success: RESPONSE_MESSAGES.SEARCHABLE_ELEMENT_NOT_FOUND}
        }
        let temp: Block<T> | null = this.head;
        while(temp) {
            if(temp.val== searchElement)
                {
                    const node = new Block(value);
                    node.next= temp.next;
                    temp.next = node;
                    return {success: RESPONSE_MESSAGES.ELEMENT_INSERT_SUCCESS};
                }
                temp = temp.next;
        }
        return { success: RESPONSE_MESSAGES.SEARCHABLE_ELEMENT_NOT_FOUND};
    }

    public reverseTraverse() {
        if(!this.head) {
            return {
                success: '[]'
            }
        }
        let temp: null | Block<T> = this.head;
        const arr: T[] = [];
        while(temp!=null) {
            arr.unshift(temp.val);
            temp = temp.next;
        }
        return {
            success: `${arr.join('->')}`
        }
    }
}
export const lkList= new LkList<number>();