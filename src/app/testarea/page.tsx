import React from 'react'

class Node {

    value: number
    left: Node | null
    right: Node | null

    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    root: Node | null
    count: number

    constructor(value: number) {
        this.root = new Node(value)
        this.count = 0
    }

    size() {
        return this.count;
    }

    insert(newValue: number) {
        this.count++

        let newNode: Node = new Node(newValue)

        let loopedNode: Node | null = this.root ? this.root : null

        while (loopedNode != null) {
            let leftNode = loopedNode.left
            let rightNode = loopedNode.right

            if (loopedNode.value < newValue) {
                if (loopedNode.right == null) {
                    loopedNode.right = newNode
                    break;
                }
                else {
                    loopedNode = loopedNode.right
                }
            }
            else if (loopedNode.value > newValue) {
                if (loopedNode.left == null) {
                    loopedNode.left = newNode
                    break;
                }
                else {
                    loopedNode = loopedNode.left

                }
            }
            else {
                loopedNode = null
            }
        }
    }

    min() {
        let bst: BST = this
        if (!bst)
            return
        let firstNode: Node | null = bst.root
        if (!firstNode)
            return
        let searchedNode: Node = firstNode

        let previousValue = searchedNode.value

        while (searchedNode != null) {

            if (searchedNode.left) {
                if (searchedNode.left.value < previousValue) {
                    previousValue = searchedNode.left.value
                    searchedNode = searchedNode.left
                }
                else {
                    previousValue = searchedNode.value
                    break;
                }
            }
            else {
                break
            }
        }
        return previousValue

    }

    max() {
        let bst: BST = this
        if (!bst)
            return
        let firstNode: Node | null = bst.root
        if (!firstNode)
            return
        let searchedNode: Node = firstNode

        let previousValue = searchedNode.value

        while (searchedNode != null) {

            if (searchedNode.right) {
                if (searchedNode.right.value > previousValue) {
                    previousValue = searchedNode.right.value
                    searchedNode = searchedNode.right
                }
                else {
                    previousValue = searchedNode.value
                    break;
                }
            }
            else {
                break
            }
        }
        return previousValue
    }
    contains(searchedValue: number) {
        let bst: BST = this
        if (!bst)
            return
        let firstNode: Node | null = bst.root
        if (!firstNode)
            return
        let searchedNode: Node|null = firstNode

        while (searchedNode != null) {
            if(searchedNode.value == searchedValue)
                return true
            if(searchedValue < searchedNode.value){
                searchedNode = searchedNode.left
            }else{
                searchedNode = searchedNode.right
            }
        }
        return false
    }

}


export default function page() {

    const binary = new BST(0)
    binary.insert(1)
    binary.insert(10)
    binary.insert(25)

    binary.insert(33)
    binary.insert(-44)
    binary.insert(1)


    binary.insert(-5)
    binary.insert(50)

    return (
        <div className="flex flex-row min-h-screen bg-slate-100 justify-center items-center">
            {binary.min()}
            <br />
            {binary.max()}
            {binary.contains(34) ? 'tak' : 'nie'}
        </div>
    )
}
