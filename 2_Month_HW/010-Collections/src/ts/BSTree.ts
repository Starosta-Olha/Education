import {ITree} from "./types";

class Node {
    item: number | string;
    right: null | Node;
    left: null | Node;

    constructor(item) {
        this.item = item;
        this.right = null;
        this.left = null;
    }

}

export class BSTree implements ITree {
    root: null | Node;

    constructor() {
        this.root = null;
    }

    clear(): void {
        this.root = null;
    }

    height(): number {
        if (this.root === null) {
            return 0
        }

        function counterH(item, height): number {
            if (item.right === null && item.left === null) {
                return height;
            }
            if (item.right && item.left) {
                return Math.max(counterH(item.right, height + 1), counterH(item.left, height + 1));
            } else if (item.right === null) {
                return counterH(item.left, height + 1);
            } else {
                return counterH(item.right, height + 1);
            }
        }

        return counterH(this.root, 1)
    }

    init(array): void {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i])
        }
    }

    insert(item): void {
        if (this.root === null) {
            this.root = new Node(item);
        } else {
            let current = this.root;

            while (current) {
                if (current.item === item) {
                    if (current.right === null) {
                        current.right = new Node(item);
                        return;
                    } else {
                        current = current.right;
                    }
                }
                if (current.item < item) {
                    if (current.right === null) {
                        current.right = new Node(item);
                        return;
                    } else {
                        current = current.right;
                    }
                }
                if (current.item > item) {
                    if (current.left === null) {
                        current.left = new Node(item);
                        return;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    leaves(): number {
        function counter(item): number {
            if (item === null) {
                return 0;
            }
            if (item.right === null && item.left === null) {
                return 1;
            }
            return counter(item.right) + counter(item.left);
        }

        return counter(this.root);

    }

    maxNode(): any {
        let item = this.root;

        if (item === null) {
            return undefined;
        }

        while (item) {
            if (item.right === null) {
                return item.item;
            }
            item = item.right;
        }
    }

    minNode(): any {
        let item = this.root;

        if (item === null) {
            return undefined;
        }

        while (item) {
            if (item.left === null) {
                return item.item;
            }
            item = item.left;
        }
    }

    nodes(): number {
        const arr = this.toArray();
        return arr.length;
    }

    print(node: any, callback: (arg0: Node) => void): void {
        callback(this.root);
    }

    remove(item): any {
        if (item === null) {
            return undefined;
        }

        this.root = removeNode(this.root, item);

        function removeNode(current, item): any {
            if (current === null) {
                return null;
            }
            if (item < current.item) {
                current.left = removeNode(current.left, item);
            } else if (item > current.item) {
                current.right = removeNode(current.right, item);
            } else {
                if (current.left == null && current.right == null) {
                    current = null;
                    return current;
                } else if (current.left == null) {
                    current = current.right;
                    return current;
                } else if (current.right == null) {
                    current = current.left;
                    return current;
                } else {
                    current.right = removeNode(currentItem(current.right).right, currentItem(current.right).item);
                    return current;
                }
            }
            return current;
        }

        function currentItem(item) {
            while (item && item.left) {
                item = item.left
            }
            return item;
        }
        if(this.root !== null) {
            return this.root.item ;
        } else {
            return null;
        }
    }

    reverse(): void {
        let item = this.root

        changeArr(item);

        function changeArr(current) {
            if (current === null) {
                return null;
            }
            if (current.left && current.right) {
                let right = current.right;
                current.right = current.left;
                current.left = right;
                changeArr(current.right);
                changeArr(current.left);
            } else if (current.left === null) {
                current.left = current.right;
                current.right = null;
                changeArr(current.left);
            } else if (current.right === null){
                current.right = current.left;
                current.left = null;
                changeArr(current.right);
            }
        }
    }

    search(item): any {
        let current = this.root;

        if (current === null) {
            return undefined;
        }

        while(current) {
            if (current.item === item) {
                return current.item;
            }
            if (current.item > item) {
                current = current.left;
            }
            if (current.item < item) {
                current = current.right;
            }
        }

        return undefined;
    }

    size(): number {
        const arr = this.toArray()
        return arr.length;
    }

    toArray(): any[] {
        let result = [];
        pushArray(this.root, result);

        function pushArray(current, result): void{
            if (current) {
                pushArray(current.left, result);
                result.push(current.item);
                pushArray(current.right, result);
            }
        }
        return result;
    }

    width(): number {
        let item = 0;
        let maxitem = 0;

        if (this.root === null) {
            return 0;
        }

        if (this.root.right === null && this.root.left === null) {
            return 1;
        }

        for (let i = 1; i <= this.height(); i++) {
            item = counterWidth(this.root, i)

            if (item > maxitem) {
                maxitem = item;
            }
        }

        function counterWidth(current, level) {
            if (current === null) {
                return 0;
            }

            if (level === 1) {
                return 1;
            }

            return counterWidth(current.right, level - 1) + counterWidth(current.left, level - 1);
        }
        return maxitem;
    }
}