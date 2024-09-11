class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Append at the end of the list
	append(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	// Delete at a specific position
	deleteAt(index) {
		if (index < 0 || index >= this.size) return null;
		let current = this.head;
		let prev = null;

		if (index === 0) {
			this.head = current.next;
		} else {
			for (let i = 0; i < index; i++) {
				prev = current;
				current = current.next;
			}
			prev.next = current.next;
		}
		this.size--;
	}

	// Get the element at a specific index (O(n))
	get(index) {
		if (index < 0 || index >= this.size) return null;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current.value;
	}

	// Get all elements in the list
	getAll() {
		let current = this.head;
		let result = [];
		while (current) {
			result.push(current.value);
			current = current.next;
		}
		return result;
	}
}

// Example Usage
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList.getAll()); // Output: [10, 20, 30]
linkedList.deleteAt(1); // Delete element at index 1
console.log(linkedList.getAll()); // Output: [10, 30]
