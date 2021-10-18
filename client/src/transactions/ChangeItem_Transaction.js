import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
    
    @author McKilla Gorilla
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, index, oldName, newName) {
        super();
        this.store = initStore;
        this.oldName = oldName;
        this.newName = newName;
        this.index = index;
    }

    doTransaction() {
        this.store.changeItemName(this.index, this.newName);
    }
    
    undoTransaction() {
        this.store.changeItemName(this.index, this.oldName);
    }
}