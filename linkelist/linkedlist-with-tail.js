class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedListWithTail {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = null;
	}

	prepend(value) {
		let newNode = new Node(value);

		// If the list is empty, set both head and tail to the new node
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Insert the new node at the beginning of the list
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	append(value) {
		let newNode = new Node(value);

		// If the list is empty, set both head and tail to the new node
		if (!this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Add the new node at the end of the list
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	removeFirst() {
		if (!this.head) {
			// List is empty, nothing to remove
			return;
		}

		// Move the head to the next node
		this.head = this.head.next;

		// If the list becomes empty after removal, update tail to null
		if (!this.head) {
			this.tail = null;
		}
	}

	removeAt(position) {
		if (position < 0) {
			// Invalid position
			return;
		}

		if (!this.head) {
			// List is empty
			return;
		}

		if (position === 0) {
			// Removing the first node
			this.head = this.head.next;

			// If the list becomes empty after removal, update tail to null
			if (!this.head) {
				this.tail = null;
			}
			return;
		}

		// Traverse the list to find the node before the one to be removed
		let current = this.head;
		let previous = null;
		let index = 0;

		while (current && index < position) {
			previous = current;
			current = current.next;
			index++;
		}

		if (current) {
			// Remove the node at the given position
			previous.next = current.next;

			// If the node to be removed is the tail, update the tail
			if (current === this.tail) {
				this.tail = previous;
			}
		}
	}

	removeLast() {
		if (!this.head) {
			// List is empty, nothing to remove
			return;
		}

		if (this.head === this.tail) {
			// List has only one node
			this.head = this.tail = null;
			return;
		}

		// Traverse the list to find the second-to-last node
		let current = this.head;
		while (current.next !== this.tail) {
			current = current.next;
		}

		// Remove the last node
		current.next = null;
		this.tail = current;
	}

	get() {
		let currentNode = this.head;
		let result = [];
		let counter = 0;

	

		while (currentNode) {
			result.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return result;
	}
}

const headTail = new LinkedListWithTail();
headTail.prepend(1);
headTail.prepend(2);
headTail.append(3);
headTail.append(4);
headTail.append(5);
headTail.append(6);
headTail.append(7);
headTail.removeLast();
headTail.removeFirst()
headTail.removeAt(3);

console.log(headTail.get());
