/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
        const newNode = new Node(val)
       if (!this.head){
        this.head = newNode;
        this.tail = newNode;
       } else{
        this.tail.next = newNode;
        this.tail = newNode;
       }
        
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode
        }
  
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      if(this.head == null ){
        throw new Error("list is empty")
  
      } else{
        return this.removeAt(this.length-1);
      }
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
       return this.removeAt(0);
  
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
    if(idx >= this.length || idx <0){
        throw new Error('invalid index');

    }
    return this._get(idx).val;
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
     if( idx >= this.length || indx < 0){
        throw new error("invalid index");
     }
     let value = this._get(idx);
     value.val = val;
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
  
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
  
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      
    }
  }
  
  module.exports = LinkedList;
  