export interface IList {
    clear:() => void
    add:(item) => void
    getSize:() => number
    set:(item, index) => void
    get:(index) => number
    remove: (item) => number
    toArray:() => number[]
    toString:() => string
    contains:(item) => boolean
    minValue:() => number
    maxValue:() => number
    minIndex:() => number
    maxIndex:() => number
    revers:() => void
    halfRevers:() => void
    retainAll:(items: number[]) => void
    removeAll:(items: number[]) => void
    sort:() => void
    print:() => void
}

export interface ITree {
    init: (array) => void
    clear: () => void
    size: () => number
    insert: (item) => void
    print: (node, callback) => void
    toArray: () => any[]
    search: (item) => number
    width: () => number
    height: () => number
    nodes: () => number
    leaves: () => number
    reverse: () => void
    minNode: () => any
    maxNode: () => number
    remove: (item) => any
}