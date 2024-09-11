export class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	prepend(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}

	append(value) {
		let newNode = new Node(value);

		// if this head is null
		if (!this.head) {
			this.head = newNode;
		} else {
			let currentNode = this.head;

			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = newNode;
		}
		this.size++;
	}

	push(value) {
		let newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			let currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = newNode;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return; // If the list is empty, there's nothing to remove

		this.head = this.head.next; // Update head to the next node
		this.size--; // Decrement the size of the list
	}

	removeLast() {
		if (!this.head) return;

		let currentNode = this.head;
		let i = 0;
		while (currentNode.next && currentNode.next.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = null;

		this.size--;
	}

	removeByIndex(index) {
		if (index < 0 || index >= this.size) return; // Invalid index

		if (index === 0) {
			// Remove the head node
			this.head = this.head.next; // Update head to the next node
		} else {
			let currentNode = this.head;
			let previousNode;
			let i = 0;

			while (i < index) {
				previousNode = currentNode; // Node before the one to be removed
				currentNode = currentNode.next; // Traverse to the next node
				i++;
			}

			// Bypass the node to be removed
			previousNode.next = currentNode.next;
		}

		this.size--; // Decrement the size of the list
	}

	get() {
		let result = [];
		let current = this.head;

		while (current) {
			result.push(current.value); //get the first value
			current = current.next; //move the next pointer of node
		}

		return result;
	}

	getLength() {
		let currentNode = this.head; // Start at the head of the list
		let length = 0; // Initialize length counter

		while (currentNode) {
			// Traverse until the end of the list
			length++;
			currentNode = currentNode.next; // Move to the next node
		}

		return length; // Return the total length of the list
	}

	getByDefineLengthNode(length) {
		let currentNode = this.head; // Start at the head of the list
		let result = [];
		let counter = 0; // Counter to keep track of the number of nodes processed

		while (currentNode && counter < length) {
			// Continue until length is met
			result.push(currentNode.value); // Collect the value of the current node
			console.log(`Iteration ${counter + 1}`);
			console.log(`Current Node Value: ${currentNode.value}`);
			console.log(`Next Node Value: ${currentNode.next ? currentNode.next.value : 'null'}`);

			currentNode = currentNode.next; // Move to the next node
			counter++; // Increment the counter
		}

		console.log('Result:', result); // Print the result array with collected values
		return result; // Return the array of values
	}
}
const linklist = new LinkedList();
linklist.append(10);
linklist.append(20);
linklist.append(30);
linklist.prepend(40);
linklist.prepend(50);
linklist.removeByIndex(2);
linklist.removeLast();


console.log(linklist.get());