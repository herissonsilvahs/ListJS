class OrderedDoublyLinkedList extends DoublyLinkedList {
  constructor(){
    super()
  }

  insertOrdered(element) {
    if (super.isEmpty()) {
      super.append(element)
    } else {
      /* let index = 0
      while (index < super.size()) {
        if (super.getElement(index) > element) {
          super.insert(index, element)
          return
        } else if (index == super.size() - 1) {
          super.append(element)
          return
        }
        index++
      } */

      for (let i = 0; i < super.size(); i++) {
        if (super.getElement(i) > element) {
          super.insert(i, element)
          return
        } else if (i == super.size() - 1) {
          super.append(element)
          return
        }
      }
    }
  }

  append(element) {
    this.insertOrdered(element)
  }
}