class Set {
    set = [];
    constructor(values) {
        for (let i = 0; i < values.length; i++) {
            // console.log(values.slice(i + 1), values[i]);
            if (!values.slice(i + 1).includes(values[i]))
                this.set.push(values[i]);
        }
        // console.log(this.set)
    }
    //交集
    intersection(otherSet) {
        let outPut = [];
        for (let i = 0; i < otherSet.set.length; i++) {
            if (this.set.includes(otherSet.set[i])) {
                outPut.push(otherSet.set[i]);
            }
        }
        return outPut;
    }
    //并集
    union(otherSet) {
        let outPut = this.set;
        for (let i = 0; i < otherSet.set.length; i++) {
            if (!this.set.includes(otherSet.set[i])) {
                outPut.push(otherSet.set[i]);
            }
        }
        return outPut;
    }
    //补集  otherSet - thisSet
    complement(otherSet) {
        let outPut = [];
        for (let i = 0; i < otherSet.set.length; i++) {
            if (!this.set.includes(otherSet.set[i])) {
                outPut.push(otherSet.set[i]);
            }
        }
        return outPut;
    }
    add(otherSet) {
        this.set.push(...this.complement(otherSet));
    }

}
// let a = new Set(['a', 'b', 'c', 'd']);
// let b = new Set(['b', 'd', 'e','z']);
// console.log(a.intersection(b))
// console.log(a.union(b))
module.exports = Set;