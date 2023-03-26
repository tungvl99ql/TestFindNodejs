class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (node === null) {
            return false;
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return true;
        }
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(node, data) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            let tempNode = this.findMinNode(node.right);
            node.data = tempNode.data;
            node.right = this.deleteNode(node.right, tempNode.data);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = { BST };
