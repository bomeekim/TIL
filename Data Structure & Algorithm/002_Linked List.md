# 연결리스트 (Linked List)
2021.12.07 화요일

[강의링크](https://programmers.co.kr/learn/courses/13213/lessons/91071)

> Q. **추가**와 **삭제**가 반복되는 로직이라면 어떻게 해야할까?
> 
> 위의 문제를 해결하기 위해 배열은 사용하게 되면 시간복잡도가 늘어난다. 왜냐하면 *배열은 탐색이 많은 경우에 유리한 자료구조*이기 때문이다. 따라서 이러한 경우에는 **연결리스트를 이용**해 문제를 해결한다.

## 연결리스트
- 각 요소를 포인터로 연결하여 관리하는 선형 자료구조
- 각 요소는 `노드`라고 부르며 `데이터 영역`과 `포인터 영역`으로 구성된다.

### 특징
1. **메모리가 허용하는 한** 요소를 **제한없이 추가**할 수 있다.
2. 탐색은 `O(n)`이 소요된다.
3. 요소를 추가하거나 제거할 때는 `O(1)`이 소요된다.
4. Singly Linked List, Doubly Linked List, Circular Linked List 3가지가 존재한다.

### 배열과의 차이점
1. 메모리 차이

|배열|연결리스트|
|----|---------|
|**순차적**으로 데이터가 들어가므로 메모리를 **연속적으로 사용**|**순차적이지 않고**, 각 데이터가 퍼져있어 **포인터**를 사용해 각 영역을 참조한다.|

2. 삭제/추가

||배열|연결리스트|
|---|----|---------|
|추가|뒤로 한칸 씩 밀어야 하므로 -> O(n)|추가할 노드의 이전 노드의 포인터가 추가할 노드를 가르키도록 변경해준다. -> O(1) |
|삭제|삭제된 요소의 공백을 메우기 위해 뒤에 있는 요소들이 앞으로 당겨진다. -> O(n)|삭제할 요소의 이전 노드가 가르키는 포인트를 삭제할 요소의 다음 노드를 가르키도록 바꿔준다. -> O(1)

## 연결리스트 with JS

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;

    while(currNode.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    
    while(prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  length() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  display() {
    let currentNode = this.head;
    let displayString = '[';

    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';

    console.log(displayString);
  }
}
```

